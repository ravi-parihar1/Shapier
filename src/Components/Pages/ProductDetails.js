import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import "../../css/ProductDetails.css"; // Assuming this contains styles specific to ProductDetails
import Header2 from "../Header2";
import BottomBar from "../BottomBar";
import ProductCardContainer from "../ProductCard";
import productsData from "../product.json";
import axios from "axios";
export default function ProductDetails() {
  const { id } = useParams();
  const [productById, setproductById] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const fetchedProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/product/${id}`
      );
      window.scrollTo(0, 0);
      const arrayOfProduct = data.data;
      setproductById(
        arrayOfProduct.map((product) => ({
          product_id: product.id,
          product_name: product.product,
          product_image: product.product_image,
          product_price: product.product_price,
          product_description: product.product_description,
          product_category_id: product.product_category_id,
        }))
      );
    } catch (error) {
      console.log(error);
    }
  };

  
  const addToCart = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/v1/cart", {
        user_id: 1,
        product_id: productById[0].product_id,
        quantity: quantity,
      });
      console.log(response.data);
      setIsAddedToCart(true);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchedProduct();
  }, [id]);

  useEffect(() => {
    const productImg = document.getElementById("ProductImg");
    const smallImgs = document.getElementsByClassName("custom-small-img");

    const handleSmallImgClick = (index) => {
      productImg.src = smallImgs[index].src;
    };

    const addEventListeners = () => {
      smallImgs[0]?.addEventListener("click", () => handleSmallImgClick(0));
      smallImgs[1]?.addEventListener("click", () => handleSmallImgClick(1));
      smallImgs[2]?.addEventListener("click", () => handleSmallImgClick(2));
      smallImgs[3]?.addEventListener("click", () => handleSmallImgClick(3));
    };

    const removeEventListeners = () => {
      smallImgs[0]?.removeEventListener("click", () => handleSmallImgClick(0));
      smallImgs[1]?.removeEventListener("click", () => handleSmallImgClick(1));
      smallImgs[2]?.removeEventListener("click", () => handleSmallImgClick(2));
      smallImgs[3]?.removeEventListener("click", () => handleSmallImgClick(3));
    };

    addEventListeners();

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      removeEventListeners();
    };
  }, []); // Empty dependency array ensures this effect runs only once after component mount

  return (
    <>
      <Header2 />
      <div className="blank-container"></div>
      <BottomBar />
      <div className="custom-small-container custom-single-product">
        {productById.map((productbyid) => (
          <>
            <div className="custom-row">
              <div className="custom-col-2">
                <img
                  style={{
                    height: "30rem",
                    width: "43rem",
                    objectFit: "contain",
                  }}
                  src={`http://localhost:5000/images/${productbyid.product_image}`}
                  alt="product"
                  width="100%"
                />
              </div>

              <div class="column-xs-12 column-md-5">
                <h1>{productbyid.product_name}</h1>
                <h2>RS.{productbyid.product_price}</h2>

                <div className="quantity-selector">
                  <label htmlFor="quantity">Quantity:</label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    value={quantity}
                    
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                  />
                </div>

                <div className="quantity-button">
                  <button class="add-to-cart-btn" onClick={addToCart}>
                    <span>Add To Cart</span>
                  </button>
                  {isAddedToCart && (
                    <p className="added_to_cart">Product added to card!</p>
                  )}
                </div>

                <h4 className="description-title">Product Details</h4>
                <div class="product-description">
                  <p>{productbyid.product_description}</p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>

      <div class="Related-text-container">
        <div class="related-item-text">
          <h2 className="Related-text">Related Products</h2>
          <p className="view-more-text">View more</p>
        </div>
      </div>

      <ProductCardContainer products={productsData} />

      <div className="blank-container"></div>
    </>
  );
}
