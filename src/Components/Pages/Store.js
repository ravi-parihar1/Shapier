import React, { useState, useEffect } from "react";
import Header from '../Header';
import '../../css/Store.css';
import ProductCardContainer from '../ProductCard'; // Import ProductCardContainer component
import productsData from '../product.json';
import Footer from "../Footer";
import CategoriesData from '../Categories.json';
import BottomBar from "../BottomBar";
import Header2 from "../Header2";

const HeroSection = () => (
    <section className="hero">
        <h1>Your One-Stop Shop for Every Home making Needs!</h1>
        <div className="btn-group">
            <button className="store-banner-button btn-outline-light-cart">
                {/* <span className="material-symbols-outlined">shopping_cart</span> */}
                Shop All Products
            </button>
            <button className="store-banner-button btn-outline-dark-cart">
                {/* <span className="material-symbols-outlined">calendar_month</span> */}
                Book a Service
            </button>
        </div>
    </section>
);

// const PetShopSection = () => (
//     <section>
//         <h2>Shop by Categories</h2>
//         <ul className="shop-pets">
//             <li className="card-large card-light" id="sup-service">
//                 <div className="card-image">
//                     <img src="https://buildpro.store/cdn/shop/files/New_Project_7817e80f-dc56-4ffe-9394-9935ac659518.png?v=1672258867" alt="Basin Mixer" />
//                 </div>
//                 <ul>
//                     <li>Basin Mixer</li>
                    
//                     <button className="store-banner-button btn-outline-light-cart">
//                         Shop All
//                         {/* <span className="material-symbols-outlined">arrow_forward</span> */}
//                     </button>
//                 </ul>
//             </li>
//             {/* Similar cards for Cats, Birds, Fish... */}

//             <li className="card-large card-light" id="sup-fish">
//                 <div className="card-image">
//                     <img src="https://buildpro.store/cdn/shop/files/hand-drier.png?v=1675438593" alt="Dog" />
//                 </div>
//                 <ul>
//                     <li>Hand Drier</li>
                    
//                     <button className="store-banner-button btn-outline-light-cart">
//                         Shop All
//                         {/* <span className="material-symbols-outlined">arrow_forward</span> */}
//                     </button>
//                 </ul>
//             </li>


//             <li className="card-large card-light" id="sup-cat">
//                 <div className="card-image">
//                     <img src="https://buildpro.store/cdn/shop/files/image_38_2.png?v=1662206734" alt="Dog" />
//                 </div>
//                 <ul>
//                     <li>Bath Tub</li>
                    
//                     <button className="store-banner-button btn-outline-light-cart">
//                         Shop All
//                         {/* <span className="material-symbols-outlined">arrow_forward</span> */}
//                     </button>
//                 </ul>
//             </li>


//             <li className="card-large card-light" id="sup-stop">
//                 <div className="card-image">
//                     <img src="https://buildpro.store/cdn/shop/files/image_39.png?v=1662206733" alt="Dog" />
//                 </div>
//                 <ul>
//                     <li>Stop Cock</li>
                    
//                     <button className="store-banner-button btn-outline-light-cart">
//                         Shop All
//                         {/* <span className="material-symbols-outlined">arrow_forward</span> */}
//                     </button>
//                 </ul>
//             </li>


            
//             <li className="card-large card-light" id="sup-sop">
//                 <div className="card-image">
//                     <img src="https://buildpro.store/cdn/shop/files/image_38_3.png?v=1662206733" alt="Dog" />
//                 </div>
//                 <ul>
//                     <li>Soap Dispenser</li>
                    
//                     <button className="store-banner-button btn-outline-light-cart">
//                         Shop All
//                         {/* <span className="material-symbols-outlined">arrow_forward</span> */}
//                     </button>
//                 </ul>
//             </li>


//             <li className="card-large card-light" id="sup-heat">
//                 <div className="card-image">
//                     <img src="https://buildpro.store/cdn/shop/files/image_38_4.png?v=1662206733" alt="Dog" />
//                 </div>
//                 <ul>
//                     <li>Health Faucet</li>
                    
//                     <button className="store-banner-button btn-outline-light-cart">
//                         Shop All
//                         {/* <span className="material-symbols-outlined">arrow_forward</span> */}
//                     </button>
//                 </ul>
//             </li>

//             <li className="card-large card-light" id="sup-at">
//                 <div className="card-image">
//                     <img src="https://buildpro.store/cdn/shop/files/image_38_5.png?v=1662206733" alt="Dog" />
//                 </div>
//                 <ul>
//                     <li>Shower Set</li>
                    
//                     <button className="store-banner-button btn-outline-light-cart">
//                         Shop All
//                         {/* <span className="material-symbols-outlined">arrow_forward</span> */}
//                     </button>
//                 </ul>
//             </li>

//             <li className="card-large card-light" id="sup-cat">
//                 <div className="card-image">
//                     <img src="https://buildpro.store/cdn/shop/files/image_39_1.png?v=1662206733" alt="Dog" />
//                 </div>
//                 <ul>
//                     <li>Stop Cock</li>
                    
//                     <button className="store-banner-button btn-outline-light-cart">
//                         Shop All
//                         {/* <span className="material-symbols-outlined">arrow_forward</span> */}
//                     </button>
//                 </ul>
//             </li>
            

            
//         </ul>
//     </section>
// );

// const PlumbingSection = ()=>(
//     <section>
//         <h2>Plumbing & Sanitary</h2>
//         <ul className="shop-pets">
//             <li className="card-large card-light" id="sup-plumbing">
//                 <div className="card-image">
//                     <img src="https://buildpro.store/cdn/shop/files/image_38_2.png?v=1662206734" alt="Dog" />
//                 </div>
//                 <ul>
//                     <li>Bath Tub</li>
                    
//                     <button className="store-banner-button btn-outline-light-cart">
//                         Shop All
//                         {/* <span className="material-symbols-outlined">arrow_forward</span> */}
//                     </button>
//                 </ul>
//             </li>

//             <li className="card-large card-light" id="sup-plumbing">
//                 <div className="card-image">
//                     <img src="https://buildpro.store/cdn/shop/files/image_38_2.png?v=1662206734" alt="Dog" />
//                 </div>
//                 <ul>
//                     <li>Bath Tub</li>
                    
//                     <button className="store-banner-button btn-outline-light-cart">
//                         Shop All
//                         {/* <span className="material-symbols-outlined">arrow_forward</span> */}
//                     </button>
//                 </ul>
//             </li>

//             <li className="card-large card-light" id="sup-plumbing">
//                 <div className="card-image">
//                     <img src="https://buildpro.store/cdn/shop/files/image_38_2.png?v=1662206734" alt="Dog" />
//                 </div>
//                 <ul>
//                     <li>Bath Tub</li>
                    
//                     <button className="store-banner-button btn-outline-light-cart">
//                         Shop All
//                         {/* <span className="material-symbols-outlined">arrow_forward</span> */}
//                     </button>
//                 </ul>
//             </li>

//             <li className="card-large card-light" id="sup-plumbing">
//                 <div className="card-image">
//                     <img src="https://buildpro.store/cdn/shop/files/image_38_2.png?v=1662206734" alt="Dog" />
//                 </div>
//                 <ul>
//                     <li>Bath Tub</li>
                    
//                     <button className="store-banner-button btn-outline-light-cart">
//                         Shop All
//                         {/* <span className="material-symbols-outlined">arrow_forward</span> */}
//                     </button>
//                 </ul>
//             </li>
//         </ul>
//     </section>
// );


export default function Store() {


    // Initialize carousel on component mount (using useEffect)
    const [productFilter, setProductFilter] = useState([]);

    const handleFilter = (category_name)=>{
        if(category_name === "All"){
            setProductFilter(productsData);
        }
        else{
            const filteredProducts = productsData.filter(products => products.category_name === category_name)
            setProductFilter(filteredProducts)
        }
    }

    return (
        <>
            <Header2 />
            {/* <div className="blank-container"></div> */}
            <BottomBar/>
            <HeroSection/>
            {/* <PetShopSection /> */}
            {/* <PlumbingSection/> */}
            <div className="btn_animator_container">
            <button class="custom-btn btn-8" onClick={() =>handleFilter("All")}><span>All</span></button>
            {CategoriesData.map(products =>{
               return <button class="custom-btn btn-8" onClick={()=> handleFilter(products.category_name)}><span>{products.category_name}</span></button>
            })}
            </div>
            <ProductCardContainer products={productFilter.length > 0 ? productFilter : productsData} />
            
            <Footer/>
            

        </>
    );
}
