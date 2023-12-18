import React, { useState } from "react";
import handleSearch from './handleSearch';
import { Link } from "react-router-dom";
import './searchBar.css'
import { FaSearch } from "react-icons/fa";



export default function SearchBar(_id) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const performSearch = async () => {
    try {
      const result = await handleSearch(searchQuery);
      setSearchResults(result);
      
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    performSearch()
    if (!value) {
      setSearchResults([]); // Clear search results when input is empty
    }
  };

  return (
    <div className="search-container">
      <div className="search-wrapper">
			<input
			type="text"
			placeholder="Search by name"
			value={searchQuery}
			onChange={handleInputChange}
			/>
      
			<button onClick={performSearch}><FaSearch /></button>
      </div>
      <div className="dropdown">
        {searchQuery && searchResults.length > 0 && searchResults
          .filter(result => result.title.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((result) => (
            <div key={result._id} className="dropdown-item">
              <Link to={`/series/${result._id}`}>
              <h1>{result.title}</h1>
              </Link>
            </div>
        ))}
        {(!searchQuery) && (
          ''
          )}
      </div>
    </div>
  );
  }