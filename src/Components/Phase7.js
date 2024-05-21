import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Phase7.css";
import { AiOutlineHeart } from "react-icons/ai";

export default function Phase7({ filepath, heading }) {
  useEffect(() => {
    // Add event listener to prevent focus outline on click
    const handleFocus = () => {
      document.addEventListener("mousedown", (event) => {
        if (event.target.classList.contains("product-link")) {
          event.target.blur(); // Remove focus
        }
      });
    };

    handleFocus();

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleFocus);
    };
  }, []);

  return (
    <>
      <div className="Tradning_product_page">
        <div className="d-flex" style={{ justifyContent: "center" }}>
          <h3 className="heading_name_tranding_product">{heading}</h3>
        </div>
        <div className="Trending_product_container">
          {filepath.map((product) => (
            <Link
              to={`/product-details/${product.product_id}`}
              key={product.id}            
              className="product-link"
            >

              <div className="trending-product-card">

                <img className="trending-product-card-img" src={`https://free.shapier.in/images/${product.product_image}`} alt={product.name} />
                <div className="trending-product-card-details">
                  <p className="trending-product-name">{product.product_name}</p>
                  <p className="trending-product-price">Rs. {product.product_price}</p>
                </div>

                <div className="product-wish-addtocart">
                  <div className="add-wish-btn">
                    {/* <img className="wish-btn-img" src="https://tech.mjassociate.co.in/images/svgs/like_red_outerline.svg" alt="Like" /> */}
                  </div>
                  <a href="#" className="addtocart-btn">Add To Cart</a>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
