import React from 'react';
import './App.css';
import Nav from './components/shared/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/Welcome';
import Dashboard from './components/dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from './components/register/SignUp';
import Login from './components/login/Login';
import CreateWallet from './components/dashboard/dashboardoperations/CreateWallet';
import 'semantic-ui-css/semantic.min.css';
import About from './components/About/About';

function App() {
  return (
   
    <div>
    <BrowserRouter>
       <Nav/>
      <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/register" element={<SignUp />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/CreateWallet" element={<CreateWallet />}/>
        <Route path="/About" element={<About />}/>
      </Routes>
    </BrowserRouter>
  </div>
    

     

  );
}

export default App;
