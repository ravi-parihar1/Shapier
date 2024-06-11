import React, { useEffect, useRef, useState } from 'react';
import '../css/PopularBrands.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

// const BRANDS = [
//     { name: 'Jindal Panther', imageUrl: 'https://static.asianpaints.com/etc.clientlibs/apcolourcatalogue/clientlibs/clientlib-global-unification/resources/images/header/asian-paints-logo.webp', alt: 'Jindal Panther' },
//     { name: 'Timco', imageUrl: 'https://www.dorsetindia.com/images/logo.svg', alt: 'Timco' },
//     { name: 'Shera', imageUrl: 'https://www.greenply.com/assets/greenply-logo.png', alt: 'Shera' },
//     { name: 'Tata Steel', imageUrl: 'https://mm.media-mccoymart.com/buy_catalog/image/catalog/Brand_Logos/armstrong-new.webp', alt: 'Tata Steel' },
//     { name: 'Huliot', imageUrl: 'https://mm.media-mccoymart.com/buy_catalog/image/catalog/Brand%20_logos/dr-fixit-logo-1.webp', alt: 'Huliot' },
//     { name: 'Huliot', imageUrl: 'https://www.crompton.co.in/cdn/shop/files/logo.svg?v=1681391912&width=500', alt: 'Huliot' },
//     { name: 'Huliot', imageUrl: 'https://mm.media-mccoymart.com/buy_catalog/image/catalog/Brand%20_logos/dr-fixit-logo-1.webp', alt: 'Huliot' },
//     { name: 'Huliot', imageUrl: 'https://zenlayercdn.centuryply.com/assets/img/logo.png', alt: 'Huliot' },
//     { name: 'Ultratech', imageUrl: 'https://mm.media-mccoymart.com/buy_catalog/image/catalog/Brand%20_logos/denler.webp', alt: 'Ultratech' },
//     { name: 'Action Tesa', imageUrl: 'https://mm.media-mccoymart.com/buy_catalog/image/catalog/Brand_Logos/ramco-hilux.webp', alt: 'Action Tesa' },
//     { name: 'Action Tesa', imageUrl: 'https://mm.media-mccoymart.com/buy_catalog/image/catalog/Brand_Logos/Finolex.webp', alt: 'Action Tesa' },
// ];

export default function PopularBrands() {
    const carouselRef = useRef(null);
    const [brand,setBrand] = useState([]);

    const fetchAllBrands = async () => {
        const {data} = await axios.get(`https://free.shapier.in/api/v1/product_brand`);
        const arrayOfBrands = data.data;
        setBrand(arrayOfBrands.map((brnd)=>({
            id: brnd.id,
            name: brnd.product_brand_name,
            imageUrl: brnd.product_image
        })))
    }
    useEffect(()=>{
        fetchAllBrands();
    })
    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -150, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 150, behavior: 'smooth' });
        }
    };

    return (
        <div className="popular-brand-bg">
            
            <div className="popular-brand-header">
                <h2 className="popular-brand-title">Popular Brands</h2>
                <Link to='/BrandPage'  className="popular-brand-view-all">View All</Link>
            </div>
            <div className="popular-brand-carousel-container">
                <button onClick={scrollLeft} className="popular-brand-button popular-brand-button-left">
                    <FaChevronLeft />
                </button>
                <div className="popular-brand-carousel" ref={carouselRef}>
                    {brand.map((brd) => (
                        <div key={brd.id} className="popular-brand-card">
                            <img src={`https://free.shapier.in/images/${brd.imageUrl}`} alt={brd.name} className="popular-brand-image" />
                        </div>
                    ))}
                </div>
                <button onClick={scrollRight} className="popular-brand-button popular-brand-button-right">
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
}
