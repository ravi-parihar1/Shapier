import React, { useState, useEffect } from "react";
import Header from '../Header';
import '../../css/Store.css';
import ProductCardContainer from '../ProductCard'; // Import ProductCardContainer component
import productsData from '../product.json';

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

const PetShopSection = () => (
    <section>
        <h2>Shop by Categories</h2>
        <ul className="shop-pets">
            <li className="card-large card-light" id="sup-service">
                <div className="card-image">
                    <img src="https://buildpro.store/cdn/shop/files/New_Project_7817e80f-dc56-4ffe-9394-9935ac659518.png?v=1672258867" alt="Basin Mixer" />
                </div>
                <ul>
                    <li>Basin Mixer</li>
                    
                    <button className="store-banner-button btn-outline-light-cart">
                        Shop All
                        {/* <span className="material-symbols-outlined">arrow_forward</span> */}
                    </button>
                </ul>
            </li>
            {/* Similar cards for Cats, Birds, Fish... */}

            <li className="card-large card-light" id="sup-fish">
                <div className="card-image">
                    <img src="https://buildpro.store/cdn/shop/files/hand-drier.png?v=1675438593" alt="Dog" />
                </div>
                <ul>
                    <li>Hand Drier</li>
                    
                    <button className="store-banner-button btn-outline-light-cart">
                        Shop All
                        {/* <span className="material-symbols-outlined">arrow_forward</span> */}
                    </button>
                </ul>
            </li>


            <li className="card-large card-light" id="sup-cat">
                <div className="card-image">
                    <img src="https://buildpro.store/cdn/shop/files/image_38_2.png?v=1662206734" alt="Dog" />
                </div>
                <ul>
                    <li>Bath Tub</li>
                    
                    <button className="store-banner-button btn-outline-light-cart">
                        Shop All
                        {/* <span className="material-symbols-outlined">arrow_forward</span> */}
                    </button>
                </ul>
            </li>


            <li className="card-large card-light" id="sup-stop">
                <div className="card-image">
                    <img src="https://buildpro.store/cdn/shop/files/image_39.png?v=1662206733" alt="Dog" />
                </div>
                <ul>
                    <li>Stop Cock</li>
                    
                    <button className="store-banner-button btn-outline-light-cart">
                        Shop All
                        {/* <span className="material-symbols-outlined">arrow_forward</span> */}
                    </button>
                </ul>
            </li>


            
            <li className="card-large card-light" id="sup-sop">
                <div className="card-image">
                    <img src="https://buildpro.store/cdn/shop/files/image_38_3.png?v=1662206733" alt="Dog" />
                </div>
                <ul>
                    <li>Soap Dispenser</li>
                    
                    <button className="store-banner-button btn-outline-light-cart">
                        Shop All
                        {/* <span className="material-symbols-outlined">arrow_forward</span> */}
                    </button>
                </ul>
            </li>


            <li className="card-large card-light" id="sup-heat">
                <div className="card-image">
                    <img src="https://buildpro.store/cdn/shop/files/image_38_4.png?v=1662206733" alt="Dog" />
                </div>
                <ul>
                    <li>Health Faucet</li>
                    
                    <button className="store-banner-button btn-outline-light-cart">
                        Shop All
                        {/* <span className="material-symbols-outlined">arrow_forward</span> */}
                    </button>
                </ul>
            </li>

            <li className="card-large card-light" id="sup-at">
                <div className="card-image">
                    <img src="https://buildpro.store/cdn/shop/files/image_38_5.png?v=1662206733" alt="Dog" />
                </div>
                <ul>
                    <li>Shower Set</li>
                    
                    <button className="store-banner-button btn-outline-light-cart">
                        Shop All
                        {/* <span className="material-symbols-outlined">arrow_forward</span> */}
                    </button>
                </ul>
            </li>

            <li className="card-large card-light" id="sup-cat">
                <div className="card-image">
                    <img src="https://buildpro.store/cdn/shop/files/image_39_1.png?v=1662206733" alt="Dog" />
                </div>
                <ul>
                    <li>Stop Cock</li>
                    
                    <button className="store-banner-button btn-outline-light-cart">
                        Shop All
                        {/* <span className="material-symbols-outlined">arrow_forward</span> */}
                    </button>
                </ul>
            </li>
            

            
        </ul>
    </section>
);

// const ServicesSection = () => (
//     <section>
//         <h2>Our Services</h2>
//         <ul className="services">
//             <li className="card-large card-dark card-wide" id="serv-groom">
//                 <div className="card-image">
//                     <img src="https://ouch-cdn2.icons8.com/T11rfGmMKgcStJyAFKNgtOfE79cadabx0DVMnvzA9Pk/rs:fit:368:313/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDQx/LzFlYWU4MWY3LWQ1/ZjYtNDM2Ny1hZjM5/LWVmNTFmMGM5Njk4/MS5wbmc.png" alt="Dog Grooming" />
//                 </div>
//                 <ul>
//                     <li>Dog Grooming <span className="subtitle">Tail-wagging transformations are our specialty.</span></li>
//                     <li><a href="#">Coat Care</a><span>$80</span></li>
//                     <li><a href="#">Nail Care</a><span>$16</span></li>
//                     <li><a href="#">Doggie Deluxe Spa Day</a><span>$160</span></li>
//                     <button className="store-banner-button btn-outline-dark-cart">
//                         {/* <span className="material-symbols-outlined">calendar_month</span> */}
//                         Book Now
//                     </button>
//                 </ul>
//             </li>
//             {/* Similar card for Dog Boarding */}

            
//         </ul>
//     </section>
// );


const PlumbingSection = ()=>(
    <section>
        <h2>Plumbing & Sanitary</h2>
        <ul className="shop-pets">
            <li className="card-large card-light" id="sup-plumbing">
                <div className="card-image">
                    <img src="https://buildpro.store/cdn/shop/files/image_38_2.png?v=1662206734" alt="Dog" />
                </div>
                <ul>
                    <li>Bath Tub</li>
                    
                    <button className="store-banner-button btn-outline-light-cart">
                        Shop All
                        {/* <span className="material-symbols-outlined">arrow_forward</span> */}
                    </button>
                </ul>
            </li>

            <li className="card-large card-light" id="sup-plumbing">
                <div className="card-image">
                    <img src="https://buildpro.store/cdn/shop/files/image_38_2.png?v=1662206734" alt="Dog" />
                </div>
                <ul>
                    <li>Bath Tub</li>
                    
                    <button className="store-banner-button btn-outline-light-cart">
                        Shop All
                        {/* <span className="material-symbols-outlined">arrow_forward</span> */}
                    </button>
                </ul>
            </li>

            <li className="card-large card-light" id="sup-plumbing">
                <div className="card-image">
                    <img src="https://buildpro.store/cdn/shop/files/image_38_2.png?v=1662206734" alt="Dog" />
                </div>
                <ul>
                    <li>Bath Tub</li>
                    
                    <button className="store-banner-button btn-outline-light-cart">
                        Shop All
                        {/* <span className="material-symbols-outlined">arrow_forward</span> */}
                    </button>
                </ul>
            </li>

            <li className="card-large card-light" id="sup-plumbing">
                <div className="card-image">
                    <img src="https://buildpro.store/cdn/shop/files/image_38_2.png?v=1662206734" alt="Dog" />
                </div>
                <ul>
                    <li>Bath Tub</li>
                    
                    <button className="store-banner-button btn-outline-light-cart">
                        Shop All
                        {/* <span className="material-symbols-outlined">arrow_forward</span> */}
                    </button>
                </ul>
            </li>
        </ul>
    </section>
);


export default function Store() {


    // Initialize carousel on component mount (using useEffect)


    return (
        <>
            <Header />
            <HeroSection/>
            <PetShopSection />
            <PlumbingSection/>
            
            <ProductCardContainer products={productsData} />
            

        </>
    );
}
