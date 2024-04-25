import React, { useState, useEffect } from "react";
import Header from '../Header';
import '../../css/Store.css';
import TopProduct from "../../TopRatedProduct.json";





export default function Store() {
    const [displayedProducts, setDisplayedProducts] = useState([]);

    // useEffect to set displayedProducts when component mounts
    useEffect(() => {
        // Set displayedProducts to the array of products from TopProduct.json
        setDisplayedProducts(TopProduct);
    }, []);



    return (
        <>
            <Header />
            {/* shop start */}
            <div className="container-store">
                <div className="row px-xl-5">
                    {/* shope sidebar starr */}
                    <div className="col-lg-3 col-md-4">
                        {/* price start from here */}
                        <h5 className="section-title text-uppercase mb-3">Filter By Brand</h5>
                        <div className="bg-light p-4 mb-30">
                            <form>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" />
                                    <label className='custom-control-label' htmlFor="price-all">Jaquar</label>
                                    <span class="badge border font-weight-normal">1000</span>
                                </div>

                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" />
                                    <label className='custom-control-label' htmlFor="price-1">Kohlar</label>
                                    <span class="badge border font-weight-normal">1040</span>
                                </div>

                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" />
                                    <label className='custom-control-label' htmlFor="price-2">Cera</label>
                                    <span class="badge border font-weight-normal">234</span>
                                </div>

                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" />
                                    <label className='custom-control-label' htmlFor="price-2">Others</label>
                                    <span class="badge border font-weight-normal">434</span>
                                </div>

                            </form>
                        </div>
                        {/* price ends here  */}


                        {/* filter by categories start from here  */}
                        <h5 className="section-title text-uppercase mb-3">Filter By Categories</h5>
                        <div className="bg-light p-4 mb-30">
                            <form>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" />
                                    <label className='custom-control-label' htmlFor="price-all">Kitchen</label>
                                    <span class="badge border font-weight-normal">1000</span>
                                </div>

                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" />
                                    <label className='custom-control-label' htmlFor="price-1">Plumbing & Sanitary</label>
                                    <span class="badge border font-weight-normal">1040</span>
                                </div>

                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" />
                                    <label className='custom-control-label' htmlFor="price-2">Wall and Floor Tiles</label>
                                    <span class="badge border font-weight-normal">234</span>
                                </div>

                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" />
                                    <label className='custom-control-label' htmlFor="price-2">Electrical</label>
                                    <span class="badge border font-weight-normal">434</span>
                                </div>

                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" />
                                    <label className='custom-control-label' htmlFor="price-2">Construction Material</label>
                                    <span class="badge border font-weight-normal">434</span>
                                </div>

                            </form>
                        </div>
                        {/* shop sidebar ends here  */}
                    </div>
                    {/* shop product start from here  */}
                    <div className="col-lg-9 col-md-8">
                        <div className="row">
                            {/* Map through displayedProducts and render each product card */}
                            {displayedProducts.map((product, index) => (
                                <div key={index} className="store-product-card">
                                    <div className="store-product-item">
                                        <img src={product.image} alt={product.name} />
                                        <p className="tranding_page_product_name">
                                            {product.name.length > 50
                                                ? `${product.name.slice(0, 5)}...`
                                                : product.name}
                                        </p>
                                        <div className="price_section">
                                            <div className="tranding_product_text_box_2">
                                                <p className="tranding_page_product_price">Price</p>
                                                <p className="tranding_page_product_price">{product.price}</p>
                                            </div>
                                        </div>
                                        {/* Additional product details can be added here */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}
