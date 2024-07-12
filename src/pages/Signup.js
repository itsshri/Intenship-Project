import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Components/css/home.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [accessCode, setAccessCode] = useState('');

  const handleLoginClick = () => {
    navigate('/Form');
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
    <div className='col'>
      <header>
        <h6 className="logo">BlueStone Overseas Consultancy</h6>
        <nav className="navigation">
          <a href="#">Dashboard</a>
          <a href="#">Courses</a>
          <a href="#">Visa Services</a>
          <a href="#">Enquiry</a>
          <button className="popup" onClick={handleLoginClick}>REGISTER</button>
        </nav>
      </header>
      <center className='cent'>Welcome Shri!</center>
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
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
      />
    </div>
  );
};

export default Dashboard;
