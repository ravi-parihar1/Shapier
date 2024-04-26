import React, { useState, useEffect } from "react";
import Header from '../Header';
import '../../css/Store.scss'; // Import your SCSS file
import '../../css/store.css';

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
        <h2>Shop by Pet</h2>
        <ul className="shop-pets">
            <li className="card-large card-light" id="sup-service">
                <div className="card-image">
                    <img src="https://ouch-cdn2.icons8.com/5ccPOQq69UKQcbmXfjvOScfFc9NXKG0Xu6DPNQ8b0f8/rs:fit:368:247/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTEw/LzFlODdiYzcyLTBl/OWEtNDFlNS05N2Ey/LTMzYTA4MDQ5MWU1/OC5wbmc.png" alt="Dog" />
                </div>
                <ul>
                    <li>Dogs</li>
                    <li><a href="#">Food &amp; Treats</a></li>
                    <li><a href="#">Toys</a></li>
                    <li><a href="#">Beds &amp; Furniture</a></li>
                    <li><a href="#">Outdoor Supplies</a></li>
                    <li><a href="#">Clothing</a></li>
                    <button className="store-banner-button btn-outline-light-cart">
                        Shop All
                        {/* <span className="material-symbols-outlined">arrow_forward</span> */}
                    </button>
                </ul>
            </li>
            {/* Similar cards for Cats, Birds, Fish... */}

            <li className="card-large card-light" id="sup-fish">
                <div className="card-image">
                    <img src="https://ouch-cdn2.icons8.com/5ccPOQq69UKQcbmXfjvOScfFc9NXKG0Xu6DPNQ8b0f8/rs:fit:368:247/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTEw/LzFlODdiYzcyLTBl/OWEtNDFlNS05N2Ey/LTMzYTA4MDQ5MWU1/OC5wbmc.png" alt="Dog" />
                </div>
                <ul>
                    <li>Dogs</li>
                    <li><a href="#">Food &amp; Treats</a></li>
                    <li><a href="#">Toys</a></li>
                    <li><a href="#">Beds &amp; Furniture</a></li>
                    <li><a href="#">Outdoor Supplies</a></li>
                    <li><a href="#">Clothing</a></li>
                    <button className="store-banner-button btn-outline-light-cart">
                        Shop All
                        {/* <span className="material-symbols-outlined">arrow_forward</span> */}
                    </button>
                </ul>
            </li>


            <li className="card-large card-light" id="sup-cat">
                <div className="card-image">
                    <img src="https://ouch-cdn2.icons8.com/5ccPOQq69UKQcbmXfjvOScfFc9NXKG0Xu6DPNQ8b0f8/rs:fit:368:247/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTEw/LzFlODdiYzcyLTBl/OWEtNDFlNS05N2Ey/LTMzYTA4MDQ5MWU1/OC5wbmc.png" alt="Dog" />
                </div>
                <ul>
                    <li>Dogs</li>
                    <li><a href="#">Food &amp; Treats</a></li>
                    <li><a href="#">Toys</a></li>
                    <li><a href="#">Beds &amp; Furniture</a></li>
                    <li><a href="#">Outdoor Supplies</a></li>
                    <li><a href="#">Clothing</a></li>
                    <button className="store-banner-button btn-outline-light-cart">
                        Shop All
                        {/* <span className="material-symbols-outlined">arrow_forward</span> */}
                    </button>
                </ul>
            </li>
        </ul>
    </section>
);

const ServicesSection = () => (
    <section>
        <h2>Our Services</h2>
        <ul className="services">
            <li className="card-large card-dark card-wide" id="serv-groom">
                <div className="card-image">
                    <img src="https://ouch-cdn2.icons8.com/T11rfGmMKgcStJyAFKNgtOfE79cadabx0DVMnvzA9Pk/rs:fit:368:313/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDQx/LzFlYWU4MWY3LWQ1/ZjYtNDM2Ny1hZjM5/LWVmNTFmMGM5Njk4/MS5wbmc.png" alt="Dog Grooming" />
                </div>
                <ul>
                    <li>Dog Grooming <span className="subtitle">Tail-wagging transformations are our specialty.</span></li>
                    <li><a href="#">Coat Care</a><span>$80</span></li>
                    <li><a href="#">Nail Care</a><span>$16</span></li>
                    <li><a href="#">Doggie Deluxe Spa Day</a><span>$160</span></li>
                    <button className="store-banner-button btn-outline-dark-cart">
                        {/* <span className="material-symbols-outlined">calendar_month</span> */}
                        Book Now
                    </button>
                </ul>
            </li>
            {/* Similar card for Dog Boarding */}
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
            <ServicesSection />

        </>
    );
}
