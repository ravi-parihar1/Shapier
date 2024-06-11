import React, { useEffect, useRef, useState } from 'react';
import '../css/CategoriesPageProductDivision.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import axios from 'axios';

export default function HomePageProductDivision() {

 
    const carouselRef = useRef({});

    const scrollLeft = (subcategory_name) => {
      if (carouselRef.current[subcategory_name]) {
        carouselRef.current[subcategory_name].scrollBy({ left: -150, behavior: 'smooth' });
      }
    };
  
    const scrollRight = (subcategory_name) => {
      if (carouselRef.current[subcategory_name]) {
        carouselRef.current[subcategory_name].scrollBy({ left: 150, behavior: 'smooth' });
      }
    };
  return (
    <div className="ProductDivision" >
          <div className="popular-brand-header">
            <h2 className="popular-brand-title">ABC</h2>
          </div>
          <div className="popular-brand-carousel-container">
            <button onClick={() => scrollLeft()} className="popular-brand-button popular-brand-button-left">
              <FaChevronLeft />
            </button>
            <div className="ProductDivision-carousel" >
             
                  <div  className="ProductDivision-brand-card">
                    <div className="ProductDivision-brand-card-image">
                      <img src={``} alt='no image ' />
                    </div>
                    <p className='ProductDivision-product-name'>cement ka katta </p>
                    <p className='ProductDivision-product-MRP'>MRP: talish lakh</p>
                    <p className='ProductDivision-product-sale'>Sale Price: </p>
                    <div className="pricing-sec">
                      <p className='ProductDivision-product-price'>RS. 100 million only</p>
                      <p className='ProductDivision-product-end'>per gram</p>
                    </div>
                     <div className="discount-percent">
                      <p className='ProductDivision-product-discount'>UPTO 100 % OFF</p>
                    </div>

                    <p className='ProductDivision-product-end' style={{ marginTop: '2px' }}>by prem</p>
                  </div>
               
              
            </div>
            <button onClick={() => scrollRight()} className="popular-brand-button popular-brand-button-right">
              <FaChevronRight />
            </button>
          </div>
        </div>
  )
}
