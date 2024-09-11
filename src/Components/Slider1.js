import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Slider1() {
  const [HomePageBanner, setHomePageBanner] = useState([]);

  const FetchHomePageBanner = async () => {
    const { data } = await axios.get(`https://free.shapier.in/api/v1/banners_for_banner/home`);
    const arrayOfHomeBanner = data.data;
    console.log(arrayOfHomeBanner);
    setHomePageBanner(arrayOfHomeBanner);
  };

  useEffect(() => {
    FetchHomePageBanner();
  }, []);

  return (
    <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {HomePageBanner.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : ''}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {HomePageBanner.map((pro, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={`https://free.shapier.in/images/${pro.banner_image}`} className="d-block w-100" alt="..." />
          </div>
        ))}
      </div>
      {/* Uncomment the buttons if you want to have previous and next controls */}
      {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button> */}
    </div>
  );
}
