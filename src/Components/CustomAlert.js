import React from 'react';

function CustomAlert({ message, onClose }) {
    return (
        <div className="custom-alert">
            {message}
            <button onClick={onClose} className="close-btn">X</button>
        </div>
    );
}

export default CustomAlert;
