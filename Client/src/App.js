// App.js
import React, { useState, useEffect } from 'react';
import SignInUp from './Components/Sign_In_Up';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAccount from './Components/SignUp';
import SignIn from './Components/SignIn';
import HomePage from './Components/HomePage';
import MyOrder from './Components/MyOrder';
import TrackingPage from './Components/TrackingPage';
import PaymentPage from './Components/PaymentPage';
import LandingPage from './Components/LandingPage'; 
import './App.css'

function App() {
  const [italianFoods, setItalianFoods] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);


  const handleSearch = () => {
    const filteredFoods = italianFoods.filter(food =>
      food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setItalianFoods(filteredFoods);
  };


  const handleAddToCart = (newCartProduct) => {
    const existingProduct = cart.find((item) => item.product.id == newCartProduct.id)

    if (existingProduct){
      const latestProduct = cart.map((item) => 
        item.product.id == newCartProduct.id ? {
          ...item, quantity: item.quantity + 1} : item
          )
          setCart(latestProduct)
    }
    else{
      setCart([...cart, {product: newCartProduct, quantity: 1}])
    }
  }

  const totalAmount = () => {
    let total = 0

    for (const item of cart){
      total += item.product.price * item.quantity
    }
    return total
  }




  useEffect(() => {
    // Assuming the API returns objects with the necessary properties
    fetch('http://127.0.0.1:5000/foods')
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        setItalianFoods(data);
      });
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/create_account' element={<CreateAccount />} />
        <Route path='/sign_in_up' element={<SignInUp />} />
        <Route path='/sign_in' element={<SignIn />} />
        <Route path='/menu' element={<HomePage cart={cart} handleAddToCart={handleAddToCart} searchQuery={searchQuery} setSearchQuery={setSearchQuery} italianFoods={italianFoods} handleSearch = {handleSearch}/>} />
        <Route path='/cart' element={<MyOrder totalAmount={totalAmount} setCart={setCart} cart={cart} />} />
        <Route path='/tracking' element={<TrackingPage />} />
        <Route path='/payment' element={<PaymentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


