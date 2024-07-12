import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Components/css/contact.css';

const Contact = () => {
  const [theme, setTheme] = useState('light');
  const [selectedSlot, setSelectedSlot] = useState('');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a07bb1ab-30ad-4422-9c6c-3a43bb936eca");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await res.json();

      if (result.success) {
        toast.success('Slot Confirmed!', {
          position: "bottom-right",
          autoClose: 800,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast.error('Error confirming slot. Please try again.', {
          position: "bottom-right",
          autoClose: 800,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error('Network error. Please try again.', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const slots = [
    '09:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '01:00 PM - 02:00 PM',
    '02:00 PM - 03:00 PM',
    '03:00 PM - 04:00 PM',
    '04:00 PM - 05:00 PM',
    '05:00 PM - 06:30 PM',
  ];

  const handleSlotChange = (event) => {
    setSelectedSlot(event.target.value);
  };

  return (
    <div className='contact-wrapper'>
      <div className="contact-content">
        <section className="contact-form-section">
          <form onSubmit={onSubmit}>
            <h2>Consultation Form</h2>
            <div className='contact-input-box'>
              <label>Full Name</label>
              <input type="text" className='contact-field' name='name' placeholder='Enter your name' required />
            </div>
            <div className='contact-input-box'>
              <label>Email Address</label>
              <input type="email" className='contact-field' placeholder='Enter your email' name='email' required />
            </div>
            <div className='contact-input-box'>
              <label>Subject</label>
              <input type="text" className='contact-field' placeholder='' name='subject' required />
            </div>
            <div className='contact-input-box'>
              <label>Your Message</label>
              <input type="text" name="message" className='contact-field contact-message' placeholder='Enter your message' required />
            </div>
            <div className='contact-input-box'>
              <label>Choose a slot</label>
              <select value={selectedSlot} onChange={handleSlotChange} className='contact-field' name="slot" required>
                <option value="" disabled>Select a slot</option>
                {slots.map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
            <br></br>
            <button type="submit" className='contact-submit-button'>Book Slot</button>
          </form>
        </section>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
