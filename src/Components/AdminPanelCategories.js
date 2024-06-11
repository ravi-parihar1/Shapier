import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideNav from './SideNav';

export default function AdminPanelCategories() {

    const [category, setCategory] = useState({
        product_category_name: '',
        product_category_image: null
    });

    const [message, setMessage] = useState('');

    const [showAlert, setShowAlert] = useState(false);
    const [subcategory, setSubcategory] = useState([]);
    const [view, setView] = useState('products'); // State to manage current view
    const [categories, setCategories] = useState([]);

    const handleCategorySubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('product_category_name', category.product_category_name);
            formData.append('product_category_image', category.product_category_image);

            await axios.post('https://free.shapier.in/api/v1/product_categories', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setMessage('Subcategory uploaded successfully!');
            setShowAlert(true);
        } catch (error) {
            console.error('Error uploading category:', error);
            setMessage('Error uploading subcategory. Please try again.');
            setShowAlert(true);
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;

        setCategory({
            ...category,
            [name]: value
        });

    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        setCategory({
            ...category,
            product_category_image: file
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
                    <form onSubmit={handleCategorySubmit} className="AD-admin-form">
                        <div className="AD-form-group">
                            <label>Category Name</label>
                            <input
                                type="text"
                                name="product_category_name"
                                value={category.product_category_name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="AD-form-group">
                            <label>Category Image</label>
                            <input
                                type="file"
                                name="product_category_image"
                                onChange={handleFileChange}
                                required
                            />
                        </div>
                        <button type="submit" className="AD-submit-button">Upload Category</button>
                    </form>
                </div>
            </div>
        </>
    )
}
