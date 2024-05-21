import React, { useState } from 'react';
import BottomBar from '../BottomBar';
import Header from '../Header';
import '../../css/ServicesPage.css';

export default function ServicePage() {
  const [step, setStep] = useState(1);
  const [zipCode, setZipCode] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [userInfo, setUserInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleZipCodeChange = (e) => {
    setZipCode(e.target.value);
  };

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = () => {
    setStep(step + 1); // Assuming step 4 is the thank you message
  };

  return (
    <>
      <Header />
      <div className="ServicePageBackgroundContainer">
        <div className="ServicePageFormContainer">
          {step === 1 && (
            <div className="form-step">
              <h2>Enter Your Zip Code</h2>
              <input type="text" value={zipCode} onChange={handleZipCodeChange} />
              <button onClick={handleNext}>Next</button>
            </div>
          )}
          {step === 2 && (
            <div className="form-step">
              <h2>Service Selection</h2>
              <select value={selectedService} onChange={handleServiceChange}>
                <option value="">Select a service</option>
                <option value="service1">Service 1</option>
                <option value="service2">Service 2</option>
              </select>
              <button onClick={handleNext}>Next</button>
            </div>
          )}
          {step === 3 && (
            <div className="form-step">
              <h2>Enter Your Information</h2>
              <input type="text" name="name" placeholder="Name" value={userInfo.name} onChange={handleUserInfoChange} />
              <input type="text" name="phone" placeholder="Phone" value={userInfo.phone} onChange={handleUserInfoChange} />
              <input type="email" name="email" placeholder="Email" value={userInfo.email} onChange={handleUserInfoChange} />
              <textarea name="address" placeholder="Address" value={userInfo.address} onChange={handleUserInfoChange}></textarea>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          )}
          {step === 4 && (
            <div className="form-step">
              <h2>Thank You!</h2>
              <p>Your submission has been received.</p>
            </div>
          )}
        </div>
      </div>
      <BottomBar />
    </>
  );
}
