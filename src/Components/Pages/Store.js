import React, { useState, useEffect } from "react";
import Header from '../Header';
import '../../css/Store.css';
import TopProduct from "../../TopRatedProduct.json";





export default function Store() {
    const [displayedProducts, setDisplayedProducts] = useState([]);
    useEffect(() => {
        const handleResize = () => {
          const screenWidth = window.innerWidth;
          let productsToDisplay = [];
    
          if (screenWidth <= 768) {
            // For mobile screens, display only the first four products
            productsToDisplay = TopProduct.slice(0, 4);
          } else {
            // For larger screens, display all products
            productsToDisplay = TopProduct;
          }
    
          setDisplayedProducts(productsToDisplay);
        };
         // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial call to handleResize to set initial state
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
                    
            </div>
        </div >
        </>
    )
}
