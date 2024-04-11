import {React,useState, useEffect} from "react";
import "../css/Phase6.css";
import Plywood from "../../src/assets/HomePageAssets/11060836_47677.jpg";
import Cement from "../assets/HomePageAssets/flat-lay-clay-smudge.jpg";

export default function Phase6() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 769);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="container">
        <h3>Categories</h3>
        <div className="container cateogories_section">
          <div className="product1">
            <div className="image-containers">
              <img className="categories_image" src={Plywood} alt="plywood" />
              <p className="categories_name">Plywood</p>
            </div>
            <div className="image-containers">
              <img className="categories_image" src={Plywood} alt="plywood" />
              <p className="categories_name">Tiles</p>
            </div>
            <div className="image-containers">
              <img className="categories_image" src={Plywood} alt="plywood" />
              <p className="categories_name">Paint</p>
            </div>
            {isMobile? <div className="image-containers">
              <img className="categories_image" src={Plywood} alt="plywood" />
              <p className="categories_name">Cement</p>
            </div>: null }
          </div>
        </div>
      </div>
    </>
  );
}
