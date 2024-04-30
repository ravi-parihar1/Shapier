import React, { useEffect } from 'react';
import Header from '../Header';
import '../../css/ProductDetails.css'; // Assuming this contains styles specific to ProductDetails
import Header2 from '../Header2';
import BottomBar from '../BottomBar';
import ProductCardContainer from '../ProductCard';
import productsData from '../product.json';

export default function ProductDetails() {



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
        <div className="custom-row">
          <div className="custom-col-2">
            <img src="https://i.ibb.co/1MydDzN/gallery-1.jpg" alt="" width="100%" id="ProductImg" />

            <div className="custom-small-img-row">
              <div className="custom-small-img-col">
                <img src="https://i.ibb.co/1MydDzN/gallery-1.jpg" alt="" width="100%" className="custom-small-img" />
              </div>
              <div className="custom-small-img-col">
                <img src="https://i.ibb.co/4j34KdX/gallery-2.jpg" alt="" width="100%" className="custom-small-img" />
              </div>
              <div className="custom-small-img-col">
                <img src="https://i.ibb.co/kGhWJ84/gallery-3.jpg" alt="" width="100%" className="custom-small-img" />
              </div>
              <div className="custom-small-img-col">
                <img src="https://i.ibb.co/4j34KdX/gallery-2.jpg" alt="" width="100%" className="custom-small-img" />
              </div>
            </div>
          </div>
          <div class="column-xs-12 column-md-5">
            <h1>Bonsai</h1>
            <h2>RS.19.99</h2>

            <div className="quantity-button">
              <button class="custom-btn btn-8"><span>Add To Cart</span></button>
            </div>

            <h4 className='description-title'>Product Details</h4>
            <div class="description">
              <p>The purposes of bonsai are primarily contemplation for the viewer, and the pleasant exercise of effort and ingenuity for the grower.</p>
              <p>By contrast with other plant cultivation practices, bonsai is not intended for production of food or for medicine. Instead, bonsai practice focuses on long-term cultivation and shaping of one or more small trees growing in a container.</p>
            </div>


            


          </div>
          
        </div>
      </div>

      <div class="Related-text-container">
        <div class="related-item-text">
          <h2 className='Related-text'>Related Products</h2>
          <p className='view-more-text'>View more</p>
        </div>
      
      </div>

      <ProductCardContainer products={productsData}/>  
        

        <div className="blank-container"></div>

    </>
  );
}
