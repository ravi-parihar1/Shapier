import React, { useEffect, useState } from 'react';
import Header from '../Header';
import '../../css/ProductDetails.css';
import BottomBar from '../BottomBar';
import ProductCardContainer from '../ProductCard';
import productsData from '../product.json';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [productById, setProductById] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  
  const storedData = JSON.parse(localStorage.getItem("data"));
  const userId = storedData ? storedData.userId : null;
  const token = storedData ? storedData.token : null;

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const { data } = await axios.get('http://13.232.110.226:5000/api/v1/product');
        const arrayOfProducts = data.data;
        setProduct(arrayOfProducts.map(product => ({
          product_id: product.id,
          product_name: product.product_name,
          product_price: product.product_price,
          product_image: product.product_image,
          product_description: product.product_description,
        })));
      } catch (error) {
        console.log("Error fetching all products: ", error);
      }
    };

    fetchAllProducts();
  }, []);

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const { data } = await axios.get(`http://13.232.110.226:5000/api/v1/product/${id}`);
        const arrayOfProducts = data.data;
        setProductById(arrayOfProducts.map(product => ({
          product_id: product.id,
          product_name: product.product,
          product_image: product.product_image,
          product_price: product.product_price,
          product_description: product.product_description,
          product_category_id: product.product_category_id,
        })));
      } catch (error) {
        console.log("Error fetching product by ID: ", error);
      }
    };

    fetchProductById();
  }, [id]);

  const addToCart = async () => {
    if (!userId || !token) {
      console.log("User is not authenticated.");
      return;
    }

    try {
      await axios.post('http://13.232.110.226:5000/api/v1/cart', {
        user_id: userId,
        product_id: productById[0].product_id,
        quantity: quantity,
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setIsAddedToCart(true);
    } catch (error) {
      console.log("Error adding to cart: ", error);
    }
  };

  useEffect(() => {
    const productImg = document.getElementById('ProductImg');
    const smallImgs = document.getElementsByClassName('custom-small-img');

    const handleSmallImgClick = (index) => {
      productImg.src = smallImgs[index].src;
    };

    const addEventListeners = () => {
      smallImgs[0]?.addEventListener('click', () => handleSmallImgClick(0));
      smallImgs[1]?.addEventListener('click', () => handleSmallImgClick(1));
      smallImgs[2]?.addEventListener('click', () => handleSmallImgClick(2));
      smallImgs[3]?.addEventListener('click', () => handleSmallImgClick(3));
    };

    const removeEventListeners = () => {
      smallImgs[0]?.removeEventListener('click', () => handleSmallImgClick(0));
      smallImgs[1]?.removeEventListener('click', () => handleSmallImgClick(1));
      smallImgs[2]?.removeEventListener('click', () => handleSmallImgClick(2));
      smallImgs[3]?.removeEventListener('click', () => handleSmallImgClick(3));
    };

    addEventListeners();

    return () => {
      removeEventListeners();
    };
  }, []); 

  return (
    <>
      <Header />
      <div className="blank-container"></div>
      <BottomBar />
      <div className="custom-small-container custom-single-product">
        {productById.map((productbyid) => (
          <div key={productbyid.product_id} className="custom-row">
            <div className="custom-col-2">
              <img 
                className='ProductDetailsImage' 
                src={`http://13.232.110.226:5000/images/${productbyid.product_image}`} 
                alt="product" 
                width="100%" 
                id="ProductImg" 
              />
            </div>
            <div className="column-xs-12 column-md-5">
              <h1>{productbyid.product_name}</h1>
              <h2>RS.{productbyid.product_price}</h2>
              <div className='quantity-selector'>
                <label htmlFor='quantity'>Quantity:</label>
                <input
                  type='number'
                  id='quantity'
                  name='quantity'
                  min='1'
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
              </div>
              <div className="quantity-product-button">
                {!isAddedToCart ?
                  <button className="custom-btn btn-8" onClick={addToCart}><span>Add To Cart</span></button>
                  :
                  <button className='custom-btn btn-8'><span>&#10004;</span></button>
                }
              </div>
              <h4 className='description-title'>Product Details</h4>
              <div className="product-description">
                <p>{productbyid.product_description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="Related-text-container">
        <div className="related-item-text">
          <h2 className='Related-text'>Related Products</h2>
          <p className='view-more-text'>View more</p>
        </div>
      </div>
      <ProductCardContainer products={productsData} />
      <div className="blank-container"></div>
    </>
  );
}

