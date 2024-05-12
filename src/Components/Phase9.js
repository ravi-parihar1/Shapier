import React from 'react'
import ProductCard from './ProductCard'
import productsData from './product.json';

export default function Phase9() {

  return (
    <>
      <div className="p9-container">
            <ProductCard product={productsData} />
      </div>
    </>
  )
}
