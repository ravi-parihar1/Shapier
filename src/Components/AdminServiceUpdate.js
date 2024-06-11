import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/AdminServiceUpdate.css'
import SideNav from './SideNav'

export default function AdminServiceUpdate() {
    const [message, setMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [service, setServices] = useState({
        service_name: '',
        type_of: '',
        image_of_service: null,
    });
    const handleServiceSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('service_name', service.service_name);
            formData.append('type_of', service.type_of);
            formData.append('image_of_service', service.image_of_service);

            await axios.post('https://free.shapier.in/api/v1/service', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setMessage('Services uploaded successfully!');
            setShowAlert(true);
        } catch (error) {
            console.error('Error uploading Services:', error);
            setMessage('Error uploading Services. Please try again.');
            setShowAlert(true);
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;

        setServices({
            ...service,
            [name]: value
        });

    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        setServices({
            ...service,
            image_of_service: file
        });

    };
    return (
        <>
            <div className="admin-panel-container">
                <SideNav />
                <div className="form-container">
                    {showAlert && (
                        <div className="alert">
                            <span className="closebtn" onClick={() => setShowAlert(false)}>&times;</span>
                            {message}
                        </div>
                    )}
                    <form onSubmit={handleServiceSubmit} className="AD-admin-form">
                        <div className="AD-form-group">
                            <label>Service Name</label>
                            <input
                                type="text"
                                name="service_name"
                                value={service.service_name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="AD-form-group">
                            <label>Service Type</label>
                            <select
                                name="type_of"
                                value={service.type_of}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Service Type</option>
                                <option value="Consulting Service">Consulting Service</option>
                                <option value="Contracting Service">Contracting Services</option>
                                <option value="Shapier Service">Shapier Services</option>

                            </select>
                        </div>

                        <div className="AD-form-group">
                            <label>Service Image</label>
                            <input
                                type="file"
                                name="image_of_service"
                                onChange={handleFileChange}
                                required
                            />
                        </div>
                        <button type="submit" className="AD-submit-button">Upload Service</button>
                    </form>
                </div>

            </div>
        </>
    )
}
