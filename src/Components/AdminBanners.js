import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideNav from './SideNav'

export default function AdminBanners() {

    const [message, setMessage] = useState('');

    const [showAlert, setShowAlert] = useState(false);


    const [Banners, setBanners] = useState({
        banner_category: '',
        // type_of: '',
        banner_image: null,
    });

    const [category, setCategory] = useState({
        product_category_name: '',
        product_category_image: null
    });

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
    }, []);


    const handleBannerSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('banner_category', Banners.banner_category);
            // formData.append('type_of', service.type_of);
            formData.append('banner_image', Banners.banner_image);

            await axios.post('https://free.shapier.in/api/v1/banner', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setMessage('Banner uploaded successfully!');
            setShowAlert(true);
        } catch (error) {
            console.error('Error uploading Banner:', error);
            setMessage('Error uploading Banner. Please try again.');
            setShowAlert(true);
        }
    };




    const handleChange = (e) => {
        const { name, value } = e.target;

        setBanners({
            ...Banners,
            [name]: value
        });

    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setBanners({
            ...Banners,
            banner_image: file
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
                    <form onSubmit={handleBannerSubmit} className="AD-admin-form">



                        <div className="AD-form-group">
                            <label>Banner Position</label>
                            <select
                                name="banner_category"
                                value={Banners.banner_category}
                                onChange={handleChange}
                                required
                            >

                                <option value="">Select category</option>
                                {categories.map((category) => (
                                    <option key={category.category_id} value={category.product_category_name}>
                                        {category.product_category_name}
                                    </option>
                                ))}

                            </select>
                        </div>


                        <div className="AD-form-group">
                            <label>Banner Image</label>
                            <input
                                type="file"
                                name="banner_image"
                                onChange={handleFileChange}
                                required
                            />
                        </div>
                        <button type="submit" className="AD-submit-button">Upload Banner</button>
                    </form>
                </div>
            </div>
        </>
    )
}
