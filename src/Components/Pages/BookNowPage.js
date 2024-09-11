import React, { useState, useEffect } from 'react';
import Header from '../Header';
import BottomBar from '../BottomBar';
import '../../css/CheckOut.css';
import Footer from '../Footer';
import CartItem from '../CartItem';
import { Link, useNavigate, useParams } from 'react-router-dom';
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
      <Link to={`/Billing/${total_price_product}`}>
        <button className="checkout-button-checkoutPage">Proceed to Checkout</button>
      </Link>
    </div>
  </div>
);

export default function BookNowPage() {
  const [getProduct, setGetProduct] = useState([]);
  const { id, quantityOfProduct } = useParams(); // Combine useParams
  const navigate = useNavigate();

  const fetchSingleProduct = async () => {
    try {
      const { data } = await axios.get(`https://free.shapier.in/api/v1/product/${id}`);
      const arrayOfProduct = data.data; // Ensure data.data is wrapped in an array
      setGetProduct(arrayOfProduct.map((details) => ({
        id: details.id,
        discount: details.discount,
        minimum_quantity: details.minimum_quantity,
        per_base: details.per_base,
        product: details.product,
        product_description: details.product_description,
        product_image: details.product_image,
        product_price: details.product_price,
        sale_price: details.sale_price,
        stock: details.stock,
        vandor_name: details.vandor_name,
        subcategory_id: details.subcategory_id
      })));

      const productIds = arrayOfProduct.map(item => item.id);
      const vendor_name = arrayOfProduct.map(item => item.vandor_name)
      localStorage.setItem('productIds', JSON.stringify(productIds));
      localStorage.setItem('vendorName',JSON.stringify(vendor_name));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleProduct();
  }, [id]); // Add dependency array to useEffect

  return (
    <>
      <Header />
      <div className="blank-container"></div>
      <div className="shopping-cart-checkout">
        {getProduct.map((product) => (
          <div className="grid-container-checkout" key={product.id}>
            <div className="Buy-product-items">
              <h2 className="cart-item-title-checkout">Cart Items</h2>
              <CartItem
                image={product.product_image}
                id={product.id}
                price={product.product_price}
                quantity={quantityOfProduct}
                onDelete={() => navigate(`/details/${id}`)}
              />
            </div>
            <OrderSummary total_price_product={product.product_price * quantityOfProduct} />
          </div>
        ))}
      </div>
      <BottomBar />
      <Footer />
    </>
  );
}
