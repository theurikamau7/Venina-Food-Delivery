import Home from './Components/Sign_In_Up';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAccount from './Components/SignUp';


function App() {

  return(
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Home />}/>
        <Route path='/create_account' element={<CreateAccount/>}/>

      </Routes>

    </BrowserRouter>
  )
}

export default App;
