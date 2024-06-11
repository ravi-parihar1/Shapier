import React, { useState, useEffect } from "react";
import Header from '../Header';
import '../../css/Store.css';
import ProductCardContainer from '../ProductCard';
import productsData from '../product.json';
import Footer from "../Footer";
import CategoriesPageProductDivision from '../CategoriesPageProductDivision';
import BottomBar from "../BottomBar";
import axios from "axios";
import { Link } from "react-router-dom";

const HeroSection = () => (
    <section className="hero">
        <h1>Your One-Stop Shop for Every Home making Needs!</h1>
        <div className="btn-group">
            <button className="store-banner-button btn-outline-light-cart" onClick={() => window.scrollTo(4,0)}>
                Shop All Products
            </button>
            <Link to='/explore'>
                <button className="store-banner-button btn-outline-dark-cart">
                    Book a Service
                </button>
            </Link>
        </div>
    </section>
);

export default function Store() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const fetchAllCategories = async () => {
        try {
            const { data } = await axios.get(`https://free.shapier.in/api/v1/product_categories`);
            const arrayOfCategories = data.data;
            setCategories(
                arrayOfCategories.map((category) => ({
                    category_id: category.id,
                    product_category_name: category.product_category_name,
                }))
            )
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchAllCategories();
    }, []);

    const handleFilter = (category_name) => {
        setSelectedCategory(category_name);
    }

    return (
        <>
            <Header />
            <div className="blank-container"></div>
            <BottomBar />
            <HeroSection />
            <div className="btn_animator_container">
                <button className="custom-btn btn-8" onClick={() => handleFilter("All")}><span>All</span></button>
                {categories.map(category => (
                    <button key={category.category_id} className="custom-btn btn-8" onClick={() => handleFilter(category.product_category_name)}><span>{category.product_category_name}</span></button>
                ))}
            </div>

            {selectedCategory === "All" ? (
                categories.map(category => (
                    <div key={category.category_id} className="container">
                        <CategoriesPageProductDivision category_names={category.product_category_name} />
                    </div>
                ))
            ) : (
                <div className="container">
                    <CategoriesPageProductDivision category_names={selectedCategory} />
                </div>
            )}

            <Footer />
        </>
    );
}
