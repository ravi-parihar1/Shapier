import React from 'react'
import ProductCardContainer from './ProductCard'
import productsData from './product.json';

export default function Phase9() {
  return (
    <>
      <div className="p9-container">
        <ProductCardContainer products={productsData}/>
      </div>
    </>
  )
}
