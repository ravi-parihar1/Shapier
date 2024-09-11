import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

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

const ImageCarousel = ({ category_name }) => {
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const { data } = await axios.get(`https://free.shapier.in/api/v1/banner/${category_name}`);
        const arrayOfBanner = data.data;
        console.log('Fetched banners:', arrayOfBanner);  // Log the fetched data
        setImages(arrayOfBanner.map((banner) => banner.banner_image));
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };

    fetchBanner();
  }, [category_name]);

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
            <img className="CategoriesSlider-image" src={`https://free.shapier.in/images/${url}`} alt={`Slide ${index + 1}`} onError={(e) => { e.target.onerror = null; e.target.src="defaultImage.png"; }}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
  