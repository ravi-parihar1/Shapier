// ImageCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  'https://cdn-media.buildersmart.in/media/bannerslider/bannerslider/cement_tmt_price_drop...jpg',
  'https://cdn-media.buildersmart.in/media/bannerslider/bannerslider/CE-sell-online.jpg',
  'https://cdn-media.buildersmart.in/media/bannerslider/bannerslider/Lowest_Prices_web.jpg',
];

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '10px' }}
      onClick={onClick}
    >
      &#9654; {/* Right arrow symbol */}
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: '10px', zIndex: 1 }}
      onClick={onClick}
    >
      &#9664; {/* Left arrow symbol */}
    </div>
  );
};



const ImageCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="CategoriesSlider-container">
      <Slider {...settings}>
        {images.map((url, index) => (
          <div key={index}>
            <img className="CategoriesSlider-image" src={url} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
