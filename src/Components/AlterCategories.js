import React, { useEffect, useState } from 'react'
import { Await, Link, useNavigate } from "react-router-dom";
import '../css/AlterCategories.css'
import axios from 'axios';

export default function AlterCategories() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const [isOpenCategory, setIsOpenCategory] = useState(false);
    const [categoryName, setCategoryName] = useState("");


    const handleCategoryClick = (category) => {
        setCategoryName(category);
        setIsOpenCategory(false);
        navigate(`/categories/${category}`)
        // Close the dropdown after selecting a category
    };

    const fetchAllCategories = async () => {
        try {
            const { data } = await axios.get(`https://free.shapier.in/api/v1/product_categories`);
            const arrayOfCategories = data.data;
            setCategories(
                arrayOfCategories.map((category) => ({
                    category_id: category.id,
                    product_category_name: category.product_category_name,
                    product_category_image: category.product_category_image
                }))
            )
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchAllCategories();
    }, []); // Add empty dependency array to run effect only once

    return (
        <>
            <h2 className='Shope-cat'>Shop by Categories</h2>
            <div className="containerAlter">
                {categories.map((category) => (
                    <div key={category.category_id} className="cardAlter">
                        <div className="circleAlter"></div>
                        <div className="contentAlter">
                            <img className="imgAlter" src={`https://free.shapier.in/images/${category.product_category_image}`} alt={category.product_category_name} />
                            <p className="pAlter">{category.product_category_name}</p>
                            <button type="button" className="buttonAlter" onClick={() => handleCategoryClick(category.product_category_name)}>See All</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
