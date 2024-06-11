import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideNav from './SideNav';

export default function AdminPanelSubCategories() {
    const [subcategoryForm, setSubcategoryForm] = useState({
        subcategory_name: '',
        category_id: ''
    });

    const [message, setMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false); // State to manage alert visibility
    const [subcategory, setSubcategory] = useState([]);
    const [view, setView] = useState('products'); // State to manage current view
    const [categories, setCategories] = useState([]);



    const fetchAllCategories = async () => {
        try {
            const { data } = await axios.get('https://free.shapier.in/api/v1/product_categories');
            const arrayOfCategories = data.data;
            setCategories(arrayOfCategories.map((category) => ({
                category_id: category.id,
                product_category_name: category.product_category_name,
                product_category_image: category.product_category_image
            })));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAllCategories();
        fetchSubcategories();
    }, []);


    const fetchSubcategories = async () => {
        try {
            const { data } = await axios.get('https://free.shapier.in/api/v1/subcategories');
            const arrayOfSubcategory = data.data;
            setSubcategory(arrayOfSubcategory.map((subcat) => ({
                subcategory_id: subcat.subcategory_id,
                subcategory_name: subcat.subcategory_name
            })));
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSubcategoryForm({
            ...subcategoryForm,
            [name]: value
        });
    };

    const handleSubcategorySubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('subcategory_name', subcategoryForm.subcategory_name);
            formData.append('category_id', subcategoryForm.category_id);

            const sub = await axios.post('https://free.shapier.in/api/v1/subcategories', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // Show success alert
            setMessage('Subcategory uploaded successfully!');
            setShowAlert(true);

            // Clear the form
            setSubcategoryForm({
                subcategory_name: '',
                category_id: ''
            });

            // Fetch updated subcategories
            fetchSubcategories();
        } catch (error) {
            console.error('Error uploading subcategory:', error);
            setMessage('Error uploading subcategory. Please try again.');
            setShowAlert(true);
        }
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
                    <form onSubmit={handleSubcategorySubmit} className="AD-admin-form">
                        <div className="AD-form-group">
                            <label>Subcategory Name</label>
                            <input
                                type="text"
                                name="subcategory_name"
                                value={subcategoryForm.subcategory_name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="AD-form-group">

                            <label>Category ID</label>
                            <select
                                name="category_id"
                                value={subcategory.category_id}
                                onChange={handleChange}
                            >
                                <option value="">Select Subcategory</option>
                                {categories.map((category) => (
                                    <option key={category.category_id} value={category.category_id}>
                                        {category.product_category_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="AD-submit-button">Upload Subcategory</button>
                    </form>
                </div>
            </div>
        </>
    );
}
