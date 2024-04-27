import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <a href={product.product_link} className="product-link">
        <img className="product-card-img" src={product.product_image} alt={product.product_name} />
        <div className="product-card-details">
          <p className="product-name">{product.product_name}</p>
          <p className="product-price">{product.product_price}</p>
        </div>
      </a>
      <div className="product-wish-addtocart">
        <a className="wish-btn">
          <img className="wish-btn-img" src="https://tech.mjassociate.co.in/images/svgs/like_red_outerline.svg" width="21" height="21" alt="Like" />
        </a>
        <a href="#" className="addtocart-btn">Add To Cart</a>
      </div>
    </div>
  );
}

export default function ProductCardContainer({ products }) {
  return (
    <div className="product-card-container">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}
