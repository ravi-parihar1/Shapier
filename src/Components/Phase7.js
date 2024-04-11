import React from "react";
import "../css/Phase7.css";
import Topproduct from "../TopRatedProduct.json";
export default function Phase7() {
  return (
    <>
      <div className="">
        <h3 className="heading_name">Trending Products</h3>
        <div className="" id="inner">
          {Topproduct.map((product) => (
            <div key={product.id} className="card card_product" id="product1">
              <img
                className="imageofproduct"
                src={product.image}
                alt={product.name}
              />
              <p>{product.name.length>10 ? `${product.name.slice(0,5)}...`:product.name}</p>
            </div>
          ))}

          <div className="card" id="product1">
            <img
              className="imageofproduct"
              src="https://images.unsplash.com/photo-1527356900876-cae61d8d8462?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWxlY3RyaWNhbCUyMHdpcmVzfGVufDB8fDB8fHww"
            />
            <p>wires</p>
          </div>
          <div className="card" id="product1">
            <img
              className="imageofproduct"
              src="https://images.unsplash.com/photo-1527356900876-cae61d8d8462?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWxlY3RyaWNhbCUyMHdpcmVzfGVufDB8fDB8fHww"
            />
            <p>wires</p>
          </div>
          <div className="card" id="product1">
            <img
              className="imageofproduct"
              src="https://images.unsplash.com/photo-1527356900876-cae61d8d8462?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWxlY3RyaWNhbCUyMHdpcmVzfGVufDB8fDB8fHww"
            />
            <p>wires</p>
          </div>
          <div className="card" id="product1">
            <img
              className="imageofproduct"
              src="https://images.unsplash.com/photo-1527356900876-cae61d8d8462?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWxlY3RyaWNhbCUyMHdpcmVzfGVufDB8fDB8fHww"
            />
            <p>wires</p>
          </div>
          <div className="card" id="product1">
            <img
              className="imageofproduct"
              src="https://images.unsplash.com/photo-1527356900876-cae61d8d8462?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWxlY3RyaWNhbCUyMHdpcmVzfGVufDB8fDB8fHww"
            />
            <p>wires</p>
          </div>
          <div className="card" id="product1">
            <img
              className="imageofproduct"
              src="https://images.unsplash.com/photo-1527356900876-cae61d8d8462?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWxlY3RyaWNhbCUyMHdpcmVzfGVufDB8fDB8fHww"
            />
            <p>wires</p>
          </div>
          <div className="card" id="product1">
            <img
              className="imageofproduct"
              src="https://images.unsplash.com/photo-1527356900876-cae61d8d8462?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWxlY3RyaWNhbCUyMHdpcmVzfGVufDB8fDB8fHww"
            />
            <p>wires</p>
          </div>
          <div className="card" id="product1">
            <img
              className="imageofproduct"
              src="https://images.unsplash.com/photo-1527356900876-cae61d8d8462?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWxlY3RyaWNhbCUyMHdpcmVzfGVufDB8fDB8fHww"
            />
            <p>wires</p>
          </div>
          <div className="card" id="product1">
            <img
              className="imageofproduct"
              src="https://images.unsplash.com/photo-1527356900876-cae61d8d8462?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWxlY3RyaWNhbCUyMHdpcmVzfGVufDB8fDB8fHww"
            />
            <p>wires</p>
          </div>
          <div className="card" id="product1">
            <img
              className="imageofproduct"
              src="https://images.unsplash.com/photo-1527356900876-cae61d8d8462?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWxlY3RyaWNhbCUyMHdpcmVzfGVufDB8fDB8fHww"
            />
            <p>wires</p>
          </div>
          <div className="card" id="product1">
            <img
              className="imageofproduct"
              src="https://images.unsplash.com/photo-1527356900876-cae61d8d8462?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWxlY3RyaWNhbCUyMHdpcmVzfGVufDB8fDB8fHww"
            />
            <p>wires</p>
          </div>
          <div className="card" id="product1">
            <img
              className="imageofproduct"
              src="https://images.unsplash.com/photo-1527356900876-cae61d8d8462?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWxlY3RyaWNhbCUyMHdpcmVzfGVufDB8fDB8fHww"
            />
            <p>wires</p>
          </div>
          <div className="card" id="product1">
            <img
              className="imageofproduct"
              src="https://images.unsplash.com/photo-1527356900876-cae61d8d8462?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWxlY3RyaWNhbCUyMHdpcmVzfGVufDB8fDB8fHww"
            />
            <p>wires</p>
          </div>
        </div>
      </div>
    </>
  );
}