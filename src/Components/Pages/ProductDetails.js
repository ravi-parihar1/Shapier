import React from 'react';
import Header from '../Header';
import '../../css/ProductDetails.css';

export default function ProductDetails() {
  return (
    <>
      <Header />
      <div className="product-details-container">
        <div className="product-images">
          <img src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp" alt="Product" />
          <img src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big1.webp" alt="Product" />
          <img src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big2.webp" alt="Product" />
          {/* Add more images as needed */}
        </div>
        <div className="product-info">
          <h1 className="product-title">Quality Men's Hoodie for Winter, Men's Fashion</h1>
          <p className="product-brand">Brand: Reebook</p>
          <p className="product-category">Category: Hoodie</p>
          <p className="product-price">$75.00</p>
          <div className="quantity-selector">
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" min="1" defaultValue="1" />
          </div>
          <button className="btn btn-primary">Add to Cart</button>
          <div className="product-description">
            <h2>Description</h2>
            <p>
              Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for men.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
