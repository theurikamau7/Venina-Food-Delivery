// HomePage.js
import React, { useState, useEffect } from 'react';
import NavBar from './navbar';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../App.css';

function HomePage() {
  const [italianFoods, setItalianFoods] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    const filteredFoods = italianFoods.filter(food =>
      food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setItalianFoods(filteredFoods);
  };

  useEffect(() => {
    // Assuming the API returns objects with the necessary properties
    fetch('http://127.0.0.1:5000/foods')
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        setItalianFoods(data);
      });
  }, []);

  const handleAddToCart = (food) => {
    setCart([...cart, food]);
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
        <Link to={{ pathname: '/cart', state: { cart: cart } }} className='cart-link'>
          <FiShoppingCart />Cart({cart.length})
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
