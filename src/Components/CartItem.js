import React from 'react';
import '../css/CartItem.css'

const CartItem = ({ image, title, price, quantity }) => {
    return (
        <div className="cart-item">
            <img src={image} alt="product"  />
            <div className="details">
                <div className="title">{title}</div>
                <div className="quantity">Quantity: {quantity}</div>
                <button className="delete">Delete</button>
            </div>
            <div className="price">${price * quantity}</div>
        </div>
    );
}

export default CartItem;