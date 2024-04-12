import { React, useEffect, useState } from "react";
import "./Phase3.css";
import asianpaints from "../assets/HomePageAssets/asian.png";
import cera from "../assets/HomePageAssets/cera.png";
import century from "../assets/HomePageAssets/century.png";
import H from "../assets/HomePageAssets/H.png";
import Hv from "../assets/HomePageAssets/Hv.png";
import k from "../assets/HomePageAssets/k.png";
import dor from "../assets/HomePageAssets/dorset.png";
import wipro from "../assets/HomePageAssets/wipro.png";
import wonder from "../assets/HomePageAssets/jk.jpg";
import y from "../assets/HomePageAssets/y.png";

import Phase3BrandImage from "./Phase3BrandImage";

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
  const [displayedProducts, setDisplayedProducts] = useState([]);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let productsToDisplay = [];

      if (screenWidth < 992 && screenWidth >= 768) {
        productsToDisplay = BrandItems.slice(0, 6);
      } else if (screenWidth < 768) {
        productsToDisplay = BrandItems.slice(0,4);
      } else {
        productsToDisplay = BrandItems;
      }

      setDisplayedProducts(productsToDisplay);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="brand-container">
      {/* All text part covers here */}
      <div className="ph3-container">
        <h2>
          India's Most
          <br /> Popular <br />
          Brands
        </h2>
        <h5 className="brand-small-text mb-3">
          That’s what you get
          <br />
          when you choose
        </h5>
        <h2>SHAPIER</h2>
        <button className="explore-button mt-4">Explore Now</button>
      </div>

      <div className="ph3-image-row">
        {displayedProducts.map((item, index) => (
          <Phase3BrandImage key={index} imgSrc={item.imgSrc} />
        ))}
      </div>
    </div>
  );
}
