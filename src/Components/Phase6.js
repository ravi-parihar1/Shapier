import React from 'react'
import '../css/Phase6.css'
import fisrt from '../assets/HomePageAssets/1.svg'
import sec from '../assets/HomePageAssets/2.svg'
import third from '../assets/HomePageAssets/3.svg'


export default function Phase6() {
  const buttonsData = [
    { title: "Service", imageSrc: fisrt },
    { title: "Shape", imageSrc: sec },
    { title: "Store", imageSrc: third },
  ];


  return (
    <div className="phase6-container">
      {buttonsData.map((button, index) => (
        <ServiceButton key={index} title={button.title} imageSrc={button.imageSrc} />
      ))}
    </div>
  )
}

function ServiceButton({ title, imageSrc }) {
  return (
    <div className="service-button">
      <img src={imageSrc} alt={title} />
      <span className='cat-name'>{title}</span>
    </div>
  );
}