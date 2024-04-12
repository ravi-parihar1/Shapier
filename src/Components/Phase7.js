import React from "react";
import "../css/Phase7.css";
export default function Phase7({filepath,heading}) {
  const data = filepath;
  return (
    <>
      <div className="Tradning_product_page" >
        <div className="d-flex">
        <h3 className="heading_name">{heading}</h3>
        <p className="Tanding_product_see_more">See More...</p>
        </div>
        <div className="container Trending_product_container" style={{borderRadius: "15px 15px 0 0"}} id="">
          {data.map((product) => (
            <div key={product.id} className="tranding_page_Card" id="">
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
                <p className="tranding_page_product_price">$32</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
