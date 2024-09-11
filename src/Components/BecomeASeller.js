import React, { useState } from 'react';
import '../css/BecomeASeller.css';
import Header from './Header';
import BottomBar from './BottomBar';
import Footer from './Footer';
import axios from 'axios';

export default function BecomeASeller() {
    const [becomeSeller, setBecomeSeller] = useState({
        mobile: '',
        company_name: '',
        contact_name: '',
        email: '',
        city: '',
        additional_info: ''
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setBecomeSeller({
            ...becomeSeller,
            [name]: value
        });
    };

    const handleSellerSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('mobile', becomeSeller.mobile);
            formData.append('company_name', becomeSeller.company_name);
            formData.append('contact_name', becomeSeller.contact_name);
            formData.append('email', becomeSeller.email);
            formData.append('city', becomeSeller.city);
            formData.append('additional_info', becomeSeller.additional_info);

            const response = await axios.post(`https://free.shapier.in/api/v1/seller`, formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response)
            setBecomeSeller({
                mobile: '',
                company_name: '',
                contact_name: '',
                email: '',
                city: '',
                additional_info: ''
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Header />
            <BottomBar />
            <div className="container">
                <div className="blank-container"></div>
                <div className="BecomeASeller-container">
                    <div className="BecomeASeller-info-section">
                        <h1 className="BecomeASeller-heading">Become a Seller on SHAPIER</h1>
                        <p className="BecomeASeller-paragraph">If you are a Manufacturer or a Distributor supplying building and construction materials, and like to sell on Shapier platform, please follow the instructions below:</p>
                        <ol className="BecomeASeller-list">
                            <li className="BecomeASeller-list-item">Fill the registration form.</li>
                            <li className="BecomeASeller-list-item">Our sourcing team will get in touch with you in 2-3 business days.</li>
                            <li className="BecomeASeller-list-item">Shapier will onboard your products at the pre-negotiated rates.</li>
                        </ol>
                    </div>
                    <div className="BecomeASeller-form-section">
                        <form onSubmit={handleSellerSubmit} className="BecomeASeller-form">
                            <div className="BecomeASeller-form-group">
                                <label htmlFor="mobile" className="BecomeASeller-label">Mobile*</label>
                                <input
                                    type="text"
                                    id="mobile"
                                    name="mobile"
                                    value={becomeSeller.mobile}
                                    onChange={handleOnChange}
                                    className="BecomeASeller-input"
                                    required
                                />
                            </div>
                            <div className="BecomeASeller-form-group">
                                <label htmlFor="company_name" className="BecomeASeller-label">Company Name*</label>
                                <input
                                    type="text"
                                    id="company_name"
                                    name="company_name"
                                    value={becomeSeller.company_name}
                                    onChange={handleOnChange}
                                    className="BecomeASeller-input"
                                    required
                                />
                            </div>
                            <div className="BecomeASeller-form-group">
                                <label htmlFor="contact_name" className="BecomeASeller-label">Contact Name*</label>
                                <input
                                    type="text"
                                    id="contact_name"
                                    name="contact_name"
                                    value={becomeSeller.contact_name}
                                    onChange={handleOnChange}
                                    className="BecomeASeller-input"
                                    required
                                />
                            </div>
                            <div className="BecomeASeller-form-group">
                                <label htmlFor="email" className="BecomeASeller-label">Email*</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={becomeSeller.email}
                                    onChange={handleOnChange}
                                    className="BecomeASeller-input"
                                    required
                                />
                            </div>
                            <div className="BecomeASeller-form-group">
                                <label htmlFor="city" className="BecomeASeller-label">City*</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={becomeSeller.city}
                                    onChange={handleOnChange}
                                    className="BecomeASeller-input"
                                    required
                                />
                            </div>
                            <div className="BecomeASeller-form-group">
                                <label htmlFor="additional_info" className="BecomeASeller-label">Additional Information (if any)</label>
                                <textarea
                                    id="additional_info"
                                    name="additional_info"
                                    className="BecomeASeller-textarea"
                                    value={becomeSeller.additional_info}
                                    onChange={handleOnChange}
                                ></textarea>
                            </div>
                            <button type="submit" className="BecomeASeller-button">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
