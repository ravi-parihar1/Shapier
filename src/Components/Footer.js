import React from "react";
import shapierlogo from "../assets/shapelogo.png";
import '../css/Footer.css';
import { IoLogoInstagram, IoCallOutline } from "react-icons/io5";
import { ImFacebook2 } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { LuMailCheck } from "react-icons/lu";

export default function Footer() {
  return (
    <>
      <section className="FruityFooter-contact-area" id="contact">
        <div className="FruityFooter-container">
          <div className="FruityFooter-row">
            <div className="FruityFooter-col-lg-6 FruityFooter-offset-lg-3">
              <div className="FruityFooter-contact-content FruityFooter-text-center">
                <a href="#"><img src={shapierlogo} height={'60rem'} width={'50rem'} alt="logo" /></a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum </p>
                <div className="FruityFooter-hr"></div>
                <h6><SlLocationPin /> 1120 Lorem ipsum dolor sit amet, KC 179050, Udaipur.</h6>
                <h6><IoCallOutline /> +01 2345 6789 12<span>|</span><IoCallOutline /> +01 2345 6789 12</h6>
                <div className="FruityFooter-contact-social">
                  <ul>
                    <li><a className="FruityFooter-hover-target" href=""><IoLogoInstagram /></a></li>
                    <li><a className="FruityFooter-hover-target" href=""><ImFacebook2 /></a></li>
                    <li><a className="FruityFooter-hover-target" href=""><BsTwitterX /></a></li>
                    <li><a className="FruityFooter-hover-target" href=""><LuMailCheck /></a></li>
                  </ul>
                  <p>Copyright © 2023 All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="FruityFooter-footer">
        
      </footer>
    </>
  );
}
