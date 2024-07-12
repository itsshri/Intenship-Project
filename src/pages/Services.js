import React from 'react';
import '../pages/css/visa.css';
import Navbar from '../Components/Navbar';
import Footer from '../pages/Footer';

const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="glassBox-wrapper">
        <div className="glassBox-container">
          <div className="glassBox">
            <div className="glassBox__imgBox">
              <center>
              <img src="https://cdn-icons-png.flaticon.com/256/3135/3135773.png" alt=""/>
              </center>
              <h3 className="glassBox__title">Student Counselling</h3>
            </div>
            {/* <h6>Bluestone Overseas Consultants offers expert guidance in choosing the right programs and institutions for overseas education.</h6> */}
            <div className="glassBox__content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt veniam adipisci fugit qui quaerat!</div>
          </div>

          <div className="glassBox">
            <div className="glassBox__imgBox">
              <center>
              <img src="https://cdn-icons-png.flaticon.com/512/750/750558.png" alt=""/>
              </center>
              <h3 className="glassBox__title">Visa Services</h3>
            </div>
            <div className="glassBox__content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt veniam adipisci fugit qui quaerat!</div>
          </div>

          <div className="glassBox">
            <div className="glassBox__imgBox">
              <center>
              <img src="https://cdn-icons-png.flaticon.com/256/4586/4586958.png" alt=""/>
              </center>
              <h3 className="glassBox__title">Travel Assistance </h3>
            </div>
            <div className="glassBox__content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt veniam adipisci fugit qui quaerat!</div>
          </div>

          <div className="glassBox">
            <div className="glassBox__imgBox">
              <center>
              <img src="https://cdn-icons-png.flaticon.com/256/12183/12183051.png" alt=""/>
              </center>
              <h3 className="glassBox__title">Part-Time Job Assistance</h3>
            </div>
            <div className="glassBox__content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt veniam adipisci fugit qui quaerat!</div>
          </div>
        </div>

        <div className="glassBox-container">
          <div className="glassBox">
            <div className="glassBox__imgBox">
              <center>
              <img src="https://cdn-icons-png.flaticon.com/256/2916/2916315.png" alt=""/>
              </center>
              <h3 className="glassBox__title">IELTS/TOEFL Preparation</h3>

            </div>
            <div className="glassBox__content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt veniam adipisci fugit qui quaerat!</div>
          </div>

          <div className="glassBox">
            <div className="glassBox__imgBox">
              <center>
              <img src="https://cdn-icons-png.flaticon.com/256/1077/1077976.png" alt=""/>
              </center>
              <h3 className="glassBox__title">Financial Assistance</h3>
            </div>
            <div className="glassBox__content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt veniam adipisci fugit qui quaerat!</div>
          </div>

          <div className="glassBox">
            <div className="glassBox__imgBox">
              <center>
              <img src="https://cdn-icons-png.freepik.com/512/2231/2231711.png" alt=""/>
              </center>
              <h3 className="glassBox__title">University Selection</h3>
            </div>
            <div className="glassBox__content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt veniam adipisci fugit qui quaerat!</div>
          </div>

          <div className="glassBox">
            <div className="glassBox__imgBox">
              <center>
              <img src="https://cdn-icons-png.flaticon.com/256/3073/3073436.png" alt=""/>
              </center>
              <h3 className="glassBox__title">Admission Processing</h3>
            </div>
            <div className="glassBox__content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt veniam adipisci fugit qui quaerat!</div>
          </div>
        </div>
      </div>
<Footer />
    </div>
    
  );
}

export default Services;
