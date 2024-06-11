import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/AdminPanel.css'
import SideNav from './SideNav'
import '../css/Admin.css';

export default function AdminPanel() {

    const [product, setProduct] = useState({
        product: '',
        product_image: null,
        product_description: '',
        product_price: '',
        stock: '',
        vandor_name: '',
        discount: '',
        subcategory_id: '',
        per_base: '',
        minimum_quantity: '' // Corrected spelling here
    });

    const [category, setCategory] = useState({
        product_category_name: '',
        product_category_image: null
    });

    const [subcategoryForm, setSubcategoryForm] = useState({
        subcategory_name: '',
        category_id: ''
    });

    const [showAlert, setShowAlert] = useState(false);
    const [message, setMessage] = useState('');
    const [subcategory, setSubcategory] = useState([]);
    const [view, setView] = useState('products'); // State to manage current view
    const [categories, setCategories] = useState([]);

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

    const handleChange = (e) => {
        const { name, value } = e.target;

        setProduct({
            ...product,
            [name]: value
        });

    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        setProduct({
            ...product,
            product_image: file
        });

    };

    const handleProductSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('product', product.product);
            formData.append('product_image', product.product_image);
            formData.append('product_description', product.product_description);
            formData.append('product_price', product.product_price);
            formData.append('stock', product.stock);
            formData.append('vandor_name', product.vandor_name);
            formData.append('discount', product.discount);
            formData.append('subcategory_id', product.subcategory_id);
            formData.append('per_base', product.per_base);
            formData.append('minimum_quantity', product.minimum_quantity);

            await axios.post('https://free.shapier.in/api/v1/product', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setMessage('Product Has uploaded successfully!');
            setShowAlert(true);

            setProduct({
                product: '',
                product_image: null,
                product_description: '',
                product_price: '',
                stock: '',
                vandor_name: '',
                discount: '',
                subcategory_id: '',
                per_base: '',
                minimum_quantity: '' // Corrected spelling here
            })

        } catch (error) {
            console.error('Error uploading product:', error);
            setMessage('Failed to upload product!');
            setShowAlert(true);
        }
    };

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

            setMessage('Category has been uploaded successfully!');
        } catch (error) {
            console.error('Error uploading category:', error);
            setMessage('Failed to upload category!');
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
                    <form onSubmit={handleProductSubmit} className="AD-admin-form">
                        <div className="AD-form-group">
                            <label>Product Name</label>
                            <input
                                type="text"
                                name="product"
                                value={product.product}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="AD-form-group">
                            <label>Product Image</label>
                            <input
                                type="file"
                                name="product_image"
                                onChange={handleFileChange}
                                required
                            />
                        </div>
                        <div className="AD-form-group">
                            <label>Product Description</label>
                            <textarea
                                name="product_description"
                                value={product.product_description}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="AD-form-group">
                            <label>Product Price</label>
                            <input
                                type="number"
                                name="product_price"
                                value={product.product_price}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="AD-form-group">
                            <label>Brand Name</label>
                            <input
                                type="text"
                                name="vandor_name" // Consider changing "vandor_name" to "vendor_name" for consistency
                                value={product.brand_id}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="AD-form-group">
                            <label>Stock</label>
                            <input
                                type="number"
                                name="stock"
                                value={product.stock}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="AD-form-group">
                            <label>Vendor Name</label>
                            <input
                                type="text"
                                name="vandor_name" // Consider changing "vandor_name" to "vendor_name" for consistency
                                value={product.vandor_name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="AD-form-group">
                            <label>Discount</label>
                            <input
                                type="number"
                                name="discount"
                                value={product.discount}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="AD-form-group">
                            <label>Subcategory</label>
                            <select
                                name="subcategory_id"
                                value={product.subcategory_id}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Subcategory</option>
                                {subcategory.map((sub) => (
                                    <option key={sub.subcategory_id} value={sub.subcategory_id}>
                                        {sub.subcategory_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="AD-form-group">
                            <label>Product Base</label>
                            <select
                                name="per_base"
                                value={product.per_base}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Product Base</option>
                                <option value="Per Kg">Per Kg</option>
                                <option value="Per Bag">Per Bag</option>
                                <option value="Per Piece">Per Piece</option>
                                <option value="Per NOS">Per NOS</option>
                                <option value="Per Sft">Per Sft</option>
                                <option value="Per Ton">Per Ton</option>
                                <option value="Per Coil">Per Coil</option>
                                <option value="Per Meter">Per Meter</option>
                                <option value="Per Bundle">Per Bundle</option>
                            </select>
                        </div>
                        <div className="AD-form-group">
                            <label>Minimum Quantity</label>
                            <input
                                type="number"
                                name="minimum_quantity"
                                value={product.minimum_quantity}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="AD-submit-button">Upload Product</button>
                    </form>
                </div>
            </div>


        </>
    )
}
