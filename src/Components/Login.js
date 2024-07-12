import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleLogin } from '@react-oauth/google';
import '../Components/css/login.css';
import Navbar from '../Components/Navbar';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    navigate('/home');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      try {
        const response = await axios.post('https://sheet.best/api/sheets/c44ce489-8caa-48b5-b06c-11a214bc2574', {
          email,
          password
        });

        console.log('Response:', response.data);
        if (response.status === 200) {
          toast.success('Login successful!', {
            position: "bottom-right",
            autoClose: 800,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
              backgroundColor: 'black',
              color: 'white'
            },
            className: 'toast-custom-style'
          });

          setTimeout(() => {
            navigate('/home');
          }, 800); 
        } else {
          alert('Login failed, please check your credentials and try again.');
        }
      } catch (error) {
        console.error('Error during login:', error);
        alert('An error occurred during login. Please try again later.');
      }
    } else {
      alert('Please enter both email and password');
    }
  };

  const handleGoogleLoginSuccess = (response) => {
    console.log('Google login successful:', response);
    // Implement your login logic here with the response from Google
    toast.success('Google login successful!', {
      position: "bottom-right",
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        backgroundColor: 'black',
        color: 'white'
      },
      className: 'toast-custom-style'
    });

    setTimeout(() => {
      navigate('/Home');
    }, 800);
  };

  const handleGoogleLoginFailure = (error) => {
    console.error('Google login failed:', error);
    alert('Google login failed. Please try again later.');
  };

  return (
      <div className="wrapper">
        <div className="form-box login">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-boxx">
              <span className="icon"></span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
            </div>
            <div className="input-boxx">
              <span className="icon"></span>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
            </div>
            <div className="forgot">
              <label>
                <input type="checkbox" />
                Remember Login
              </label>
              <a href="#">Forgot Password</a>
            </div>
            <button type="submit" className="btn">Login</button>
            <div className="login-register">
              <p>
                Don't have an account? 
                <br />
                <a href="#" className="register-link" onClick={() => navigate('/Register')}>Create an Account</a>
              </p>
            </div>
          </form>
          <div className="google-login">
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onFailure={handleGoogleLoginFailure}
              cookiePolicy={'single_host_origin'}
            />
          </div>
        </div>
        <div>
          <ToastContainer position="bottom-right" autoClose={2000} />
        </div>
      </div>
  );
};

export default Login;
