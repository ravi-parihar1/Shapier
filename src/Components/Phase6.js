import React, { useState, useEffect } from 'react';
import Services from '../Services.json';
import Shop from '../TopRatedProduct.json';
import Shap from '../Shape.json';
import '../css/Phase6.css';

export default function Phase6() {
  const tags = [
    { name: "shape", backgroundImage: "https://images.unsplash.com/photo-1496564203457-11bb12075d90?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "services", backgroundImage: "https://images.unsplash.com/photo-1615856210162-9ae33390b1a2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "shop", backgroundImage: "https://images.unsplash.com/photo-1631856954655-966f97d809de?q=80&w=2046&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ];
  const [displayedProducts, setDisplayedProducts] = useState("shape");

  const handleClick = (tag) => {
    setDisplayedProducts(tag);
  };

  useEffect(() => {
    // console.log(displayedProducts);
  }, [displayedProducts]);

  return (
    <>
      <div className='tags_container'>
        {tags.map(tag =>
          <div className='tags_inner_container' key={tag.name}>
            <button
              className='s-button'
              style={{ backgroundImage: `url(${tag.backgroundImage})` }}
              onClick={() => handleClick(tag.name)}
            >
              {tag.name}
              {/* <div className="s-button-overlay"></div> Black overlay */}
            </button>
          </div>
        )}
      </div>
      {displayedProducts === "shape" ?
        <div className="css-typing">
          <h2>Get The Shape,</h2>
          <h2>They help in construction</h2>
          <h2>of your dreams</h2>
        </div> : <div></div>
      }
      {displayedProducts === "shape" ?
        <div className='cat-item'>
          {Shap.map(shap =>
            <div className='tags_element' key={shap.id}>
              <img src={shap.imgsrc} alt="" />
              <p className='name'>{shap.name}</p>
            </div>
          )}
        </div> : <div></div>
      }
      {displayedProducts === "services" ?
        <div className='cat-item'>
          {Services.map(service =>
            <div className='tags_element' key={service.id}>
              <img src={service.img} alt="no image to display" />
              <p className='name'>{service.name}</p>
            </div>
          )}
        </div> : <div></div>
      }
      {displayedProducts === "shop" ?
        <div className='cat-item'>
          {Shop.map(shop =>
            <div className='tags_element' key={shop.id}>
              <img src={shop.image} alt="" />
              <p className='name'>{shop.name}</p>
            </div>
          )}
        </div> : <div></div>
      }
    </>
  )
}
