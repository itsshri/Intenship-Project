import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/css/register.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    setPassword: '',
  });

  const handleLoginClick = () => {
    navigate('/Register');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const { name, email, phone, setPassword } = formData;
    if (name && email && phone && setPassword) {
      navigate('/Home');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
      <div className="wrapper">
        <div className="form-box register">
          <h2>SIGN UP</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <label>Name</label>
            </div>
            <div className="input-box">
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <label>Email</label>
            </div>
            <div className="input-box">
              <input
                type="text"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
              />
              <label>Phone Number</label>
            </div>
            <div className="input-box">
              <input
                type="password"
                name="setPassword"
                required
                value={formData.setPassword}
                onChange={handleChange}
              />
              <label>Set Password</label>
            </div>
            <button type="submit" className="btn">
              Sign Up
            </button>
            <div className="login-register">
              <p>
                Already have an account? <a href="#" className="register-link" onClick={() => navigate('/Login')}>Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
  );
};

export default Register;
