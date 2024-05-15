import React from "react";
import "../css/Quotation.css";
import house from "../assets/HomePageAssets/house.png";
import { Link } from "react-router-dom";
export default function Quotation() {
  return (
    <>
      <svg className="waves1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1.15"
          d="M0,128L48,117.3C96,107,192,85,288,80C384,75,480,85,576,106.7C672,128,768,160,864,144C960,128,1056,64,1152,53.3C1248,43,1344,85,1392,106.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="quotation_container">
        <div>
          <h3 >Shapier helps you to build and own <br/> a dream house</h3>
          <p>Home building, getting products, is tough and time consuming</p>
          <p>
            Shapier can help you to simplify your journey starting from idea to
            final production 
          </p>
          <Link to='/contact'><button className="custom-btn btn-1">Contact Us</button></Link>
        </div>
        <img src={house} className="image_quotation" />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="waves2">
        <path
          fill="#0099ff"
          fill-opacity="1.15"
          d="M0,128L48,117.3C96,107,192,85,288,80C384,75,480,85,576,106.7C672,128,768,160,864,144C960,128,1056,64,1152,53.3C1248,43,1344,85,1392,106.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
