// import { Outlet, Link} from 'react-router-dom';
// import React from 'react'
// import shapelogo from '../assets/shapelogo.png';
// import SearchBar from './SearchBar';
// import '../css/Header.css'
// import { AiOutlineHeart } from "react-icons/ai";
// import { LuShoppingBag } from "react-icons/lu";
// import ContactPage from './Pages/ContactPage';

// export default function Header() {
//     return (
//         <>
// <nav className="navbar navbar-expand-lg bg-light">
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="#" style={{ padding: '0' }}> {/* Removed padding */}
//                         <img src={shapelogo} alt="Logo" width="35" height="35" className="d-inline-block align-text-top"/>
//                         <span className="ms-2 fw-bold ps-2.5 px-2">SHAPIER</span>
//                     </a>
//                     <div className="d-lg-none"> {/* Visible only on mobile */}
//                         <SearchBar />
//                     </div>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav mb-2 mb-lg-0" > {/* Adjusted margin */}
//                             <li className="nav-item">
//                                 <Link className='nav-link' activeStyle to="/">Home</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/services">Service</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/shape">Shape</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/store">Store</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className='nav-link' to='/contact'>Contact</Link>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="d-none d-lg-flex align-items-center px-3">
//                         <div className="search-icons-container">
//                             <SearchBar />
//                             {/* <AiOutlineHeart />
//                             <LuShoppingBag /> */}
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//             <Outlet/>
//         </>
//     )
// }
