import { React, useState, useEffect } from 'react';
import Services from '../Services.json';
import Shop from '../TopRatedProduct.json';
import Shap from '../Shape.json'
import TopProduct from '../TopRatedProduct.json';
import '../css/Phase6.css';

export default function Phase6() {
  const tags = ["services", "shape", "shop"];
  const [displayedProducts, setDisplayedProducts] = useState("services")

  const handleClick = async (tag) => {
    setDisplayedProducts(tag);
  }

  useEffect(() => {
    console.log(displayedProducts);
  }, [displayedProducts]);

  return (
    <>
      <div className='tags_container'>
        {tags.map(tag =>
          <div className='tags_inner_container'>
            <button className='gm-btn gb-cutter' key={tag} onClick={() => handleClick(tag)}>{tag}</button>
          </div>
        )}
      </div>
      {displayedProducts === "services" ?
        <div className='cat-item'>
          {Services.map(service =>
            <div className='tags_element' key={service.id}>
              <img src={service.img} alt="no image to display" />
              <p className='name'>{service.name}</p>
            </div>
          )}
        </div> : null}
      {displayedProducts === "shape" ?
        <div className='cat-item'>
          {Shap.map(shap =>
            <div className='tags_element' key={shap.id}>
              <img src={shap.imgsrc} alt="" />
              <p className='name'>{shap.name}</p>
            </div>
          )}
        </div> : null}
      {displayedProducts === "shop" ?
        <div className='cat-item'>
          {Shop.map(shop =>
            <div className='tags_element' key={shop.id}>
              <img src={shop.image} alt="" />
              <p className='name'>{shop.name}</p>
            </div>
          )}
        </div> : null}
    </>
  )
}