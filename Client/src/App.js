import Home from './Components/Sign_In_Up';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAccount from './Components/SignUp';
import SignIn from './Components/SignIn';
import HomePage from './Components/HomePage';
import Cart from './Components/Cart';
import TrackingPage from './Components/TrackingPage';
import PaymentPage from './Components/PaymentPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create_account' element={<CreateAccount />} />
        <Route path='/sign in' element={<SignIn />} />
        <Route path='/menu' element={<HomePage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/tracking' element={<TrackingPage />} />
        <Route path='/payment' element={<PaymentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

