import React from "react";
import "../css/Phase7.css";
import { AiOutlineHeart } from "react-icons/ai";


export default function Phase7({ filepath, heading }) {
  const data = filepath;
  return (
    <>
      <div className="Tradning_product_page" >
        <div className="d-flex">
          <h3 className="heading_name">{heading}</h3>
          <p className="Tanding_product_see_more">See More...</p>
        </div>
        <div className="container Trending_product_container" style={{ borderRadius: "15px 15px 0 0" }} id="">
          {data.map((product) => (
            <div key={product.id} className="tranding_page_Card" id="">
              <div className="tranding_product_buy_button">
                <h5 className="buy-now">Buy Now ►</h5>
              </div>
              <img
                className="trending_product_img"
                src={product.image}
                alt={product.name}
              />
              <div className="tranding_product_text_box">
                <p className="tranding_page_product_name">
                  {product.name.length > 10
                    ? `${product.name.slice(0, 5)}...`
                    : product.name}
                </p>

              </div>

{/* price sections start from here  */}
              <div className="price_section">

                <div className="tranding_product_text_box_2">
                  <p className="tranding_page_product_price">Price</p>
                </div>

                <div className="tranding_product_text_box_3">
                  <p className="tranding_page_product_price">Rs.380</p>
                </div>

              </div>

              
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
