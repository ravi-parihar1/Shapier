import React from 'react';
import { useParams } from 'react-router-dom';
import '../../css/CategoriesPage.css';
import Header from '../Header';
import ImageCarousel from '../ImageCarousel';
import PopularBrands from '../PopularBrands';
import ProductList from '../ProductList';

import CategoriesPageProductDivision from '../CategoriesPageProductDivision';

export default function CategoriesPage() {
  const { category_name } = useParams();
  return (
    <>
      <div className="blank-container"></div>
      <ImageCarousel />
      <div className="container mt-4">
        <Header />

        <PopularBrands />
        {/* <ProductList/> */}
        <CategoriesPageProductDivision category_names={category_name}/>

      </div>
    </>
  );
}
