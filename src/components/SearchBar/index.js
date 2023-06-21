import React, { useState } from 'react';
import { Input } from 'antd';
import { useFetchSearch } from '../../hooks/useFetchSearch';
import './index.css';

function SearchBar({ setGames }) {
  const [searchValue, setSearchValue] = useState('');
  
  useFetchSearch({ 
    setGames: setGames,
    searchValue: searchValue
  });

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