// MyOrder.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function MyOrder({ cart, setCart, totalAmount }) {

  return (
    <div className='selected-cart'>
      <h1>Selected Items:</h1>
      {cart.length == 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className='table-container'>
         
            <table className='table'>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td> <img src={item.product.image} className='table-img'/></td>
                    <td>{item.product.name}</td>
                    <td>{item.product.description}</td>
                    <td>{item.product.price}</td>
                    <td>

                      <button onClick={() => {
                        setCart((prevdata) => {
                          const updatedQuantity = prevdata.map(
                            (prevItem) => prevItem.product.id == item.product.id ? {
                              ...prevItem, quantity: item.quantity + 1
                            } : prevItem
                          )
                          return updatedQuantity
                        })
                      }}>
                        +
                      </button>

                      
                      {item.quantity}

                      <button onClick={() => {
                        setCart((prevdata) => {
                          const updatedQuantity = prevdata.map(
                            (prevItem) => prevItem.product.id == item.product.id ? {
                              ...prevItem, quantity:Math.max(item.quantity - 1, 0)
                            } : prevItem
                          )
                          return updatedQuantity
                        })
                      }}>
                        -
                      </button>
                    </td>
                    <td>
                      <button>
                        Remove Item
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tr className='tr-amount'>
                <td className='amount'></td>
                <td className='amount'></td>
                <td className='amount'></td>
                <td className='amount'></td>
                <td className='amount'></td>
                <td>
                  Total: {totalAmount()}
                </td>
              </tr>
            </table>
   
        </div>
      )}
  
      <div className='order-summary'>

        <Link to="/payment">
          <button className='pay-now'>Pay Now</button>
        </Link>

        <Link to="/tracking">
          <button className='pay-later'>Pay Later</button>
        </Link>

      </div>
    </div>
  )
}

export default MyOrder;










// const location = useLocation();
// const cart = location.state ? location.state.cart : [];


// <div>
//   {/* Header */}
//   <div className="navbar">
//     {/* Include the NavBar component */}
//   </div>

//   {/* Order items */}
//   <div className="order-list">
//     {cart.map(item => (
//       <div key={item.id} className="order-item">
//         <img src={item.product.image} alt={item.name} className="item-image" />
//         <div className="item-details">
//           <div className="item-name">{item.product.name}</div>
//           <div className="item-description">{item.product.description}</div>
//           <div className="item-price">${item.product.price}</div>
//         </div>
//       </div>
//     ))}

//     {/* Gray-green lines separating items */}
//     <hr className="separator" />
//   </div>

//   {/* Total amount and buttons */}
//   <div className="order-summary">
//     <div className="payment-options">
//       <Link to="/payment">
//         <button className="pay-now">Pay Now</button>
//       </Link>
//       <Link to="/tracking">
//         <button className="pay-later">Pay Later</button>
//       </Link>
//     </div>
//   </div>
// </div>