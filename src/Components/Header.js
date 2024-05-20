import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Header.css";
import { IoSearch } from "react-icons/io5";
import { RiShoppingBag3Line } from "react-icons/ri"; // Importing cart icon
import logo from '../assets/HomePageAssets/Shapier-Logo-Final-Design Files-08062022/shapier_logo_final_svg.svg';
import axios from "axios";

const Header = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [username, setUsername] = useState(null);
    const [isAuthorize, setIsAuthorize] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const localData = JSON.parse(localStorage.getItem("data"));

    const fetchUser = async () => {
        try {
            if (localData) {
                const { token, userId } = localData;
                const response = await axios.get(`http://13.232.110.226:5000/api/v1/user/${userId}`, {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    }
                });
                setUserData(response.data);
                setUsername(response.data.data.username);
                setIsAuthorize(true);
            } else {
                setIsAuthorize(false);
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.code === 401) {
                setUserData(null);
                setUsername(null);
                setIsAuthorize(false);
            }
            console.error("Error in fetching user data: ", error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const handleSignOut = () => {
        navigate("/Login");
        setUserData(null);
        setUsername(null);
        setIsAuthorize(false);
    };

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const closeMenu = () => {
        setMenuActive(false);
    };

    return (
        <header className="Headofheader" id="header">
            <nav className="Headofnavbar Headofcontainer">
                <div className="logo-head">
                    <img src={logo} alt="Shapier Logo" />
                    <Link to="/" className="Headofbrand">SHAPIER</Link>
                </div>

                <div className={`Headofmenu ${menuActive ? "is-active" : ""}`} id="menu">
                    <ul className="Headofmenu-inner">
                        <li className="Headofmenu-item"><Link to="/" className="Headofmenu-link" onClick={closeMenu}>Home</Link></li>
                        <li className="Headofmenu-item"><Link to="/store" className="Headofmenu-link" onClick={closeMenu}>Shop</Link></li>
                        <li className="Headofmenu-item"><Link to="/services" className="Headofmenu-link" onClick={closeMenu}>Categories</Link></li>
                        <li className="Headofmenu-item"><Link to="/contact" className="Headofmenu-link" onClick={closeMenu}>Support</Link></li>
                        {username ? (
                            <li className="Headofmenu-item"><a className="Headofmenu-link">{username.split(" ")[0]}</a></li>
                        ) : (
                            <li className="Headofmenu-item"><Link to="/login" className="Headofmenu-link" onClick={closeMenu}>Login</Link></li>
                        )}
                    </ul>
                </div>

                <div className="Headofsearch">
                    <form className="Headofsearch-form">
                        <input
                            type="text"
                            name="search"
                            className="Headofsearch-input"
                            placeholder="Search"
                        />
                        <button type="submit" className="Headofsearch-submit" disabled>
                            <IoSearch />
                        </button>
                    </form>
                    <div className="partsecond">
                        <Link to='/Checkout'><div className="cart-icon custom-cart-icon">
                            <RiShoppingBag3Line />
                        </div></Link>
                        Cart
                    </div>
                </div>

                <div className="toper-right">
                    <Link to='/Checkout'><div className="cart-icon custom-cart-icon">
                        <RiShoppingBag3Line />
                    </div></Link>

                    <div className={`Headofburger ${menuActive ? "is-active" : ""}`} id="burger" onClick={toggleMenu}>
                        <span className="Headofburger-line"></span>
                        <span className="Headofburger-line"></span>
                        <span className="Headofburger-line"></span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
