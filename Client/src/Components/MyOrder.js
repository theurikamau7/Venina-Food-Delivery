// MyOrder.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function MyOrder() {
  const location = useLocation();
  const cart = location.state ? location.state.cart : [];

  return (
    <div>
      {/* Header */}
      <div className="navbar">
        {/* Include the NavBar component */}
      </div>

      {/* Order items */}
      <div className="order-list">
        {cart.map(item => (
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


