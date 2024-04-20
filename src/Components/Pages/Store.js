import React from 'react';
import Header from '../Header';
import '../../css/Store.css';

export default function Store() {
  return (
    <>
      <Header/>
      <div className="store-container">
        <h1 className='store-heading'>Shop</h1>
      </div>

      <div className="product-store">

        {/* filter side starts form here  */}
        <div className="filter-side">
            <h2 className="filter-categories">
              Filter By Categories
            </h2>
        </div>

        {/* product side starts form here */}
        <div className="product-side">

        </div>

      </div>
    </>
  )
}
