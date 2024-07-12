import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../pages/css/Form.css'; // Import your existing CSS for the form styling
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    birthDate: '',
    gender: 'male',
    address: '',
    country: '',
    city: '',
    region: '',
    postalCode: ''
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    // Replace with your actual API endpoint
    axios.post('https://sheet.best/api/sheets/c44ce489-8caa-48b5-b06c-11a214bc2574', formData)
      .then(response => {
        console.log('Response:', response);
        // Optionally reset form fields after successful submission
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          address: '',
          birthDate: '',
          country: '',
          message: ''
        });
        toast.success('Registration successful!', {
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
          navigate('/homee'); // Redirect to Homee.js after the toast notification
        }, 1000); // Adjust the timeout to match the toast duration
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        toast.error('An error occurred while submitting the form.', {
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
      });
  };

  return (
    <section className="container">
      <center><h1>Registration Form</h1></center>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-box">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter full name"
            required
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <br />

        <div className="input-box">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="column">
          <div className="input-box">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Enter phone number"
              required
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <label>Birth Date</label>
            <input
              type="date"
              name="birthDate"
              placeholder="Enter birth date"
              required
              value={formData.birthDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="gender-box">
          <h3>Gender</h3>
          <div className="gender-option">
            <div className="gender">
              <input
                type="radio"
                id="check-male"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
              />
              <label htmlFor="check-male">Male</label>
            </div>
            <div className="gender">
              <input
                type="radio"
                id="check-female"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              />
              <label htmlFor="check-female">Female</label>
            </div>
            <div className="gender">
              <input
                type="radio"
                id="check-other"
                name="gender"
                value="prefer not to say"
                checked={formData.gender === 'prefer not to say'}
                onChange={handleChange}
              />
              <label htmlFor="check-other">Prefer not to say</label>
            </div>
          </div>
        </div>
        <br />

        <div className="input-box address">
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="Enter street address"
            required
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <ToastContainer /> {/* ToastContainer for displaying Toastify notifications */}
    </section>
  );
};

export default Form;
