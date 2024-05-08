import {React,useEffect,useState} from "react";
import "../css/CartItem.css";
import axios from "axios";

const CartItem = () => {
  const [cartProducts, setCartProducts] = useState([]);

  const fetchCart = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/api/v1/cart`);
      const arrayOfCart = data.data;
      setCartProducts(
        arrayOfCart.map((cart) => ({
          cart_id: cart.id,
          product_id: cart.product_id,
          quantity: cart.quantity,
          product_name: cart.product,
          product_image: cart.product_image,
          product_price: cart.product_price,
        }))
      );
      console.log(arrayOfCart);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div></div>
  );
};

export default CartItem;
