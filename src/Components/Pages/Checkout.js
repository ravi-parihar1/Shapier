import React, { useState } from 'react';
import Header2 from '../Header2';
import BottomBar from '../BottomBar';
import '../../css/CheckOut.css';
import Footer from '../Footer';
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="cart-item-checkout">

      <div className="cart-item-details-checkout">
        <div className="cart-item-info-checkout">
          <img src="https://placehold.co/50" alt="Product" className="cart-item-image-checkout" />
          <div>
            <h3 className="cart-item-name-checkout">Product Name</h3>
            {/* <p className="cart-item-price-checkout">Price: $10</p> */}
            <div className="Checkout-row">
            
            <div className="quantity-controls">
            <span className="quantity-label">Quantity:</span>
                <span className="quantity_checkout">{quantity}</span>
                
              </div>
              <p class="checkout-product-price">$47.69</p>
              
            </div>
            <button className="remove-button">Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CouponInput = () => (
  <div className="coupon-input-checkoutPage">
    <input type="text" placeholder="Enter Coupon Code" className="coupon-code-input-checkoutPage" />
    <button className="apply-button-checkoutPage">Apply</button>
  </div>
);


const OrderSummary = () => {
  return (
    <div className="order-summary-checkout">
      <h2 className="order-summary-title-checkout">Order Summary</h2>
      <div className="order-summary-details-checkout">
        <div className="order-summary-row-checkout">
          <span>Subtotal:</span>
          <span>$100</span>
        </div>
        <div className="order-summary-row-checkout">
          <span>Shipping:</span>
          <span>$10</span>
        </div>
        <div className="order-summary-row-checkout">
          <span>Taxes:</span>
          <span>$5</span>
        </div>
        <hr className="divider-checkoutPage" />
        <CouponInput />
        <hr className="divider-checkoutPage" />
        <div className="order-summary-row-checkout">
          <span>Total:</span>
          <span>$110</span>
        </div>
        <Link action to='/Billing'><button className="checkout-button-checkoutPage">Proceed to Checkout</button></Link>
      </div>
    </div>
  );
};

export default function Checkout() {
  return (
    <>
      <Header2 />
      <div className="blank-container"></div>
      {/* <h1 className='CheckoutPage_Heading'>Checkout</h1> */}
      <div className="shopping-cart-checkout">

        <div className="grid-container-checkout">
          <div className="checkout-product-items">
            <h2 className="cart-item-title-checkout">Cart Items</h2>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <OrderSummary />
        </div>
      </div>

      <BottomBar />
      <Footer />
    </>
  );
}
