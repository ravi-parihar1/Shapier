import React from 'react'
import { Link } from 'react-router-dom';
import '../css/BottomBar.css'
import { GrHomeRounded } from "react-icons/gr";
import { CgShoppingBag } from "react-icons/cg";
import { GrBusinessService } from "react-icons/gr";
import { LuShapes } from "react-icons/lu";

export default function BottomBar() {
    return (
        <>
            <div className='bottom_bar_container'>
                <ul>
                    <li><Link className='active_bottom_link' to="/"><GrHomeRounded /></Link></li>
                    <li><Link className='active_bottom_link' to="/store"><CgShoppingBag /></Link></li>
                    <li><Link className='active_bottom_link' to="/services"><GrBusinessService /></Link></li>
                    <li><Link className='active_bottom_link' to="/shape"><LuShapes /></Link></li>
                </ul>
            </div>
        </>
    )
}
