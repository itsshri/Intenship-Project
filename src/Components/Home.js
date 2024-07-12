import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Components/Navbar';
import SideBar from './Dashboard';
import '../Components/css/home.css';

const Home = () => {
  const navigate = useNavigate();
  const [accessCode, setAccessCode] = useState(''); 
  const [theme, setTheme] = useState('light');
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleToggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    document.documentElement.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
  };

  const handleMenuClick = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleScanEyeClick = () => {
    navigate('/login');
  };

  const handleRequestAccessClick = () => {
    const validAccessCode = '1'; 
    if (accessCode === validAccessCode) {
      toast.success('Access Granted', { 
        autoClose: 2000,
        className: 'toast-custom',
        bodyClassName: 'toast-custom-body',
        progressClassName: 'toast-custom-progress',
      });
      setTimeout(() => {
        navigate('/homee');
      }, 2000); // Delay navigation to allow toast to display
    } else {
      toast.error('Access Denied', { 
        autoClose: 2000,
        className: 'toast-custom',
        bodyClassName: 'toast-custom-body',
        progressClassName: 'toast-custom-progress',
      });
    }
  };

  return (
    <div className='home-container'>
      <Navbar 
        onMenuClick={handleMenuClick} 
        onScanEyeClick={handleScanEyeClick} 
        theme={theme} 
        toggleTheme={handleToggleTheme} 
      />
      {isSidebarVisible && <SideBar />}
      <div className='home-content'>
        <center className='cent'>Welcome</center>
        <div className="input-box">
          <span className="icon"></span>
          <input
            type="password"
            required
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
            placeholder="Enter Authorization Code"
          />
          <br />
          <br />
          <br />
          <button type="submit" className="btn" onClick={handleRequestAccessClick}>Request Access</button>
          <br />
          <br />
          <br />
        {/* <SideBar /> */}
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={2000} 
        />
      </div>
    </div>
  );
};

export default Home;
