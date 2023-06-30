import React from 'react';
import { Input } from 'antd';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchBar } from './searchBarSlice';

function SearchBar() {
  const searchValue = useSelector(state => state.searchBar.value);
  const dispatch = useDispatch();
  const onSearchBarChange = function(e) {
    dispatch(setSearchBar(e.target.value));
  };

  return (
    <div className="SearchBar">
      <Input 
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => onSearchBarChange(e)}/>
    </div>
  );
}

export { SearchBar };