import { React, useState, useEffect } from 'react';
import Services from '../Services.json';
import Shop from '../TopRatedProduct.json';
import Shap from '../Shap.json'
import TopProduct from '../TopRatedProduct.json';
import '../css/Phase6.css';

export default function Phase6() {
  const tags = ["services", "shap", "shop"];
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
              <img src={service.img} alt={service.name} />
              {/* <p>{service.name}</p> */}
            </div>
          )}
        </div> : null}
      {displayedProducts === "shap" ?
        <div className='cat-item'>
          {Shap.map(shap =>
            <div className='tags_element' key={shap.id}>

              {shap.name}
            </div>
          )}
        </div> : null}
      {displayedProducts === "shop" ?
        <div className='cat-item'>
          {Shop.map(shop =>
            <div className='tags_element' key={shop.id}>
              {shop.name}
            </div>
          )}
        </div> : null}
    </>
  )
}