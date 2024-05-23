import React, { useState, useEffect } from "react";
import Header from '../Header';
import '../../css/Store.css';
import ProductCardContainer from '../ProductCard'; // Import ProductCardContainer component
import productsData from '../product.json';
import Footer from "../Footer";
import CategoriesData from '../Categories.json';
import BottomBar from "../BottomBar";


const HeroSection = () => (
    <section className="hero">
        <h1>Your One-Stop Shop for Every Home making Needs!</h1>
        <div className="btn-group">
            <button className="store-banner-button btn-outline-light-cart">
                {/* <span className="material-symbols-outlined">shopping_cart</span> */}
                Shop All Products
            </button>
            <button className="store-banner-button btn-outline-dark-cart">
                {/* <span className="material-symbols-outlined">calendar_month</span> */}
                Book a Service
            </button>
        </div>
    </section>
);



export default function Store() {


    // Initialize carousel on component mount (using useEffect)
    const [productFilter, setProductFilter] = useState([]);

    const handleFilter = (category_name)=>{
        if(category_name === "All"){
            setProductFilter(productsData);
        }
        else{
            const filteredProducts = productsData.filter(products => products.category_name === category_name)
            setProductFilter(filteredProducts)
        }
    }

    return (
        <>
            
            <Header />
            <div className="blank-container"></div>
            <BottomBar/>
            <HeroSection/>
            {/* <PetShopSection /> */}
            {/* <PlumbingSection/> */}
            <div className="btn_animator_container">
            <button class="custom-btn btn-8" onClick={() =>handleFilter("All")}><span>All</span></button>
            {CategoriesData.map(products =>{
               return <button class="custom-btn btn-8" onClick={()=> handleFilter(products.category_name)}><span>{products.category_name}</span></button>
            })}
            </div>
            <ProductCardContainer products={productFilter.length > 0 ? productFilter : productsData} />
            
            
            <Footer/>
            

        </>
    );
}
