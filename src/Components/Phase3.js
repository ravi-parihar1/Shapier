import React from 'react';
import './Phase3.css';
import asianpaints from '../assets/HomePageAssets/asian.png';
import cera from '../assets/HomePageAssets/cera.png';
import century from '../assets/HomePageAssets/century.png';
import H from '../assets/HomePageAssets/H.png';
import Hv from '../assets/HomePageAssets/Hv.png';
import k from '../assets/HomePageAssets/k.png';
import dor from '../assets/HomePageAssets/dorset.png';
import wipro from '../assets/HomePageAssets/wipro.png';
import wonder from '../assets/HomePageAssets/jk.jpg';
import y from '../assets/HomePageAssets/y.png';


import Phase3BrandImage from './Phase3BrandImage';

export default function Phase3() {
  // Define an array with titles and image sources
  const BrandItems = [
    { imgSrc: asianpaints },
    { imgSrc: cera },
    { imgSrc: century },
    { imgSrc: H },
    { imgSrc: Hv },
    { imgSrc: k },
    { imgSrc: dor },
    { imgSrc: wipro },
    { imgSrc: century },
    { imgSrc: y },

    // Add other items as needed
  ];

  return (
    <div className='brand-container'>
      {/* All text part covers here */}
      <div className="ph3-container">
        <h2>India's Most<br /> Popular <br />Brands</h2>
        <h5 className='brand-small-text mb-3'>That’s what you get<br />when you choose</h5>
        <h2>SHAPIER</h2>
        <button className="explore-button mt-4">Explore Now</button>
      </div>

      {/* Brand images come from here */}
      <div className="ph3-image-row">
        {BrandItems.map((item, index) => (
          <Phase3BrandImage
            key={index}
            imgSrc={item.imgSrc}
          />
        ))}
      </div>
    </div>
  );
}