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
                <p>Step into a world where innovation meets construction , and together , we redefine the landscape of possibility . We're here to transform your vision into concrete reality. How can we help bring your boldest architectural dreams to life   </p>
                <div className="FruityFooter-hr"></div>
                <h6><SlLocationPin />320 third floor,Samradhhi complex , Savina , Udaipur , 313001.</h6>
                <h6><IoCallOutline />+91 9610357494<span>|</span><IoCallOutline /> +91 9265478439</h6>
                <div className="FruityFooter-contact-social">
                  <ul>
                    <li><a className="FruityFooter-hover-target" href="https://www.instagram.com/shapier.in/"><IoLogoInstagram /></a></li>
                    <li><a className="FruityFooter-hover-target" href="https://www.facebook.com/shapier.in/"><ImFacebook2 /></a></li>
                    {/* <li><a className="FruityFooter-hover-target" href=""><BsTwitterX /></a></li> */}
                    {/* <li><a className="FruityFooter-hover-target" href="Anil.kalal@shapier.in"><LuMailCheck /></a></li> */}
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
