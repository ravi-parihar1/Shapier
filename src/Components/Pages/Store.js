import React from 'react';
import Header from '../Header';
import '../../css/Store.css';

const Store = () => {
  return (
    <>
      <Header />
      <div className="store-container">
        <div className="store-row px-xl-5">
          {/* Shop Sidebar Start */}
          <div className="store-sidebar col-lg-3 col-md-4">
            {/* Price Start */}
            <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by price</span></h5>
            <div className="bg-light p-4 mb-30">
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" checked id="price-all" />
                  <label className="custom-control-label" htmlFor="price-all">All Price</label>
                  <span className="badge border font-weight-normal">1000</span>
                </div>
                {/* Other price options go here */}
              </form>
            </div>
            {/* Price End */}

            {/* Color Start */}
            <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by color</span></h5>
            <div className="bg-light p-4 mb-30">
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" checked id="color-all" />
                  <label className="custom-control-label" htmlFor="color-all">All Color</label>
                  <span className="badge border font-weight-normal">1000</span>
                </div>
                {/* Other color options go here */}
              </form>
            </div>
            {/* Color End */}

            {/* Size Start */}
            <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by size</span></h5>
            <div className="bg-light p-4 mb-30">
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input type="checkbox" className="custom-control-input" checked id="size-all" />
                  <label className="custom-control-label" htmlFor="size-all">All Size</label>
                  <span className="badge border font-weight-normal">1000</span>
                </div>
                {/* Other size options go here */}
              </form>
            </div>
            {/* Size End */}
          </div>
          {/* Shop Sidebar End */}

          {/* Shop Product Start */}
          <div className="store-products col-lg-9 col-md-8">
            <div className="store-product-row pb-3">
              {/* Product items go here */}
              <div className="store-product col-lg-4 col-md-6 col-sm-6 pb-1">
                {/* Product Item */}
              </div>
              {/* Repeat the product item div for each product */}

              {/* Pagination */}
              <div className="store-pagination col-12">
                <nav>
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                  </ul>
                </nav>
              </div>
              {/* Pagination End */}
            </div>
          </div>
          {/* Shop Product End */}
        </div>
      </div>
    </>
  );
}

export default Store;
