import React, { useState  } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import { IoSearch } from "react-icons/io5";
import logo from '../assets/HomePageAssets/Shapier-Logo-Final-Design Files-08062022/shapier_logo_final_svg.svg';

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);

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
                    <img src={logo} alt="" />
                    <a href="#" className="Headofbrand">SHAPIER</a>
                </div>
                <div className="Headofsearch">
                    <form className="Headofsearch-form">
                        <input
                            type="text"
                            name="search"
                            className="Headofsearch-input"
                            placeholder="Search for Destinations"
                            autoFocus
                        />
                        <button type="submit" className="Headofsearch-submit" disabled >
                            <IoSearch />
                        </button>
                    </form>
                </div>
                <div className={`Headofmenu ${menuActive ? "is-active" : ""}`} id="menu">
                    <ul className="Headofmenu-inner">
                        <Link to='/'><li className="Headofmenu-item"><a href="#" className="Headofmenu-link" onClick={closeMenu}>Home</a></li></Link>
                        <Link to='/store'><li className="Headofmenu-item"><a href="#" className="Headofmenu-link" onClick={closeMenu}>Shop</a></li></Link>
                        <Link to='/services'><li className="Headofmenu-item"><a href="#" className="Headofmenu-link" onClick={closeMenu}>Categories</a></li></Link>
                        <Link to='/contact'><li className="Headofmenu-item"><a href="#" className="Headofmenu-link" onClick={closeMenu}>Support</a></li></Link>
                    </ul>
                </div>


                {/* <button className="Headoflogin-btn">Login</button> */}

                <div className={`Headofburger ${menuActive ? "is-active" : ""}`} id="burger" onClick={toggleMenu}>
                    <span className="Headofburger-line"></span>
                    <span className="Headofburger-line"></span>
                    <span className="Headofburger-line"></span>
                </div>
            </nav>
        </header>
    );
};

export default Header;
