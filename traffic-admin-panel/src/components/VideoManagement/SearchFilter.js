import React, { useState } from 'react';

const SearchFilter = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div className="search-filter">
            <input type="text" value={query} onChange={handleInputChange} />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchFilter;
