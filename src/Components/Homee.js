import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import '../Components/css/homee.css';

const Homee = () => {
  const [theme, setTheme] = useState('light');
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleConsultationClick = () => {
    navigate('/contact'); // assuming '/contact' is the route for Contact.js
  };

  const handleScanEyeClick = () => {
    navigate('/login');
  };

  return (
    <div className='coll'>
      <Navbar onScanEyeClick={handleScanEyeClick} onToggleTheme={toggleTheme} theme={theme} />
      <br /><br /><br /><br />
      <section>
        <div className="card-container">
          <div className="card">
            <a href="/contact">
              <div className="card--display">
                <i className="material-icons">Study Abroad</i>
                <h2>
                  Embark on an educational adventure that will transform your life and career. At Bluestone Consultancy, we specialize in guiding students through the intricate process of studying abroad, offering expert advice and personalized support every step of the way. Don't miss out on the opportunity to broaden your horizons, immerse yourself in a new culture, and gain a world-class education. Book your slot now and take the first step toward a brighter future!
                </h2>
              </div>
              <div className="card--hover">
                <h1>Unlock Your Future! Reserve Your Study Abroad Journey with Bluestone Consultancy Today!</h1>
                <p>Slots Available Now!</p>
                <button className="consultation-button" onClick={handleConsultationClick}>Book A Consultation!</button>
              </div>
              <div className="card--border"></div>
            </a>
          </div>
        </div>
      </section>

      <div className="card-container">
        <div className="card"><a href="worldweb">
            <div className="card--display"><i className="material-icons">public</i>
              <h2>World Wide Web</h2>
            </div>
            <div className="card--hover">
              <h2>World Wide Web</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at est orci. Nam molestie pellentesque mi nec lacinia. Cras volutpat arcu sit amet elit sodales, nec volutpat velit bibendum.</p>
              <p className="link">Click to see project</p>
            </div></a>
          <div className="card--border"></div>
        </div>
      </div>
      <div className="card-container">
        <div className="card"><a href="trainthings">
            <div className="card--display"><i className="material-icons">train</i>
              <h2>Why I Hate Trains</h2>
            </div>
            <div className="card--hover">
              <h2>Why I Hate Trains</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at est orci. Nam molestie pellentesque mi nec lacinia. Cras volutpat arcu sit amet elit sodales, nec volutpat velit bibendum.</p>
              <p className="link">Click to see project</p>
            </div></a>
          <div className="card--border"></div>
        </div>
      </div>
      <div className="card-container">
        <div className="card card--dark"><a href="androidupdate">
            <div className="card--display"><i className="material-icons">android</i>
              <h2>Another Android Update</h2>
            </div>
            <div className="card--hover">
              <h2>Another Android Update</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at est orci. Nam molestie pellentesque mi nec lacinia. Cras volutpat arcu sit amet elit sodales, nec volutpat velit bibendum.</p>
              <p className="link">Click to see project</p>
            </div></a>
          <div className="card--border"></div>
        </div>
      </div>
      <div className="card-container">
        <div className="card card--dark"><a href="phonesoff">
            <div className="card--display"><i className="material-icons">ring_volume</i>
              <h2>Why Phones Are So Loud</h2>
            </div>
            <div className="card--hover">
              <h2>Why Phones Are So Loud</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at est orci. Nam molestie pellentesque mi nec lacinia. Cras volutpat arcu sit amet elit sodales, nec volutpat velit bibendum.</p>
              <p className="link">Click to see project</p>
            </div></a>
          <div className="card--border"></div>
        </div>
      </div>
    </div>
  );
};

export default Homee;
