import { React, useState, useEffect } from "react";
import "../css/Phase6.css";
import Plywood from "../../src/assets/HomePageAssets/11060836_47677.jpg";
import Cement from "../../src/assets/HomePageAssets/flat-lay-clay-smudge.jpg"
import Paint from "../../src/assets/HomePageAssets/paint acc and tools-1710184587115.jpg"
export default function Phase6() {
  return (
    <>
      <div className="container product_categories_container">
        <div className="product_categories_heading">
          <h3>Categories</h3>
        </div>
        <div class="grid-container">
          <div class="item2">
            <img className="img_of_right_side" src={Plywood} />
          </div>
          <div class="item3">
            <img className="img_of_two_img img_of_two_img1" src={Cement}/>
          </div>
          <div class="item4">
            <img className="img_of_two_img img_of_two_img2" src={Cement}/>
          </div>
          <div class="item5">
            <img className="img_of_footer_section" src={Paint}/>
          </div>
        </div>
      </div>
    </>
  );
}
