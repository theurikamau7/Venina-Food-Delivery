// HomePage.js
import React, { useState, useEffect } from 'react';
import NavBar from './navbar';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../App.css';
import MyOrder from './MyOrder';

function HomePage({cart, handleAddToCart, handleSearch, italianFoods, searchQuery, setSearchQuery}) {
  

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };



  return (
    <div className='home-container'>
      <div className="navbar">
        <NavBar />
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search Italian foods..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button className='search-button' onClick={handleSearch}>Search</button>
      </div>
      <div className='container'>
        <div className='cards-container'>
          {italianFoods.map(food => (
            <div key={food.id}>
              <img className='images' src={food.image} alt={food.name} />
              <h3>{food.name}</h3>
              <p>{food.description}</p>
              <button className='add-to-cart-button' onClick={() => handleAddToCart(food)}>
                Order
                <FiShoppingCart />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className='cart'>
        <Link to="/cart">
          <FiShoppingCart /> Cart({cart.length})
        </Link>


      </div>
    </div>
  );
}

export default HomePage;
