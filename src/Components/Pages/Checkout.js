import React, { useState, useEffect } from 'react';
import Header from '../Header';
import BottomBar from '../BottomBar';
import '../../css/CheckOut.css';
import Footer from '../Footer';
import CartItem from '../CartItem';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CouponInput = () => (
  <div className="coupon-input-checkoutPage">
    <input type="text" placeholder="Enter Coupon Code" className="coupon-code-input-checkoutPage" />
    <button className="apply-button-checkoutPage">Apply</button>
  </div>
);

const OrderSummary = ({ total_price_product }) => (
  <div className="order-summary-checkout">
    <h2 className="order-summary-title-checkout">Order Summary</h2>
    <div className="order-summary-details-checkout">
      <div className="order-summary-row-checkout">
        <span>Subtotal:</span>
        <span>Rs.{total_price_product}</span>
      </div>
      <div className="order-summary-row-checkout">
        <span>Shipping:</span>
        <span>Rs.10</span>
      </div>
      <div className="order-summary-row-checkout">
        <span>Taxes:</span>
        <span>Rs.5</span>
      </div>
      <hr className="divider-checkoutPage" />
      <CouponInput />
      <hr className="divider-checkoutPage" />
      <div className="order-summary-row-checkout">
        <span>Total:</span>
        <span>Rs. {total_price_product + 5 + 10}</span>
      </div>
      <Link to='/Billing'>
        <button className="checkout-button-checkoutPage">Proceed to Checkout</button>
      </Link>
    </div>
  </div>
);

export default function Checkout() {
  const storedData = JSON.parse(localStorage.getItem("data"));
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCart = async () => {
    if (!storedData || !storedData.token || !storedData.userId) {
      setIsLoading(false);
      return;
    }

    const { token, userId } = storedData;
    try {
      const response = await axios.get(`http://13.232.110.226:5000/api/v1/cart_by_userId/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.headers['content-type'].includes('application/json')) {
        const arrayOfCart = response.data.data;
        setCart(arrayOfCart.map((fetchedCart) => ({
          cart_id: fetchedCart.id,
          product_id: fetchedCart.product_id,
          product_name: fetchedCart.product,
          product_image: fetchedCart.product_image,
          product_price: fetchedCart.product_price,
          quantity: fetchedCart.quantity,
          product_description: fetchedCart.product_description,
          user_id: fetchedCart.user_id
        })));

        const total = arrayOfCart.reduce(
          (accumulator, currentItem) =>
            accumulator + currentItem.product_price * currentItem.quantity,
          0
        );
        setTotalPrice(total);
      } else {
        setError('Unexpected response type');
      }
    } catch (error) {
      setError('Error fetching cart data. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Header />
      <div className="blank-container"></div>
      <div className="shopping-cart-checkout">
        <div className="grid-container-checkout">
          <div className="checkout-product-items">
            <h2 className="cart-item-title-checkout">Cart Items</h2>
            {cart.length > 0 ? (
              cart.map((item) => (
                <CartItem
                  key={item.cart_id}
                  image={item.product_image}
                  title={item.product_name}
                  price={item.product_price}
                  quantity={item.quantity}
                />
              ))
            ) : (
              <div>No items in the cart.</div>
            )}
          </div>
          <OrderSummary total_price_product={totalPrice} />
        </div>
      </div>
      <BottomBar />
      <Footer />
    </>
  );
}
