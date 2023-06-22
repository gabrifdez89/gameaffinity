import React from 'react';
import { Input } from 'antd';
import './index.css';

function SearchBar({ setSearchValue }) {
  const onSearchBarChange = function(e) {
    setSearchValue(e.target.value);
  };

  return (
    <div className="SearchBar">
      <Input 
        placeholder="Search..."
        onChange={onSearchBarChange}/>
    </div>
  );
}

export { SearchBar };