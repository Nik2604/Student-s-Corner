import React from "react";
import "./css/SearchBar.css";

function SearchBar({ setSearchTerm }) {
  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search questions"
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
