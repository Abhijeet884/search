import React from "react";

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
        <input
          className={`search-box ${className}`}
          type='search'
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      );

export default SearchBox;