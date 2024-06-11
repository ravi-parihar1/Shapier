import React from 'react';
import '../css/ComBox.css';
import { Link } from 'react-router-dom';

export default function ComBox() {
  return (
    <div className="TS-container">
      <h2 className="TS-heading">Get started in 3 simple steps</h2>
      <div className="TS-steps-container">
        <div className="TS-steps">
          <div className="TS-step">
            <div className="TS-step-content">
              <div className="TS-step-number">1</div>
              <h3 className="TS-step-title">Create Account</h3>
              <p className="TS-step-description">Register using your mobile number, enter your name and email.</p>
            </div>
            <div className="TS-connector">
              <div className="TS-line"></div>
              <div className="TS-dot"></div>
            </div>
          </div>
          <div className="TS-step">
            <div className="TS-step-content">
              <div className="TS-step-number">2</div>
              <h3 className="TS-step-title">Choose your Service</h3>
              <p className="TS-step-description">Submit other details, we will get in touch with you.</p>
            </div>
            <div className="TS-connector">
              <div className="TS-line"></div>
              <div className="TS-dot"></div>
            </div>
          </div>
          <div className="TS-step">
            <div className="TS-step-content">
              <div className="TS-step-number">3</div>
              <h3 className="TS-step-title">Start Buying</h3>
              <p className="TS-step-description">Post approval, start buying as a construction professional for your business from top brands.</p>
            </div>
          </div>
        </div>
      </div>
      <Link to={'/login'}>
        <button className="TS-get-started-button">Get Started</button>
      </Link>
    </div>
  );
}
