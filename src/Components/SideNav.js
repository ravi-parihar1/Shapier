import React from 'react';
import '../css/SideNav.css';
import { CiShoppingCart } from "react-icons/ci";
import { TbCategory2 } from "react-icons/tb";
import { BiCategoryAlt } from "react-icons/bi";
import { TbArrowsExchange2 } from "react-icons/tb";
import { TbHotelService } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { HiOutlineUsers } from "react-icons/hi2";
import { BsBoxSeam } from "react-icons/bs";
import { TbBrandGoogleBigQuery } from "react-icons/tb";
import { GiPartyFlags } from "react-icons/gi";
import { MdOutlineContentPasteSearch } from "react-icons/md";

export default function SideNav() {
    return (
        <div className="AdminNav-nav-bar">
            <input type="checkbox" id="AdminNav-nav-toggle" className="AdminNav-nav-toggle" />
            <div className="AdminNav-nav-header">
                <a href="#" target="_blank" className="AdminNav-nav-title">
                    SHAPIER
                </a>
                <label htmlFor="AdminNav-nav-toggle" className="AdminNav-nav-toggle-label">
                    <span className="AdminNav-nav-toggle-burger"></span>
                </label>
                <hr />
            </div>
            <div className="AdminNav-nav-content">
                <Link to='/admin'><div className="AdminNav-nav-button">
                    <CiShoppingCart className="fas AdminNav-nav-button-icon" />
                    <span>Product</span>
                </div></Link>
                <Link to='/admin/categories'>
                    <div className="AdminNav-nav-button">
                        <TbCategory2 className="fas AdminNav-nav-button-icon" />
                        <span>Categories</span>
                    </div>
                </Link>
                <Link to='/admin/subcategories'>
                <div className="AdminNav-nav-button">
                    <BiCategoryAlt className="fas AdminNav-nav-button-icon" />
                    <span>Subcategories</span>
                </div>
                
                </Link>
                <div className="AdminNav-nav-button">
                    <TbArrowsExchange2 className="fas AdminNav-nav-button-icon" />
                    <span>Orders</span>
                </div>

                <Link to='/admin/services'>
                <div className="AdminNav-nav-button">
                    <TbHotelService className="fas AdminNav-nav-button-icon" />
                    <span>Services</span>
                </div>
                </Link>

                <Link to='/admin/enquiry'>
                <div className="AdminNav-nav-button">
                    <TbBrandGoogleBigQuery className="fas AdminNav-nav-button-icon" />
                    <span>Enquiry</span>
                </div>
                </Link>


                <Link to='/admin/service-enquiry'>
                <div className="AdminNav-nav-button">
                    <MdOutlineContentPasteSearch className="fas AdminNav-nav-button-icon" />
                    <span>Services Enquiries</span>
                </div>
                </Link>


                <Link to='/admin/Users'>
                <div className="AdminNav-nav-button">
                    <HiOutlineUsers className="fas AdminNav-nav-button-icon" />
                    <span>Users</span>
                </div>
                </Link>

                <Link to='/admin/Brands'>
                <div className="AdminNav-nav-button">
                    <BsBoxSeam className="fas AdminNav-nav-button-icon" />
                    <span>Brands</span>
                </div>
                </Link>

                <Link to='/admin/Banners'>
                <div className="AdminNav-nav-button">
                    <GiPartyFlags className="fas AdminNav-nav-button-icon" />
                    <span>Banners</span>
                </div>
                </Link>


                <div className="AdminNav-nav-content-highlight"></div>
            </div>
            <input type="checkbox" id="AdminNav-nav-footer-toggle" className="AdminNav-nav-footer-toggle" />
            <div className="AdminNav-nav-footer">
                <div className="AdminNav-nav-footer-heading">
                    <div className="AdminNav-nav-footer-avatar">
                        {/* <img src="../assets/shapelogo.png" alt="avatar" /> */}
                    </div>
                    <div className="AdminNav-nav-footer-titlebox">
                        <a href="#" target="_blank" className="AdminNav-nav-footer-title">SHAPIER</a>
                        <span className="AdminNav-nav-footer-subtitle">Admin</span>
                    </div>
                    <label htmlFor="AdminNav-nav-footer-toggle" className="AdminNav-nav-footer-toggle-label">
                        <i className="fas fa-caret-up"></i>
                    </label>
                </div>
                <div className="AdminNav-nav-footer-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </div>
        </div>
    );
}
