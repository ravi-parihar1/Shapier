import React, { useState,useEffect } from "react";
import Header from '../Header';
import '../../css/Store.scss'; // Import your SCSS file
import '../../css/store.css';




export default function Store() {
    const [activeIndex, setActiveIndex] = useState(0);

    const carouselItems = [
        {
            id: 1,
            image: 'https://images.adsttc.com/media/images/5efe/1f7f/b357/6540/5400/01d7/newsletter/archdaily-houses-104.jpg?1593712501',
            name: 'Men Fashion',
            description: 'Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam',
            price: 'Rs.50'
        },
        {
            id: 2,
            image: 'https://images.adsttc.com/media/images/6037/0ec7/f91c/8122/3000/03d3/large_jpg/_FI_2_EXTERIOR_2.jpg?1614220985',
            name: 'Women Fashion',
            description: 'Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam',
            price: 'Rs.25'
        },
        {
            id: 3,
            image: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2016/2/16/2/Orig-Nils-Finne_window-styles-contemporary-exterior.jpg.rend.hgtvcom.616.462.suffix/1455654082188.jpeg',
            name: 'Kids Fashion',
            description: 'Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam',
            price: 'Rs.80'
        }
    ];

    

    const handleSlideChange = (selectedIndex) => {
        setActiveIndex(selectedIndex);
      };
    
      // Initialize carousel on component mount (using useEffect)
      

    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-lg-8">
                        
                            
                            <div className="store-carousel-inner">
                                {carouselItems.map((item, index) => (
                                    <div key={index} className={`carousel-item position-relative ${index === activeIndex ? 'active' : ''}`} style={{ height: '430px' }}>
                                        <img className="carousel-image" src={item.image} alt={`Slide ${index + 1}`} style={{ objectFit: 'cover' }} />
                                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                            <div className="carousel-content p-3" style={{ maxWidth: '700px' }}>
                                                <h1 className="store-carousel-title text-white mb-3 animate__animated animate__bounceInDown">{item.name}</h1>
                                                <p className="store-carousel-description mx-md-5 px-5 animate__animated animate__fadeInUp">{item.description}</p>
                                                <p className="store-carousel-price text-white mb-0">{item.price}</p>
                                                <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        
                    </div>

                    <div className="col-lg-4">
                        {/* Static Offer Section */}
                        <div className="custom-product-offer" style={{ height: '200px' }}>
                            <img className="offer-image img-fluid" src="https://images.unsplash.com/flagged/photo-1600002368144-444430d3f3ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Offer 1" />
                            <div className="custom-offer-text">
                                <h6 className="offer-text-uppercase text-white">Save 20%</h6>
                                <h3 className="offer-title text-white mb-3">Special Offer</h3>
                                <a href="#" className="btn btn-outline-warning">Shop Now</a>
                            </div>
                        </div>

                        <div className="custom-product-offer " style={{ height: '200px' }}>
                            <img className="offer-image img-fluid" src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2016/2/16/2/Orig-Nils-Finne_window-styles-contemporary-exterior.jpg.rend.hgtvcom.616.462.suffix/1455654082188.jpeg" alt="Offer 1" />
                            <div className="custom-offer-text">
                                <h6 className="offer-text-uppercase text-white">Save 20%</h6>
                                <h3 className="offer-title text-white mb-3">Special Offer</h3>
                                <a href="#" className="btn btn-outline-warning">Shop Now</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
