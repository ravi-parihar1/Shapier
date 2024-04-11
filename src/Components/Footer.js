import React from "react";
import shapierlogo from "../assets/shapelogo.png";
import '../css/Footer.css';
export default function Footer() {
  return (
    <div>
      <footer class="text-center text-lg-start bg-dark text-white ">
        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mt-xl-3 text-md-end mx-xl-auto mb-4" id="logo_and_company">
                <img src={shapierlogo} height={150} width={150} />
                <h4 class="mb-4 mt-3 font-weight-bold ">Company</h4>
                <p>About Us</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
              </div>
              <div class="col-md-2 col-lg-2  col-xl-2 mt-5 mb-4 text-end" id="social_link_and_customer  " style={{marginRight: "20vh"}}>
                <div class="social_link_container text-center">
                  <h4 className="mb-2 mt-3 font-weight-bold">Social Link</h4>
                  <div className="d-flex mx-4   ">
                    <h3 className="mx-2">ins</h3>
                    <h3>fac</h3>
                  </div>
                </div>

                <h4 class="mb-4  font-weight-bold" id="For_customers" >For Customers</h4>
                <p className="footer_customers">
                  <a href="#!" class="text-reset" style={{textDecoration:"none"}}>
                    Categories Near You
                  </a>
                </p>
                <p className="footer_customers">
                  <a href="#!" class="text-reset" style={{textDecoration:"none"}}>
                    Blog
                  </a>
                </p>
                <p className="footer_customers">
                  <a href="#!" class="text-reset" style={{textDecoration:"none"}}>
                    Contact Us
                  </a>
                </p>
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-4 mb-4 text-end">
                <h4 class="text-capitalize mb-2 font-weight-bold" id="for_partners" >For partners</h4>
                <p id="resgister_yourself">
                  <a href="#!" class="text-reset" style={{textDecoration:"none"}}>
                    Resgister yourself as partner
                  </a>
                </p>
              </div>
              <div class="col-md-4 col-lg-3 col-xl-3 mx-xl-auto mb-md-0 mb-4" id="contact" >
                <h4 class="text-capitalize mb-2 font-weight-bold">Contact</h4>
                <p>
                  <i class="fas fa-home me-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i class="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i class="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          class="text-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0)" }}
        >
          © Copyright 2024 Shapier Company. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
