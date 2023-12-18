import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MyOrder() {
  const [orderItems, setOrderItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use fetch to load the JSON data
        const response = await fetch('/db.json'); // Adjust the path as needed
        const data = await response.json();

        // Simulating data from the database
        await new Promise(resolve => setTimeout(resolve, 1000));
        setOrderItems(data.italianFoods);

        // Calculate total amount
        const total = data.italianFoods.reduce((acc, item) => acc + item.quantity * item.price, 0);
        setTotalAmount(total);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="navbar">
        {/* Include the NavBar component */}
      </div>

      {/* Order items */}
      <div className="order-list">
        {orderItems.map(item => (
          <div key={item.id} className="order-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
              <div className="item-name">{item.name}</div>
              <div className="item-description">{item.description}</div>
              <div className="item-price">${item.price}</div>
            </div>
          </div>
        ))}

        {/* Gray-green lines separating items */}
        <hr className="separator" />
      </div>

      {/* Total amount and buttons */}
      <div className="order-summary">
        <div className="total-amount">Total Amount: ${totalAmount}</div>
        <div className="payment-options">
          <Link to="/payment">
            <button className="pay-now">Pay Now</button>
          </Link>
          <Link to="/tracking">
            <button className="pay-later">Pay Later</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MyOrder;
