import React, { useState, useEffect } from 'react'
import '../css/Phase2.css'
import arcimg from '../assets/HomePageAssets/2148233793.jpg'
import civil from '../assets/HomePageAssets/14323.jpg'
import vastu from '../assets/HomePageAssets/2150171520.jpg'
import desginer from '../assets/HomePageAssets/images.jpg'
import Phase2OverLayImages from './Phase2OverLayImages'
export default function Phase2() {

  const OverLayImg = [
    { src: civil, alt: "no image to display", title: 'Civil Engineer' },
    { src: arcimg, alt: "no image to display", title: 'Interior Designer' },
    { src: vastu, alt: "no image to display", title: 'Vastu Consultant' },
    { src: vastu, alt: "no image to display", title: 'Vastu Consultant' }

  ];



  const [imageData, setImageData] = useState([
    {
      imageSrc: arcimg, // Replace with your image paths
      altText: 'not working',
      title: 'Architects',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum at quisquam praesentium pariatur sapiente magni ad ullam quia necessitatibus itaque? Quidem ratione unde pariatur obcaecati eveniet deleniti accusamus labore nobis?',
    },
    {
      imageSrc: desginer,
      altText: 'Image 2 Description',
      title: 'Interior Designers',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio molestiae laboriosam veniam iusto illum totam ducimus error saepe temporibus rem commodi, et quos, reiciendis quo dolorem magnam illo autem inventore.',
    },
    {
      imageSrc: civil,
      altText: 'Image 2 Description',
      title: 'Civil  Engineer',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio molestiae laboriosam veniam iusto illum totam ducimus error saepe temporibus rem commodi, et quos, reiciendis quo dolorem magnam illo autem inventore.',
    },
    {
      imageSrc: vastu,
      altText: 'Image 2 Description',
      title: 'Vastu Consultants',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio molestiae laboriosam veniam iusto illum totam ducimus error saepe temporibus rem commodi, et quos, reiciendis quo dolorem magnam illo autem inventore.',
    },
    // Add more image/text objects as needed
  ]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageData.length);
    }, 5000); // Change this to your desired time interval in milliseconds

    return () => clearInterval(intervalId); // Cleanup function for the interval
  }, [imageData.length]); // Run effect only when imageData changes



  return (
    <div>

      <div className="container-phase2 mt-4 mb-4">
        <h2>Comprehensive Hub</h2>
        <div className="image-text-container mt-5">
          <img
            className="phase2-image"
            // src={arcimg}
            src={imageData[currentImageIndex].imageSrc}
            alt={imageData[currentImageIndex].altText}

          />

          {/* Text conatiner code start from her  */}
          <div className="text-container">
            <h4 className='img-name'>{imageData[currentImageIndex].title}</h4>
            <p className="phase2-text">{imageData[currentImageIndex].text}</p>
            
              <button className="see-button">See More</button>
            
          </div>
        </div>

        {/* phase2 lower images code begain with here  */}

        <div className="image-overlay-container">
          {OverLayImg.map((item, index) => (
            <Phase2OverLayImages
              key={index}
              src={item.src}
              alt={item.alt}
              title={item.title}
            />
          ))}
        </div>




      </div>

    </div>
  )
}
