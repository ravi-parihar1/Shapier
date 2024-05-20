import React, { useState } from 'react';
import '../css/Phase2.css';

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Phase2 = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      backgroundImage: "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      title: "Lossless Youths",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim."
    },
    {
      id: 2,
      backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      title: "Estrange Bond",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim."
    },
    {
      id: 3,
      backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      title: "The Gate Keeper",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim."
    },
    {
      id: 4,
      backgroundImage: "url('https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      title: "Last Trace Of Us",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim."
    },
    {
      id: 5,
      backgroundImage: "url('https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      title: "Urban Decay",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim."
    },
    {
      id: 6,
      backgroundImage: "url('https://images.unsplash.com/photo-1703162977778-40a3f90a84e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      title: "The Migration",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim."
    },
  ]);

  const prevSlide = () => {
    setItems((prevItems) => {
      const lastItem = prevItems[prevItems.length - 1];
      return [lastItem, ...prevItems.slice(0, -1)];
    });
  };

  const nextSlide = () => {
    setItems((prevItems) => {
      const [firstItem, ...rest] = prevItems;
      return [...rest, firstItem];
    });
  };

  return (
    <div className='BodyPhase2'>
      <main className="mainPhase2">
        <ul className='sliderPhase2'>
          {items.map((item, index) => (
            <li
              key={item.id} // Use unique id here
              className={`itemPhase2`}
              style={{ backgroundImage: item.backgroundImage }}
            >
              <div className='contentPhase2'>
                <h2 className='titlePhase2'>{item.title}</h2>
                <p className='descriptionPhase2'>{item.description}</p>
                <button className='buttonPhase2'>Read More</button>
              </div>
            </li>
          ))}
        </ul>
        <nav className='navPhase2'>
          <div className='Phase2arrowButton' onClick={prevSlide}><IoIosArrowBack /></div>
          <div className='Phase2arrowButton' onClick={nextSlide}><IoIosArrowForward /></div>
        </nav>
      </main>
    </div>
  );
};

export default Phase2;
