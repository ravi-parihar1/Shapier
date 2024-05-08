import React, { useState } from "react";
import "../css/Store.css";
// import ProductCardContainer from '..'; // Import ProductCardContainer component
import productsData from "../Components/product.json";

export default function PhaseCategories() {
  // Initialize carousel on component mount (using useEffect)
  const [productFilter, setProductFilter] = useState([]);

  const handleFilter = (category_name) => {
    if (category_name === "All") {
      setProductFilter(productsData);
    } else {
      const filteredProducts = productsData.filter(
        (products) => products.category_name === category_name
      );
      setProductFilter(filteredProducts);
    }
  };

  const [TagName, setTagName] = useState([]);

  return (
    <>
      <section>
        <h2>Shop by Categories</h2>
        <ul className="shop-pets">
          <li className="card-large card-light" id="sup-service">
            <div className="card-image">
              <img
                src="https://buildpro.store/cdn/shop/files/New_Project_7817e80f-dc56-4ffe-9394-9935ac659518.png?v=1672258867"
                alt="Basin Mixer"
              />
            </div>
            <ul>
              <li className="name_of_category">Faucet & Showers</li>

              <button
                className="store-banner-button btn-outline-light-cart"
                
              >
                Shop All
                {/* <span className="material-symbols-outlined">arrow_forward</span> */}
              </button>
            </ul>
          </li>
          {/* Similar cards for Cats, Birds, Fish... */}

          <li className="card-large card-light" id="sup-cat">
            <div className="card-image">
              <img
                src="https://buildpro.store/cdn/shop/files/image_38_2.png?v=1662206734"
                alt="Dog"
              />
            </div>
            <ul>
              <li className="name_of_category">Plumbing & Sanitary</li>

              <button className="store-banner-button btn-outline-light-cart">
                Shop All
                {/* <span className="material-symbols-outlined">arrow_forward</span> */}
              </button>
            </ul>
          </li>

          <li className="card-large card-light" id="sup-stop">
            <div className="card-image">
              <img
                src="https://buildpro.store/cdn/shop/files/image_39.png?v=1662206733"
                alt="Dog"
              />
            </div>
            <ul>
              <li className="name_of_category">Kitchen</li>

              <button className="store-banner-button btn-outline-light-cart">
                Shop All
                {/* <span className="material-symbols-outlined">arrow_forward</span> */}
              </button>
            </ul>
          </li>

          <li className="card-large card-light" id="sup-sop">
            <div className="card-image">
              <img
                src="https://buildpro.store/cdn/shop/files/image_38_3.png?v=1662206733"
                alt="Dog"
              />
            </div>
            <ul>
              <li className="name_of_category">Tiles</li>

              <button className="store-banner-button btn-outline-light-cart">
                Shop All
                {/* <span className="material-symbols-outlined">arrow_forward</span> */}
              </button>
            </ul>
          </li>

          <li className="card-large card-light" id="sup-heat">
            <div className="card-image">
              <img
                src="https://buildpro.store/cdn/shop/files/image_38_4.png?v=1662206733"
                alt="Dog"
              />
            </div>
            <ul>
              <li className="name_of_category">Electrical</li>

              <button className="store-banner-button btn-outline-light-cart">
                Shop All
                {/* <span className="material-symbols-outlined">arrow_forward</span> */}
              </button>
            </ul>
          </li>

          <li className="card-large card-light" id="sup-at">
            <div className="card-image">
              <img
                src="https://buildpro.store/cdn/shop/files/image_38_5.png?v=1662206733"
                alt="Dog"
              />
            </div>
            <ul>
              <li className="name_of_category">Construction Material</li>

              <button className="store-banner-button btn-outline-light-cart">
                Shop All
                {/* <span className="material-symbols-outlined">arrow_forward</span> */}
              </button>
            </ul>
          </li>
        </ul>
      </section>
    </>
  );
}
