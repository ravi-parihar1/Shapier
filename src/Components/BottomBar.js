import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/BottomBar.css';
import { GrHomeRounded } from "react-icons/gr";
import { CgShoppingBag } from "react-icons/cg";
import { GrBusinessService } from "react-icons/gr";
import { LuShapes } from "react-icons/lu";

export default function BottomBar() {
    const location = useLocation();

    return (
        <>
            <div className='bottom_bar_container'>
                <ul>
                    <li><Link className='active_bottom_link' to="/" style={{ color: location.pathname === '/' ? 'rgb(28 123 199)' : '' }}><GrHomeRounded /></Link></li>
                    <li><Link className='active_bottom_link' to="/store" style={{ color: location.pathname === '/store' ? '#3de898' : '' }}><CgShoppingBag /></Link></li>
                    <li><Link className='active_bottom_link' to="/services" style={{ color: location.pathname === '/services' ? 'rgb(40 104 194)' : '' }}><GrBusinessService /></Link></li>
                    <li><Link className='active_bottom_link' to="/shape" style={{ color: location.pathname === '/shape' ? 'rgb(42 205 216)' : '' }}><LuShapes /></Link></li>
                </ul>
            </div>
        </>
    )
}







// import React from 'react'
// import { Link } from 'react-router-dom';
// import '../css/BottomBar.css'
// import { GrHomeRounded } from "react-icons/gr";
// import { CgShoppingBag } from "react-icons/cg";
// import { GrBusinessService } from "react-icons/gr";
// import { LuShapes } from "react-icons/lu";

// export default function BottomBar() {
//     return (
//         <>
//             <div className='bottom_bar_container'>
//                 <ul>
//                     <li><Link className='active_bottom_link' to="/"><GrHomeRounded /></Link></li>
//                     <li><Link className='active_bottom_link' to="/store"><CgShoppingBag /></Link></li>
//                     <li><Link className='active_bottom_link' to="/services"><GrBusinessService /></Link></li>
//                     <li><Link className='active_bottom_link' to="/shape"><LuShapes /></Link></li>
//                 </ul>
//             </div>
//         </>
//     )
// }
