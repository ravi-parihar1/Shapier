import React, { useEffect, useState } from 'react';
import '../css/ProductList.css'; // Create this file for styling

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/CategoriesProduct.json')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="product-list">
      <h1>Hot Deals</h1>
      <div className="Categories-product-container">
        {products.map(product => (
          <div key={product.id} className="Categories-product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>MRP: Rs.{product.mrp}</p>
            <p>Sale Price: Rs.{product.salePrice} per {product.unit}</p>
            <p>UPTO {product.discount} OFF</p>
            <p>by {product.brand}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
