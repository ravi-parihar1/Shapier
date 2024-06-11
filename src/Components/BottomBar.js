import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/BottomBar.css';
import { GrHomeRounded } from "react-icons/gr";
import { CgShoppingBag } from "react-icons/cg";
import { GrBusinessService } from "react-icons/gr";
import { LuShapes } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";

export default function BottomBar() {
    const location = useLocation();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        if (location.pathname !== '/services') {
            setIsDrawerOpen(!isDrawerOpen);
        }
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
                        <Link className='active_bottom_link' to="/" onClick={window.scrollTo(0,0)} style={{ color: getIconColor('/') }}>
                            <GrHomeRounded />
                        </Link>
                    </li>
                    <li>
                        <Link className='active_bottom_link' to="/store" onClick={window.scrollTo(0,0)} style={{ color: getIconColor('/store') }}>
                            <CgShoppingBag />
                        </Link>
                    </li>
                    <li>
                        {/* <div className='active_bottom_link' onClick={toggleDrawer} style={{ color: getIconColor('/services') }}>
                            <GrBusinessService />
                        </div> */}

                        <Link className='active_bottom_link' to='/explore' onClick={window.scrollTo(0,0)} style={{ color: getIconColor('/services') }}>
                            <GrBusinessService />
                        </Link>
                    </li>
                    <li>
                        <Link className='active_bottom_link' to="/shape-section" onClick={window.scrollTo(0,0)} style={{ color: getIconColor('/shape') }}>
                            <LuShapes />
                        </Link>
                    </li>
                </ul>
            </div>
            
        </>
    );
}

