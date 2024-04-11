import React, { useState, useEffect } from "react";
import "../css/Phase8.css";
import TopProduct from "../TopRatedProduct.json";

export default function Phase8() {
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let productsToDisplay = [];

      if (screenWidth <= 768) {
        // For mobile screens, display only the first four products
        productsToDisplay = TopProduct.slice(0, 4);
      } else {
        // For larger screens, display all products
        productsToDisplay = TopProduct;
      }

      setDisplayedProducts(productsToDisplay);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial call to handleResize to set initial state
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="container mx-4">
        <div className="d-flex flex-row">
          <h3>Top Rated Product</h3>
          <p id="see_more_button">See More...</p>
        </div>
        <div className="container row mx-3">
          {displayedProducts.map((product) => (
            <div key={product.id} className="card row">
              <div className="card-body">
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.name}
                />
                <a href="#" className="text-reset text-decoration-none">
                  {product.name.length > 10
                    ? `${product.name.slice(0, 10)}...`
                    : product.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
