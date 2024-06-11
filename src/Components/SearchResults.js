import React from 'react';
import { useLocation } from 'react-router-dom';
import "../css/SearchResults.css"; // Add appropriate CSS

const SearchResults = () => {
    const location = useLocation();
    const { results } = location.state || { results: [] };

    return (
        <div className="search-results-container">
            {results.length > 0 ? (
                results.map((product) => (
                    <div key={product.id} className="search-result-item">
                        <img src={product.product_image} alt={product.product_name} />
                        <h3>{product.product_name}</h3>
                        <p>{product.product_description}</p>
                        <p>Price: ${product.product_price}</p>
                    </div>
                ))
            ) : (
                <p>No products found.</p>
            )}
        </div>
    );
};

export default SearchResults;
