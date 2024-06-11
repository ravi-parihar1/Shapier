import React, { useState,useEffect } from 'react';
import '../css/BrandPage.css';
import Header from './Header';
import BottomBar from './BottomBar';
import Footer from './Footer';
import axios from 'axios';

export default function BrandPage() {
    const [brand, setBrand] = useState([]);

    const fetchAllBrands = async () => {
        const { data } = await axios.get(`https://free.shapier.in/api/v1/product_brand`);
        const arrayOfBrands = data.data;
        setBrand(arrayOfBrands.map((brnd) => ({
            id: brnd.id,
            name: brnd.product_brand_name,
            imageUrl: brnd.product_image
        })))
    }
    useEffect(() => {
        fetchAllBrands();
    })
    return (
        <>
            <Header />
            <BottomBar />
            <div className="blank-container"></div>
            <div className="ViewAllBrand-container my-5">
                <h2 className="ViewAllBrand-heading mb-4">All Brands ({brand.length})</h2>
                <div className="ViewAllBrand-row row">
                    {brand.map((brd) => (
                        <div key={brd.id} className="ViewAllBrand-col col-6 col-md-4 col-lg-3">
                            <div className="ViewAllBrand-card">
                                <img src={`https://free.shapier.in/images/${brd.imageUrl}`} alt={brd.name} className="ViewAllBrand-logo" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
