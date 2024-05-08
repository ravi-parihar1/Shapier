import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import "../css/Header2.css";
import logo from "../assets/HomePageAssets/Shapier-Logo-Final-Design Files-08062022/shapier_logo_final_svg.svg";
import { px } from "framer-motion";
import { MdMargin } from "react-icons/md";
import CartItem from "./CartItem";
import axios from "axios";
export default function Header2() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAccountSidebarOpen, setIsAccountSidebarOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  const fetchCart = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/api/v1/cart`);
      const arrayOfCart = data.data;
      setCartProducts(
        arrayOfCart.map((cart) => ({
          cart_id: cart.id,
          product_id: cart.product_id,
          quantity: cart.quantity,
          product_name: cart.product,
          product_image: cart.product_image,
          product_price: cart.product_price,
        }))
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const deleteCartItem = async (id) =>{
    try {
        const {data} = await axios.delete(`http://localhost:5000/api/v1/cart/${id}`);
        if(data.data.affectedRows){
            fetchCart();
        }
    } catch (error) {
        console.log(error)
    }
  }
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsAccountSidebarOpen(false);
  };

  const toggleAccountSidebar = () => {
    setIsAccountSidebarOpen(!isAccountSidebarOpen);
    setIsSidebarOpen(false);
  };

  // const toggleSearch = () => {
  //     console.log("Toggle search called");
  //     setIsSearchOpen(!isSearchOpen);
  // };

  useEffect(() => {
    const closeSidebarOnOutsideClick = (event) => {
      if (
        (isSidebarOpen || isAccountSidebarOpen) &&
        !event.target.closest(".sidebar")
      ) {
        setIsSidebarOpen(false);
        setIsAccountSidebarOpen(false);
      }
    };

    document.addEventListener("click", closeSidebarOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeSidebarOnOutsideClick);
    };
  }, [isSidebarOpen, isAccountSidebarOpen]);

  // const handleSearchChange = (event) => {
  //     setSearchQuery(event.target.value);
  // };

  return (
    <>
      <header className="block inset-x-0 z-50 p-5 md:p-10 items-start justify-between gap-10 ${isSearchOpen ? 'hidden' : ''}">
        <div className="pl-5 md:pr-10 flex items-center">
          <img src={logo} height={"45px"} width={"45px"} alt="" />
          <h4 style={{ margin: "5%", fontWeight: "600" }}>SHAPIER</h4>
          {/* <svg width="60" height="60" viewBox="0 0 60 20.9" fill="currentColor" >
                    <path d="m60 0-43.9 18.6c-3.7 1.5-6.7 2.3-9.2 2.3-2.8 0-4.8-1-6.1-2.9-1.6-2.5-.9-6.6 1.9-10.9 1.6-2.5 3.7-4.8 5.8-7-.5.7-4.7 7.8-.1 11.1.9.7 2.2 1 3.8 1 1.3 0 2.8-.2 4.4-.6z" />
                </svg> */}
        </div>

        <div className="container_nav_bar_of_header_2">
          <ul className="hidden sm:flex items-center gap-6 md:gap-8 d-flex">
            <li>
              <Link
                activeStyle
                to="/"
                className="relative after:block after:absolute after:-bottom-[5px] after:w-full after:h-px after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-right hover:after:origin-left"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeStyle
                to="/store"
                className="relative after:block after:absolute after:-bottom-[5px] after:w-full after:h-px after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-right hover:after:origin-left"
              >
                Store
              </Link>
            </li>
            <li>
              <Link
                activeStyle
                to="/services"
                className="relative after:block after:absolute after:-bottom-[5px] after:w-full after:h-px after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-right hover:after:origin-left"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                activeStyle
                to="/shape"
                className="relative after:block after:absolute after:-bottom-[5px] after:w-full after:h-px after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-right hover:after:origin-left"
              >
                Shape
              </Link>
            </li>
            <li>
              <Link
                activeStyle
                to="/contact"
                className="relative after:block after:absolute after:-bottom-[5px] after:w-full after:h-px after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-right hover:after:origin-left"
              >
                Contact
              </Link>
            </li>
          </ul>
          <ul className="d-flex items-center">
            <li>
              <button
                type="button"
                aria-label="Search"
                className="p-3 -m-3 button_for_header2"
              >
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.5 5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM4 11.5a7.5 7.5 0 1 1 13.145 4.938l4.209 4.208-.708.708-4.208-4.209A7.5 7.5 0 0 1 4 11.5Z" />
                </svg>
              </button>
            </li>
            <li>
              <button
                type="button"
                aria-label="Cart"
                className="p-3 -m-3 button_for_header2"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSidebar();
                }}
              >
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.525 3.525A3.5 3.5 0 0 1 15.5 6v1.5H21V17a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5h5.5V6a3.5 3.5 0 0 1 1.025-2.475ZM8.5 8.5v3h1v-3h5v3h1v-3H20V17a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8.5h4.5Zm6-1h-5V6a2.5 2.5 0 0 1 5 0v1.5Z"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button
                type="button"
                aria-label="Account"
                className="p-3 -m-3 button_for_header2"
              >
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 4a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM7.5 7.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm0 7.5A3.5 3.5 0 0 0 4 18.5V21H3v-2.5A4.5 4.5 0 0 1 7.5 14h9a4.5 4.5 0 0 1 4.5 4.5V21h-1v-2.5a3.5 3.5 0 0 0-3.5-3.5h-9Z" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </header>

      {/* Account Sidebar */}

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <h2 className="sidebar-content-heading">Your Cart</h2>
        <div className="sidebar-content">
          {cartProducts.map((cartproduct) => (
            <div className="cart-item" key={cartproduct.cart_id}>
              <img
                src={`http://localhost:5000/images/${cartproduct.product_image}`}
                alt="product"
              />
              <div className="details">
                <div className="title">{cartproduct.product_name}</div>
                <div className="quantity">Quantity: {cartproduct.quantity}</div>
                <button className="delete" onClick={()=> deleteCartItem(cartproduct.cart_id)}>
                  Delete
                </button>
              </div>
              <div className="price">
                ${cartproduct.product_price * cartproduct.quantity}
              </div>
            </div>
          ))}
        </div>

        {/* Subtotal */}
        <div className="subtotal">
          <span>Subtotal:</span>
          <span>$45.00</span>
        </div>
        {/* Checkout button */}
        <button className="checkout-btn">
          <Link action to="/Checkout">
            Checkout
          </Link>
          x
        </button>
      </div>
    </>
  );
}
