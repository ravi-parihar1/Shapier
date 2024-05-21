import React from 'react';
import '../css/CartItem.css';

const CartItem = ({ image, title, price, quantity }) => {
    return (
        <div className="cart-item">
            <img src={`https://free.shapier.in/images/`+image} alt="product" />
            <div className="details">
                <div className="title">{title}</div>
                <div className="quantity">Quantity: {quantity}</div>
                <button className="delete">Delete</button>
            </div>
            <div className="price">Rs.{price * quantity}</div>
        </div>
    );
}

export default CartItem;
