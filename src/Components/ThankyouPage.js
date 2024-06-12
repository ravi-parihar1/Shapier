import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/ThankyouPage.css';

export default function ThankyouPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page after 10 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 10000);

    // Cleanup timer if component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="Thankyoupage-container">
      <div className="Thankyoupage-card">
        <h1 className="Thankyoupage-heading">Thank You!</h1>
        <p className="Thankyoupage-message">Your submission has been received.</p>
        <p className="Thankyoupage-redirect">You will be redirected to the home page shortly.</p>
      </div>
    </div>
  );
}
