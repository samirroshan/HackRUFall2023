import { useEffect, useState } from "react";
import {BrowserRouter as Router, Route, BrowserRouter, Routes} from "react-router-dom"
import './App.css';
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";



function App() {
  
  const [loginStatus, UpdateLoginStatus] = useState(localStorage.getItem("loginStatus"),);
  useEffect(() => {
    UpdateLoginStatus(localStorage.getItem("loginStatus"))
  }, [localStorage.getItem("loginStatus")]);
  
  return (
    <>
    <Navbar />
    
    <Router>
      <Routes>
        <Route path='/' element= <Register /> ></Route>
        <Route path='/login' element= <Login /> ></Route>
        <Route path='/register' element= <Register /> ></Route>

        {loginStatus ? (
          <>
            <Route path='/dashboard' element= <Dashboard /> ></Route>
            
          </>
        ) : (
          <>
            <Route path='/dashboard' element= <Login /> ></Route>
            
          </>
        )}
        

      </Routes>
      
    </Router>

  </>
  );
}

export default App;
