import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/PopupForm.css'; // Ensure this path is correct for your project structure
import { IoClose } from "react-icons/io5";
import logo from '../assets/HomePageAssets/Shapier-Logo-Final-Design Files-08062022/shapier_logo_final_svg.svg';

export default function PopupForm({ onClose }) {

    const [services, setServices] = useState([]);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        lookingFor: '',
        message: ''
    });


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

    useEffect(() => {
        fetchAllServices();
    }, []);

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
                            {services.map((ser) => (
                                <option key={ser.service_id} value={ser.service_id}>{ser.service_name}</option>
                            ))}
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
