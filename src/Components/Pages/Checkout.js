import React, { useState, useEffect } from 'react';
import Header from '../Header';
import BottomBar from '../BottomBar';
import '../../css/CheckOut.css';
import Footer from '../Footer';
import CartItem from '../CartItem';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import CartEmpty from '../CartEmpty';

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
      <Link to={`/Billing/${total_price_product}`}>
        <button className="checkout-button-checkoutPage">Proceed to Checkout</button>
      </Link>
    </div>
  </div>
);

export default function Checkout() {
  const navigation = useNavigate()
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
      const response = await axios.get(`https://free.shapier.in/api/v1/cart_by_userId/${userId}`, {
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

        // Store product IDs in localStorage
        const productIds = arrayOfCart.map(item => item.product_id);
        localStorage.setItem('productIds', JSON.stringify(productIds));
      } else {
        setError('Unexpected response type');
      }
    } catch (error) {
      setError('Error fetching cart data. Please try again later.');
      return navigation('/login')
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleDeleteCartItem = async (id) => {
    try {
      await axios.delete(`https://free.shapier.in/api/v1/cart/${id}`, {
        headers: {
          Authorization: `Bearer ${storedData.token}`,
        },
      });
      setCart(cart.filter(item => item.cart_id !== id));
      setTotalPrice(cart.reduce((acc, item) => item.cart_id !== id ? acc + item.product_price * item.quantity : acc, 0));
    } catch (error) {
      console.log(error);
    }
  };

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
      {cart.length > 0 ? (
        <div className="shopping-cart-checkout">
          <div className="grid-container-checkout">
            <div className="checkout-product-items">
              <h2 className="cart-item-title-checkout">Cart Items</h2>
              {cart.map((item) => (
                <CartItem
                  key={item.cart_id}
                  id={item.cart_id}
                  image={item.product_image}
                  title={item.product_name}
                  price={item.product_price}
                  quantity={item.quantity}
                  onDelete={() => handleDeleteCartItem(item.cart_id)}
                />
              ))}
            </div>
            <OrderSummary total_price_product={totalPrice} />
          </div>
        </div>
      ) : (<div><CartEmpty /></div>)}
      <BottomBar />
      <Footer />
    </>
  );
}
