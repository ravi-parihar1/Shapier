import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideNav from './SideNav'

export default function AdminPanelBrands() {

    const [brand, setBrand] = useState({
        product_Brand_name: '',
        product_image: null
    });

    const [message, setMessage] = useState('');

    const [showAlert, setShowAlert] = useState(false);
    const [subcategory, setSubcategory] = useState([]);
    const [view, setView] = useState('products'); // State to manage current view
    const [categories, setCategories] = useState([]);

    const handleBrandSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('product_brand_name', brand.product_brand_name);
            formData.append('product_image', brand.product_image);

            await axios.post('https://free.shapier.in/api/v1/product_brand', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setMessage('Brand uploaded successfully!');
            setShowAlert(true);
        } catch (error) {
            console.error('Error uploading Brand:', error);
            setMessage('Error uploading Brand. Please try again.');
            setShowAlert(true);
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;

        setBrand({
            ...brand,
            [name]: value
        });

    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        setBrand({
            ...brand,
            product_image: file
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
                    <form onSubmit={handleBrandSubmit} className="AD-admin-form">
                        <div className="AD-form-group">
                            <label>Brand Name</label>
                            <input
                                type="text"
                                name="product_brand_name"
                                value={brand.product_brand_name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="AD-form-group">
                            <label>Brand Image</label>
                            <input
                                type="file"
                                name="product_image"
                                onChange={handleFileChange}
                                required
                            />
                        </div>
                        <button type="submit" className="AD-submit-button">Upload Brand</button>
                    </form>
                </div>
            </div>
        </>
    )
}
