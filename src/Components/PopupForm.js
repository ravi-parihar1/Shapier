import React, { useState } from 'react';
import '../css/PopupForm.css'; // Ensure this path is correct for your project structure
import { IoClose } from "react-icons/io5";
import logo from '../assets/HomePageAssets/Shapier-Logo-Final-Design Files-08062022/shapier_logo_final_svg.svg';

export default function PopupForm({ onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        lookingFor: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handlePhoneInput = (e) => {
        const { value } = e.target;
        const formattedValue = value.replace(/\D/g, ''); // Remove non-digit characters
        setFormData(prevState => ({ ...prevState, phone: formattedValue }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to server
        // console.log('Form submitted:', formData);
        onClose(); // Close the popup after submission
    };

    return (
        <div className="popup-detail-overlay">
            <div className="popup-detail-form">
                <div className="popup-heading">
                    <img src={logo} alt="Brand Logo" />
                    <h3 className='popup-heading-h3'>Shapier</h3>
                </div>
                
                <button className="popup-detail-close-button" onClick={onClose}><IoClose /></button>
                <hr />
                <form onSubmit={handleSubmit}>
                    <div className="popup-detail-form-group">
                        <input 
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            placeholder='Name' 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="popup-detail-form-group">
                        <input 
                            type="tel" 
                            name="phone" 
                            value={formData.phone} 
                            placeholder='Phone no.' 
                            onChange={handlePhoneInput} 
                            pattern="[0-9]{10}" 
                            title="Please enter a valid phone number" 
                            required 
                        />
                    </div>
                    <div className="popup-detail-form-group">
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            placeholder='Email' 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="popup-detail-form-group custom-select-container">
                        <select 
                            name="lookingFor" 
                            value={formData.lookingFor} 
                            onChange={handleChange} 
                            className="custom-select"
                            placeholder="What are you looking for"
                            required
                        >
                            <option value="" disabled>what you are looking for</option>
                            <option value="General Contractors">General Contractors</option>
                            <option value="Specialized Plumber">Specialized Plumber</option>
                            <option value="Certified Electricians">Certified Electricians</option>
                            <option value="Experienced Landscapers">Experienced Landscapers</option>
                            <option value="HVAC Technicians">HVAC Technicians</option>
                            <option value="Skilled Carpenters">Skilled Carpenters</option>
                        </select>
                    </div>
                    <div className="popup-detail-form-group">
                        <textarea 
                            name="message" 
                            value={formData.message} 
                            placeholder='Message' 
                            onChange={handleChange} 
                            required 
                        ></textarea>
                    </div>
                    <hr />
                    <button type="submit" className="popup-detail-submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
}
