import Home from './Components/Sign_In_Up';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAccount from './Components/SignUp';
import SignIn from './Components/SignIn';


function App() {

  return(
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Home />}/>
        <Route path='/create_account' element={<CreateAccount/>}/>
        <Route path='/sign in' element={<SignIn/>}/>

      </Routes>

    </BrowserRouter>
  )
}

export default App;
