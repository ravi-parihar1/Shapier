import React from 'react'
import shapelogo from '../assets/shapelogo.png';
import SearchBar from './SearchBar';
import './Header.css'

export default function Header() {
    return (
        <div>
<nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" style={{ padding: '0' }}> {/* Removed padding */}
                        <img src={shapelogo} alt="Logo" width="35" height="35" className="d-inline-block align-text-top"/>
                        <span className="ms-2 fw-bold ps-2.5 px-2">SHAPIER</span>
                    </a>
                    <div className="d-lg-none"> {/* Visible only on mobile */}
                        <SearchBar />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0" style={{ marginLeft: '-10px' }}> {/* Adjusted margin */}
                            <li className="nav-item">
                                <a className="nav-link" href="#1">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#2">Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#3">Shape</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#4">Store</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#5">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-none d-lg-block px-3"> {/* Visible only on desktop */}
                        <SearchBar />
                    </div>
                </div>
            </nav>
        </div>
    )
}
