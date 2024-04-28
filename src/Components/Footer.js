import React from "react";
import shapierlogo from "../assets/shapelogo.png";
import '../css/Footer.css';
import { BsTwitterX } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io5";

export default function Footer() {
  return (
    <footer class="site-footer">
      <div class="footer-container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">Shapier Digital is a platform that connects buyers and sellers of construction and building material products and services. It was launched in August 2020 by Neel Kalal and has over 10,000 users and over $1 million in revenue. Shapier Digital offers general contractors, specialized plumbers, certified electricians, experienced landscapers, HVAC technicians, and skilled carpenters.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">General Contractors</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">Specialized Plumber</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">Certified Electricians</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Experienced Landscrapers</a></li>
              <li><a href="http://scanfcode.com/category/android/">HVAC Technician</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Skilled Carpainters</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="footer-container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
              <a href="#">Shapier.in</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><ImFacebook2 /></a></li>
              <li><a class="twitter" href="#"><BsTwitterX /></a></li>
              <li><a class="dribbble" href="#"><IoLogoInstagram /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
