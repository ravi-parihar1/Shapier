import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css'; // Import your CSS file for styling

const SearchBar = () => {
  return (
    <div className="search-container ml-6">
      <input
        type="text"
        placeholder="looking for...."
        className="search-input"
      />
      <div className="search-icon align-center">
        <FaSearch />
      </div>
    </div>
  );
};

export default SearchBar;
