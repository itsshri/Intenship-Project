import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import Form from '../src/pages/Form';
import Homee from './Components/Homee';
import Navbar from './Components/Navbar';
// import Dashboard from './Components/Dashboard';
import Contact from './pages/Contact';
import Services from './pages/Services';


function App() {
  return (
    <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/form" element={<Form />} /> 
        <Route path="/homee" element={<Homee />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/visa-services" element={<Services />} />
      </Routes>
  );
}

export default App;
