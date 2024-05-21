import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/BottomBar.css';
import { GrHomeRounded } from "react-icons/gr";
import { CgShoppingBag } from "react-icons/cg";
import { GrBusinessService } from "react-icons/gr";
import { LuShapes } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";

export default function BottomBar() {
    const location = useLocation();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };

    const getIconColor = (path) => {
        if (isDrawerOpen && path === '/services') {
            return 'rgb(40 104 194)';
        }
        if (!isDrawerOpen && location.pathname === path) {
            switch (path) {
                case '/':
                    return 'rgb(28 123 199)';
                case '/store':
                    return '#3de898';
                case '/services':
                    return 'rgb(40 104 194)';
                case '/shape':
                    return 'rgb(42 205 216)';
                default:
                    return '';
            }
        }
        return '';
    };

    return (
        <>
            <div className='bottom_bar_container'>
                <ul>
                    <li>
                        <Link className='active_bottom_link' to="/" style={{ color: getIconColor('/') }}>
                            <GrHomeRounded />
                        </Link>
                    </li>
                    <li>
                        <Link className='active_bottom_link' to="/store" style={{ color: getIconColor('/store') }}>
                            <CgShoppingBag />
                        </Link>
                    </li>
                    <li>
                        <div className='active_bottom_link' onClick={toggleDrawer} style={{ color: getIconColor('/services') }}>
                            <GrBusinessService />
                        </div>
                    </li>
                    <li>
                        <Link className='active_bottom_link' to="/shape" style={{ color: getIconColor('/shape') }}>
                            <LuShapes />
                        </Link>
                    </li>
                </ul>
            </div>
            {isDrawerOpen && <div className="drawer-overlay" onClick={closeDrawer}></div>}
            <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        </>
    );
}

function Drawer({ isOpen, toggleDrawer }) {
    return (
        <div className={`drawer ${isOpen ? 'open' : ''}`}>
            <div className="drawer-header">
                <h4 className='drawer-heading'>Services</h4>
                <AiOutlineClose className="close-icon" onClick={toggleDrawer} />
            </div>
            <div className="drawer-content">
                <ul>
                    <li>Bathroom Remodeling</li>
                    <li>Blind Installation</li>
                    <li>Cabinet Makeover</li>
                    <li>Carpet Installation</li>
                    <li>Closet Installation</li>
                    <li>Door Installation</li>
                    <li>General Installation</li>
                    <li>HVAC Installation</li>
                    <li>Kitchen Design Services</li>
                    <li>Plumbing Repair</li>
                    <li>Water Heater Installation</li>
                </ul>
            </div>
        </div>
    );
}
