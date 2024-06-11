import React, { useEffect, useState } from 'react';
import BottomBar from '../BottomBar';
import Header from '../Header';
import '../../css/ServicesPage.css';
import Footer from '../Footer';
import FaqComponent from '../FaqComponent';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ServicePage() {
  const [availabilityChecked, setAvailabilityChecked] = useState(false);
  const [services, setServices] = useState([]);
  const [zipCode, setZipCode] = useState('');
  const [zipCodeValid, setZipCodeValid] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false); // New state for submission status
  const { link } = useParams();
  console.log("link", link);

  const handleCheckedAvaibility = async (zip) => {
    try {
      const { data } = await axios.get(`https://free.shapier.in/api/v1/zip-check/${zip}`);
      setZipCodeValid(data.availbility);
    } catch (error) {
      console.log(error)
    }
  }

  const fetchAllServices = async () => {
    try {
      const { data } = await axios.get('https://free.shapier.in/api/v1/service');
      const arrayOfServices = data.data;
      setServices(arrayOfServices.map((ser) => ({
        service_id: ser.id,
        service_name: ser.service_name,
        type_of: ser.type_of,
        image_of_service: ser.image_of_service
      })));
    } catch (error) {
      console.error("Error fetching services: ", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      first_name: formData.get('first_name'),
      last_name: formData.get('last_name'),
      mobile: formData.get('mobile'),
      email: formData.get('email'),
      zip_code: formData.get('zip_code'),
      service_id: formData.get('service_id'),
      address: formData.get('address')
    };

    try {
      const response = await axios.post('https://free.shapier.in/api/v1/request_service', data);
      console.log('Form submitted successfully:', response.data);
      setFormSubmitted(true); // Update submission status
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  useEffect(() => {
    fetchAllServices();
  }, []);

  return (
    <>
      <Header />
      <div className="blank-container"></div>
      <div className="ServicePage-container">
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
            {formSubmitted ? (
              <div>
                <h3 className="ServiceBookingPage-sidebar-title">Thank You!</h3>
                <p className="ServiceBookingPage-sidebar-description">
                  Your form has been submitted successfully. Our team will contact you soon.
                </p>
              </div>
            ) : (
              <div>
                <h3 className="ServiceBookingPage-sidebar-title">Professional Installation is Available in Your Area!</h3>
                <p className="ServiceBookingPage-sidebar-description">
                  Fill out this form to begin your FREE consultation. One of our expert consultants will reach out to help you make your selection and schedule your measure appointment.
                </p>
                <form className="BookingPage-mt-4" onSubmit={handleSubmit}>
                  <div className="BookingPage-Details-header">
                    <input
                      type="text"
                      name="first_name"
                      className="BookingPage-w-full BookingPage-p-2 BookingPage-border BookingPage-border-zinc-300 BookingPage-rounded BookingPage-mt-2"
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      name="last_name"
                      className="BookingPage-w-full BookingPage-p-2 BookingPage-border BookingPage-border-zinc-300 BookingPage-rounded BookingPage-mt-2"
                      placeholder="Last Name"
                    />
                  </div>
                  <input
                    type="number"
                    name="mobile"
                    className="BookingPage-w-full BookingPage-p-2 BookingPage-border BookingPage-border-zinc-300 BookingPage-rounded BookingPage-mt-2"
                    placeholder="Phone Number"
                  />
                  <input
                    type="email"
                    name="email"
                    className="BookingPage-w-full BookingPage-p-2 BookingPage-border BookingPage-border-zinc-300 BookingPage-rounded BookingPage-mt-2"
                    placeholder="Email"
                  />
                  <input
                    type="text"
                    name="zip_code"
                    id="zip"
                    className="BookingPage-w-full BookingPage-p-2 BookingPage-border BookingPage-border-zinc-300 BookingPage-rounded BookingPage-mt-2"
                    placeholder="Zip Code"
                    onChange={(e) => setZipCode(e.target.value)}
                    onBlur={() => handleCheckedAvaibility(zipCode)}
                  />
                  {!zipCodeValid && <p className="BookingPage-error">Service not available in this area</p>}
                  <select
                    name="service_id"
                    className="BookingPage-w-full BookingPage-p-2 BookingPage-border BookingPage-border-zinc-300 BookingPage-rounded BookingPage-mt-2"
                  >
                    {link ? (
                      <option value={link}>{link}</option>
                    ) : (
                      <>
                        <option value="" disabled selected>Select a service</option>
                        {services.map((ser) => (
                          <option key={ser.service_id} value={ser.service_id}>{ser.service_name}</option>
                        ))}
                      </>
                    )}
                  </select>
                  <input
                    type="text"
                    name="address"
                    className="BookingPage-w-full BookingPage-p-2 BookingPage-border BookingPage-border-zinc-300 BookingPage-rounded BookingPage-mt-2"
                    placeholder="Address"
                  />
                  <button type="submit" className="BookingPage-w-full BookingPage-mt-4 BookingPage-bg-orange-500 BookingPage-text-white BookingPage-p-2 BookingPage-rounded" disabled={!zipCodeValid}>
                    Submit
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
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
      <FaqComponent />
      <BottomBar />
      <Footer />
    </>
  );
}
