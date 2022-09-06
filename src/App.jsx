

import './App.css'
import Login from './login'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './home';
import Cadastro from './cadastro';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/home'element={<Home/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/cadastro'element={<Cadastro/>}/>
      </Routes>
      </BrowserRouter>
       
     
    </div>
  )
}

export default App
