import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="search">
      <div>
        <img src="/search.svg" alt="Search Icon" />
        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Search;
