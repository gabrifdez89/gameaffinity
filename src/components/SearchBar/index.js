import React from 'react';
import { Input } from 'antd';
import './index.css';

function SearchBar({
    searchValue,
    setSearchValue
}) {
  return (
    <div className="SearchBar">
      <Input 
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e)}/>
    </div>
  );
}

export { SearchBar };