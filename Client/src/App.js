// App.js
import React from 'react';
import SignInUp from './Components/Sign_In_Up';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAccount from './Components/SignUp';
import SignIn from './Components/SignIn';
import HomePage from './Components/HomePage';
import MyOrder from './Components/MyOrder';
import TrackingPage from './Components/TrackingPage';
import PaymentPage from './Components/PaymentPage';
import LandingPage from './Components/LandingPage'; // Import the new component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/create_account' element={<CreateAccount />} />
        <Route path='/sign_in_up' element={<SignInUp />} />
        <Route path='/sign_in' element={<SignIn />} />
        <Route path='/menu' element={<HomePage />} />
        <Route path='/cart' element={<MyOrder />} />
        <Route path='/tracking' element={<TrackingPage />} />
        <Route path='/payment' element={<PaymentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


