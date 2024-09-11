import React from 'react';
import '../css/CartEmpty.css';
import { FaShoppingCart } from 'react-icons/fa';
import Header from './Header';
import BottomBar from './BottomBar';
import { useNavigate, Link } from 'react-router-dom';

export default function CartEmpty() {


    return (
        <>
            <Header />
            <BottomBar />
            <div className="balnk-container"></div>
            <div className="CartEmpty-container">
                <FaShoppingCart className="CartEmpty-icon" />
                <h2 className="CartEmpty-title">Your Cart is Empty</h2>
                <p className="CartEmpty-message">Looks like you haven't added anything to your cart yet.</p>
                <Link to="/store"><button style={{ height: "3rem", width: "6rem", borderRadius: "1rem", background: "#68aeff", outline1: "none", border: "none", color: "white" }}>Shop Now</button></Link>
            </div>

        </>
    );
}
