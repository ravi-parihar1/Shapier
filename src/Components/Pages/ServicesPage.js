import React, { useState } from 'react';
import BottomBar from '../BottomBar';
import Header from '../Header';
import '../../css/ServicesPage.css';
import Footer from '../Footer';
import FaqComponent from '../FaqComponent';

export default function ServicePage() {
  const [availabilityChecked, setAvailabilityChecked] = useState(false);

  const handleCheckAvailability = (e) => {
    e.preventDefault();
    setAvailabilityChecked(true);
  };

  return (
    <>
      <Header />
      <div className="blank-container"></div>
      <div className="ServicePage-container">
        {/* Your existing content */}
        <div className="ServiceBookingPage-container">
          <div className="ServiceBookingPage-content">
            <div className="ServiceBookingPage-header">
              <h1 className="ServiceBookingPage-title">Professional Blinds</h1>
              <h2 className="ServiceBookingPage-subtitle">Measure and Install</h2>
              <p className="ServiceBookingPage-description">Relax while we do it for you</p>
            </div>
            <div className="ServiceBookingPage-features">
              <div className="ServiceBookingPage-feature-card">
                <img src="https://images.unsplash.com/photo-1588796460718-f457ad1e1a1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="High-Quality Products" className="ServiceBookingPage-feature-image" />
                <p>High-Quality Products</p>
              </div>
              <div className="ServiceBookingPage-feature-card">
                <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Top-rated Services" className="ServiceBookingPage-feature-image" />
                <p>Top-rated Services</p>
              </div>
              <div className="ServiceBookingPage-feature-card">
                <img src="https://images.unsplash.com/photo-1542621323-be453184db76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Licensed Installation Professionals" className="ServiceBookingPage-feature-image" />
                <p>Licensed Installation Professionals</p>
              </div>
            </div>
          </div>
          <div className="ServiceBookingPage-sidebar">
            {availabilityChecked ? (
              <div>
                <h3 className="ServiceBookingPage-sidebar-title">Professional Installation is Available in Your Area!</h3>
                <p className="ServiceBookingPage-sidebar-description">
                  Fill out this form to begin your FREE consultation. One of our expert consultants will reach out to help you make your selection and schedule your measure appointment.
                </p>
                <form className="BookingPage-mt-4">
                  <div className="BookingPage-Details-header ">
                    <input
                      type="text"
                      className="BookingPage-w-full BookingPage-p-2 BookingPage-border BookingPage-border-zinc-300 BookingPage-rounded BookingPage-mt-2"
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      className="BookingPage-w-full BookingPage-p-2 BookingPage-border BookingPage-border-zinc-300 BookingPage-rounded BookingPage-mt-2"
                      placeholder="Last Name"
                    />
                  </div>
                  <input
                    type="text"
                    className="BookingPage-w-full BookingPage-p-2 BookingPage-border BookingPage-border-zinc-300 BookingPage-rounded BookingPage-mt-2"
                    placeholder="Phone Number"
                  />
                  <input
                    type="email"
                    className="BookingPage-w-full BookingPage-p-2 BookingPage-border BookingPage-border-zinc-300 BookingPage-rounded BookingPage-mt-2"
                    placeholder="Email"
                  />
                  <select
                    className="BookingPage-w-full BookingPage-p-2 BookingPage-border BookingPage-border-zinc-300 BookingPage-rounded BookingPage-mt-2"
                  >
                    <option value="" disabled selected>Select a service</option>
                    <option value="installation">Installation</option>
                    <option value="measurement">Measurement</option>
                    <option value="consultation">Consultation</option>
                  </select>
                  <input
                    type="text"
                    className="BookingPage-w-full BookingPage-p-2 BookingPage-border BookingPage-border-zinc-300 BookingPage-rounded BookingPage-mt-2"
                    placeholder="Address"
                  />
                  <button type="submit" className="BookingPage-w-full BookingPage-mt-4 BookingPage-bg-orange-500 BookingPage-text-white BookingPage-p-2 BookingPage-rounded">
                    Submit
                  </button>
                </form>
              </div>
            ) : (
              <div>
                <h3 className="ServiceBookingPage-sidebar-title">Let's Get Started</h3>
                <p className="ServiceBookingPage-sidebar-description">
                  Our installation prices start at 135 for up to 10 blinds.
                </p>
                <ul className="ServiceBookingPage-sidebar-list">
                  <li className="ServiceBookingPage-list-item">Free in-home consultation</li>
                  <li className="ServiceBookingPage-list-item">Wide range of blinds</li>
                  <li className="ServiceBookingPage-list-item">Professional measurement</li>
                  <li className="ServiceBookingPage-list-item">Expert installation</li>
                </ul>
                <form className="BookingPage-mt-4" onSubmit={handleCheckAvailability}>
                  <label htmlFor="zip" className="BookingPage-block BookingPage-text-zinc-700 BookingPage-dark:text-zinc-300">
                    Zip Code*
                  </label>
                  <input
                    id="zip"
                    type="text"
                    className="BookingPage-w-full BookingPage-p-2 BookingPage-border BookingPage-border-zinc-300 BookingPage-rounded BookingPage-mt-2"
                    placeholder="Please enter a zip code"
                  />
                  <button type="submit" className="BookingPage-w-full BookingPage-mt-4 BookingPage-bg-orange-500 BookingPage-text-white BookingPage-p-2 BookingPage-rounded">
                    Check Availability
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>



      {/* why choose use text  */}
      <div className="why-choose">
        <h4 className="why-choose-heading">How It Works</h4>
        <div className="why-choose-content">
          <div className="choose-reason">
          <div className="circle-number">1</div>
            <h6 className='reason-details'>Fill out the short form, we'll contact you to schedule your measure appointment</h6>
          </div>

          <div className="choose-reason">
          <div className="circle-number">2</div>
            <h6 className='reason-details'>Our team will Schedule a meeting for you with our Specialist</h6>
          </div>

          <div className="choose-reason">
          <div className="circle-number">3</div>
            <h6 className='reason-details'>Your treatments are made and shipped to your doorstep</h6>
          </div>

          <div className="choose-reason">
          <div className="circle-number">4</div>
          <h6 className='reason-details'>Your treatments are made and shipped to your doorstep</h6>
          </div>

          

          
        </div>
      </div>
      
      {/* FAQ start from here  */}



      <FaqComponent/>
      <BottomBar />
      <Footer />
    </>
  );
}
