import {React,useEffect,useState} from 'react';
import axios from 'axios';
function ProductCard({ product }) {


  const [isAddedToCart, setIsAddedToCart] = useState(false);
    
  const addToCart = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/v1/cart", {
        user_id: 1,
        product_id: product.product_id,
        quantity: 1,
      });
      console.log(response.data);
      setIsAddedToCart(true);
      // window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="product-card">
      <a href={product.product_link} className="product-link">
        <img className="product-card-img" src={`http://localhost:5000/images/`+product.product_image} alt={product.product_name} />
        <div className="product-card-details">
          <p className="product-name">{product.product_name}</p>
          <p className="product-price">Rs.{product.product_price}</p>
        </div>
      </a>
      <div className="product-wish-addtocart">
        <a className="wish-btn">
          <img className="wish-btn-img" src="https://tech.mjassociate.co.in/images/svgs/like_red_outerline.svg"  alt="Like" />
        </a>
        <a href="#" className="addtocart-btn" onClick={addToCart}>Add To Cart</a>
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
