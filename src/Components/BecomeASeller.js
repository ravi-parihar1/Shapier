import React from 'react';
import '../css/BecomeASeller.css';
import Header from './Header';
import BottomBar from './BottomBar';
import Footer from './Footer';

export default function BecomeASeller() {
    return (
        <>
        <Header/>
        <BottomBar/>
            <div className="container">
                <div className="blank-container"></div>
                <div className="BecomeASeller-container">
                    <div className="BecomeASeller-info-section">
                        <h1 className="BecomeASeller-heading">Become a Seller on SHAPIER</h1>
                        <p className="BecomeASeller-paragraph">If you are a Manufacturer or a Distributor supplying building and construction materials, and like to sell on BuildersMart platform, please follow the instructions below:</p>
                        <ol className="BecomeASeller-list">
                            <li className="BecomeASeller-list-item">Fill the registration form.</li>
                            <li className="BecomeASeller-list-item">Our sourcing team will get in touch with you in 2-3 business days.</li>
                            <li className="BecomeASeller-list-item">BuildersMart will onboard your products at the pre-negotiated rates.</li>
                        </ol>
                    </div>
                    <div className="BecomeASeller-form-section">
                        <form className="BecomeASeller-form">
                            <div className="BecomeASeller-form-group">
                                <label htmlFor="mobile" className="BecomeASeller-label">Mobile*</label>
                                <input type="text" id="mobile" name="mobile" className="BecomeASeller-input" required />
                            </div>
                            <div className="BecomeASeller-form-group">
                                <label htmlFor="company-name" className="BecomeASeller-label">Company Name*</label>
                                <input type="text" id="company-name" name="company-name" className="BecomeASeller-input" required />
                            </div>
                            <div className="BecomeASeller-form-group">
                                <label htmlFor="contact-name" className="BecomeASeller-label">Contact Name*</label>
                                <input type="text" id="contact-name" name="contact-name" className="BecomeASeller-input" required />
                            </div>
                            <div className="BecomeASeller-form-group">
                                <label htmlFor="email" className="BecomeASeller-label">Email*</label>
                                <input type="email" id="email" name="email" className="BecomeASeller-input" required />
                            </div>
                            <div className="BecomeASeller-form-group">
                                <label htmlFor="city" className="BecomeASeller-label">City*</label>
                                <select id="city" name="city" className="BecomeASeller-select" required>
                                    <option value="">Select City</option>
                                    <option value="city1">City 1</option>
                                    <option value="city2">City 2</option>
                                </select>
                            </div>
                            <div className="BecomeASeller-form-group">
                                <label htmlFor="additional-info" className="BecomeASeller-label">Additional Information (if any)</label>
                                <textarea id="additional-info" name="additional-info" className="BecomeASeller-textarea"></textarea>
                            </div>
                            <button type="submit" className="BecomeASeller-button">Submit</button>
                        </form>
                    </div>
                </div>
                
            </div>
            <Footer/>

        </>
    );
}
