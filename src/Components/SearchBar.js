// SearchBar.js

import React, { useState ,useEffect } from 'react';
import '../css/SearchBar.css'; // Import the CSS file

const SearchBar = ({ onClose }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };

    
    return (
        <div className="search-bar-container">
            <input
                type="text"
                className="search-input"
                placeholder="Search..."
                value={searchValue}
                onChange={handleChange}
            />
            <svg
                className="search-icon"
                width="24"
                height="24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M11.5 5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM4 11.5a7.5 7.5 0 1 1 13.145 4.938l4.209 4.208-.708.708-4.208-4.209A7.5 7.5 0 0 1 4 11.5Z" />
            </svg>
        </div>
    );
};

export default SearchBar;
