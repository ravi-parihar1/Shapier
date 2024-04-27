import React from "react";
import '../css/ChooseUs.css'
import w1 from '../assets/HomePageAssets/w1.png'
import w2 from '../assets/HomePageAssets/w2.png'
import w3 from '../assets/HomePageAssets/w3.png'
import w4 from '../assets/HomePageAssets/w4.svg'
import w5 from '../assets/HomePageAssets/w5.svg'

export default function ChooseUs() {
  return (
    <>
      <div className="heading_section_choose_us">
        <h3 className="choose_us_heading">What sets us apart</h3>
        <p>We have everything you need for building homes</p>
      </div>
      <div className="choose_us_inner_container">
        <div className="choose_us_object">
            <img src={w1}/>
            <h4>Online Shoping</h4>
            <p>100% Secure</p>
        </div>
        <div className="choose_us_object">
            <img src={w2}/>
            <h4>Big Savings</h4>
            <p>Save More With Shapier</p>
        </div>
        <div className="choose_us_object">
            <img src={w3}/>
            <h4>Best Customer Care</h4>
            <p>Anytime Available</p>
        </div>
        <div className="choose_us_object">
            <img src={w4}/>
            <h4>Full assurance</h4>
            <p>Original Products</p>
        </div>
        <div className="choose_us_object">
            <img src={w5}/>
            <h4>Saves Time</h4>
            <p>Streamlines time</p>
        </div>
      </div>
    </>
  );
}
