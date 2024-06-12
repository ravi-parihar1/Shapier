import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Header.css";
import { IoSearch } from "react-icons/io5";
import { RiShoppingBag3Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import logo from '../assets/HomePageAssets/Shapier-Logo-Final-Design Files-08062022/shapier_logo_final_svg.svg';
import axios from "axios";

const Header = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [username, setUsername] = useState(null);
    const [isAuthorize, setIsAuthorize] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const localData = JSON.parse(localStorage.getItem("data"));
    const [isOpenCategory, setIsOpenCategory] = useState(false);
    const [categoryName, setCategoryName] = useState("");
    const [categories, setCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpenCategory(true);
    };

    const handleMouseLeave = () => {
        setIsOpenCategory(false);
    };

    const cartSection = () => {
        navigate('/Checkout')
    }
    const handleSearchChange = async (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        if (!query.trim()) {
            setSearchResults([]);
            setIsSearchOpen(false);
            return;
        }

        setIsLoading(true);
        setError(null);
        try {
            const { data } = await axios.get(`https://free.shapier.in/api/v1/search?q=${query}`);
            setSearchResults(data.data);
            setIsSearchOpen(true);
        } catch (error) {
            setError("Error searching products. Please try again.");
            console.error("Error searching products: ", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCategoryClick = (category) => {
        setCategoryName(category);
        setIsOpenCategory(false);
        navigate(`/categories/${category}`);
    };

    const fetchAllCategories = async () => {
        try {
            const { data } = await axios.get(`https://free.shapier.in/api/v1/product_categories`);
            const arrayOfCategories = data.data;
            setCategories(
                arrayOfCategories.map((category) => ({
                    category_id: category.id,
                    product_category_name: category.product_category_name,
                    product_category_image: category.product_category_image
                }))
            );
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAllCategories();
    }, []);

    const fetchUser = async () => {
        try {
            if (localData) {
                const { token, userId } = localData;
                const response = await axios.get(`https://free.shapier.in/api/v1/user/${userId}`, {
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

    const closeSearch = () => {
        setSearchQuery("");
        setSearchResults([]);
        setIsSearchOpen(false);
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
                        <li className="Headofmenu-item"><Link to="/" className="Headofmenu-link">Home</Link></li>
                        <li className="Headofmenu-item"><Link to="/store" className="Headofmenu-link">Shop</Link></li>
                        <li className="Headofmenu-item dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <a href="#" className="Headofmenu-link">Categories</a>
                            {isOpenCategory && (
                                <div className="premdropdown-content">
                                    {categories.map((category) => (
                                        <div className="categories_nameitems" key={category.category_id}>
                                            <ul className="premdropdown-list">
                                                <li className="cat-list-item" onClick={() => handleCategoryClick(category.product_category_name)}>{category.product_category_name}</li>
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </li>
                        <li className="Headofmenu-item"><Link to="/contact" className="Headofmenu-link" onClick={closeMenu}>Support</Link></li>
                        {username ? (
                            <li className="Headofmenu-item"><a className="Headofmenu-link">{username.split(" ")[0]}</a></li>
                        ) : (
                            <li className="Headofmenu-item"><Link to="/login" className="Headofmenu-link" onClick={closeMenu}>Login</Link></li>
                        )}
                    </ul>
                </div>

                <div className="Headofsearch">
                    <form className="Headofsearch-form" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="text"
                            name="search"
                            className="Headofsearch-input"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <button type="submit" className="Headofsearch-submit">
                            <IoSearch />
                        </button>
                        {isSearchOpen && (
                            <div className="search-dropdown">
                                {isLoading ? (
                                    <div>Loading...</div>
                                ) : error ? (
                                    <div>{error}</div>
                                ) : (
                                    searchResults.map((result) => (
                                        <div key={result.id} className="search-result-item">
                                            {/* <img src={result.product_image} alt={'no image'} /> */}
                                            <Link to={`/details/${result.id}`} onClick={closeSearch}>

                                                <div className="search-result-small">

                                                    {result.product}
                                                </div>
                                            </Link>
                                        </div>
                                    ))
                                )}
                                <button className="close-search" onClick={closeSearch}><AiOutlineClose /></button>
                            </div>
                        )}
                    </form>

                    <Link to='/Checkout'>
                    <div className="partsecond">
                        <div className="cart-icon custom-cart-icon">
                            <RiShoppingBag3Line />
                        </div>
                        <h6 className="partsecond-cart-text">Cart</h6>
                    </div>
                    </Link>
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
