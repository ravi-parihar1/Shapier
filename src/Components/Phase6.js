import { React, useEffect, useState } from "react";
import Lottie from 'react-lottie';
import ani1 from '../assets/HomePageAssets/AnimationCat1.json'
import '../css/Phase6.css'
import asianpaints from "../assets/HomePageAssets/asian.jpg";
import cera from "../assets/HomePageAssets/cera.png";
import century from "../assets/HomePageAssets/century.jpg";
import H from "../assets/HomePageAssets/green.png";
import Hv from "../assets/HomePageAssets/fd.png";
import k from "../assets/HomePageAssets/kj.jpg";
import dor from "../assets/HomePageAssets/dor.jpg";
import wipro from "../assets/HomePageAssets/b.png";
import wonder from "../assets/HomePageAssets/jk.jpg";
import y from "../assets/HomePageAssets/narrow.png";
import Phase6BrandImg from "./Phase6BrandImg";



export default function Phase6() {

  const CategoriesItems = [
    { imgSrc: wonder, title: "cement" },
    { imgSrc: asianpaints, title: "paint" },
    { imgSrc: century, title: "Plywood" },
    { imgSrc: H, title: "cement"},
    { imgSrc: Hv, title: "cement"},
    { imgSrc: k ,title: "cement"},
    { imgSrc: dor ,title: "cement"},
    { imgSrc: wipro, title: "cement"},
    { imgSrc: century ,title: "cement"},
    { imgSrc: y ,title: "cement"},

    // Add other items as needed
  ];

  const [displayedProducts, setDisplayedProducts] = useState([]);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let productsToDisplay = [];

      if (screenWidth < 992 && screenWidth >= 768) {
        productsToDisplay = CategoriesItems.slice(0, 6);
      } else if (screenWidth < 768 && screenWidth >= 416) {
        productsToDisplay = CategoriesItems.slice(0,4);
      } else if(screenWidth < 416){
        productsToDisplay = CategoriesItems.slice(0,3);

      }
      else {
        productsToDisplay = CategoriesItems;
      }

      setDisplayedProducts(productsToDisplay);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  const fOptions = {
    loop: true,
    autoplay: true,
    animationData: ani1,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};


  return (
    

    <div className='categories-container_p6'>
      
       
        <div className="ph6-image-row">
            {displayedProducts.map((item, index) => (
            <Phase6BrandImg key={index} imgSrc={item.imgSrc} title={item.title}/>
        ))}
        </div>

        <div className="circle_service_img">
          <Lottie options={fOptions}/>
          </div>

    </div>
  )
}
