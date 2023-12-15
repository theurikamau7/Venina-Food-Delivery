import Home from './Components/Sign_In_Up';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAccount from './Components/SignUp';
import SignIn from './Components/SignIn';
import HomePage from './Components/HomePage';


function App() {

  return(
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Home />}/>
        <Route path='/create_account' element={<CreateAccount/>}/>
        <Route path='/sign in' element={<SignIn/>}/>
        <Route path='/menu' element={<HomePage />}/>

      </Routes>

    </BrowserRouter>
  )
}

export default App;
