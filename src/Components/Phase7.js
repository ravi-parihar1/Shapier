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
        <div className="d-flex">
          <h3 className="heading_name">{heading}</h3>
          <p className="Tanding_product_see_more">See More...</p>
        </div>
        <div
          className="container Trending_product_container"
          style={{ borderRadius: "15px 15px 0 0" }}
          id=""
        >
          {filepath.map((product) => (
            <Link
              key={product.id}
              to={{
                pathname: "/product-details",
                state: { product },
              }}
              className="product-link"
            >
              <div className="tranding_page_Card">
                <img
                  className="trending_product_img"
                  src={product.image}
                  alt={product.name}
                />
                <p className="tranding_page_product_name">
                  {product.name.length > 50
                    ? `${product.name.slice(0, 5)}...`
                    : product.name}
                </p>
                <div className="price_section">
                  <div className="tranding_product_text_box_2">
                    <p className="tranding_page_product_price">Price</p>
                    <p className="tranding_page_product_price">Rs.380</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
