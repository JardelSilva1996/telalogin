

import './App.css'
import Login from './login'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './home';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/home'element={<Home/>}/>
        <Route path='/login'element={<Login/>}/>
      </Routes>
      </BrowserRouter>
       
     
    </div>
  )
}

export default App
