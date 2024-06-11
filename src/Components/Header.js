import React, { useState, useEffect } from "react";
import { Await, Link, useNavigate } from "react-router-dom";
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
    //Handel query for search 
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);



    const handleMouseEnter = () => {
        setIsOpenCategory(true);
    };

    const handleMouseLeave = () => {
        setIsOpenCategory(false);
    };


    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.get(`https://free.shapier.in/api/v1/products/search`, {
                params: { query: searchQuery }
            });
            setSearchResults(data.data); // Assuming your backend returns results in `data.data`
            navigate('/search-results', { state: { results: data.data } }); // Navigate to search results page
        } catch (error) {
            console.error("Error searching products: ", error);
        }
    };




    //function to fetch categories from backend 
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
            )
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        fetchAllCategories();
    }, []); // Add empty dependency array to run effect only once














    const handleCategoryClick = (category) => {
        setCategoryName(category);
        setIsOpenCategory(false);
        navigate(`/categories/${category}`)
        // Close the dropdown after selecting a category
    };

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

    return (
        <header className="Headofheader" id="header">
            <nav className="Headofnavbar Headofcontainer">
                <div className="logo-head">
                    <img src={logo} alt="Shapier Logo" />
                    <Link to="/" className="Headofbrand">SHAPIER</Link>
                </div>

                <div className={`Headofmenu ${menuActive ? "is-active" : ""}`} id="menu">
                    <ul className="Headofmenu-inner">
                        <li className="Headofmenu-item"  ><Link to="/" className="Headofmenu-link" >Home</Link></li>
                        <li className="Headofmenu-item"><Link to="/store" className="Headofmenu-link" >Shop</Link></li>
                        <li className="Headofmenu-item dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <a href="#" className="Headofmenu-link">Categories</a>
                            {isOpenCategory && (
                                <div className="premdropdown-content">
                                    {categories.map((category) => (
                                        <div className="categories_nameitems">
                                            <ul className="premdropdown-list">
                                                <li className="cat-list-item" onClick={() => handleCategoryClick(category.product_category_name)}>{category.product_category_name}</li>
                                                
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </li>
                        <li className="Headofmenu-item"><Link to="/contact"  className="Headofmenu-link" onClick={closeMenu}>Support</Link></li>
                        {username ? (
                            <li className="Headofmenu-item"><a className="Headofmenu-link">{username.split(" ")[0]}</a></li>
                        ) : (
                            <li className="Headofmenu-item"><Link to="/login" className="Headofmenu-link" onClick={closeMenu}>Login</Link></li>
                        )}
                    </ul>
                </div>

                <div className="Headofsearch">
                    <form className="Headofsearch-form" onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            name="search"
                            className="Headofsearch-input"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit" className="Headofsearch-submit">
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
