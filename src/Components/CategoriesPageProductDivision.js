import React, { useEffect, useRef, useState } from 'react';
import '../css/CategoriesPageProductDivision.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function CategoriesPageProductDivision({ category_names }) {
  const [subCategoryName, setSubCategoryName] = useState([]);
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSubcategoriesOfParticularCategory = async () => {
    try {
      const { data } = await axios.get(`https://free.shapier.in/api/v1/subcategories/category_name/${category_names}`);
      const arrayOfSubcategoryName = data.data;
      setSubCategoryName(arrayOfSubcategoryName.map(subcategory => ({
        subcategory_name: subcategory.subcategory_name,
        subcategory_id: subcategory.subcategory_id
      })));
    } catch (error) {
      console.log(error);
      setError('Failed to fetch subcategories');
    }
  };

  const fetchProductsForSubcategory = async (subcategory_id) => {
    try {
      const { data } = await axios.get(`https://free.shapier.in/api/v1/product/subcategory_id/${subcategory_id}`);
      return data.data;
    } catch (error) {
      console.log(error);
      setError('Failed to fetch products');
      return [];
    }
  };

  useEffect(() => {
    fetchSubcategoriesOfParticularCategory();
  }, [category_names]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productPromises = subCategoryName.map(async (subcategory) => {
        const productsData = await fetchProductsForSubcategory(subcategory.subcategory_id);
        return { subcategory_name: subcategory.subcategory_name, products: productsData };
      });
      const productResults = await Promise.all(productPromises);
      const productsMap = productResults.reduce((acc, curr) => {
        acc[curr.subcategory_name] = curr.products;
        return acc;
      }, {});
      setProducts(productsMap);
      setLoading(false);
    };

    if (subCategoryName.length > 0) {
      fetchProducts();
    }
  }, [subCategoryName]);

  const carouselRef = useRef({});

  const scrollLeft = (subcategory_name) => {
    if (carouselRef.current[subcategory_name]) {
      carouselRef.current[subcategory_name].scrollBy({ left: -150, behavior: 'smooth' });
    }
  };

  const scrollRight = (subcategory_name) => {
    if (carouselRef.current[subcategory_name]) {
      carouselRef.current[subcategory_name].scrollBy({ left: 150, behavior: 'smooth' });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {subCategoryName.map((subcategory) => (
        <div className="ProductDivision" key={subcategory.subcategory_name}>
          <div className="popular-brand-header">
            <h2 className="popular-brand-title">{subcategory.subcategory_name}</h2>
          </div>
          <div className="popular-brand-carousel-container">
            <button onClick={() => scrollLeft(subcategory.subcategory_name)} className="popular-brand-button                    popular-brand-button-left">
              <FaChevronLeft />
            </button>
            <div className="ProductDivision-carousel" ref={(el) => (carouselRef.current[subcategory.subcategory_name] = el)}>
              {products[subcategory.subcategory_name] && products[subcategory.subcategory_name].length > 0 ? (
                products[subcategory.subcategory_name].map((product, index) => (
                  <Link
                    key={index}
                    to={`/details/${product.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => window.scrollTo(0, 0)}
                    className="ProductDivision-brand-card-link"
                  >
                    <div className="ProductDivision-brand-card">
                      <div className="ProductDivision-brand-card-image">
                        <img src={`https://free.shapier.in/images/${product.product_image}`} alt={product.alt} />
                      </div>
                      <p className='ProductDivision-product-name'>{product.product}</p>
                      <p className='ProductDivision-product-MRP'>MRP: {product.product_price}</p>
                      <p className='ProductDivision-product-sale'>Sale Price:</p>
                      <div className="pricing-sec">
                        <p className='ProductDivision-product-price'>RS.{product.sale_price}</p>
                        <p className='ProductDivision-product-end'>{product.per_base}</p>
                      </div>
                      {product.discount === 0 ? null : (
                        <div className="discount-percent">
                          <p className='ProductDivision-product-discount'>UPTO {product.discount} % OFF</p>
                        </div>
                      )}
                      <p className='ProductDivision-product-end' style={{ marginTop: '2px' }}>by {product.vandor_name}</p>
                    </div>
                  </Link>
                ))
              ) : (
                <p>No products available for this subcategory</p>
              )}
            </div>
            <button onClick={() => scrollRight(subcategory.subcategory_name)} className="popular-brand-button popular-brand-button-right">
              <FaChevronRight />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
