import React from 'react';
import { Input } from 'antd';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { setWantToPlaySearchBar } from './wantToPlaySearchBarSlice';

function WantToPlaySearchBar() {
  const wantToPlaySearchValue = useSelector(state => state.wantToPlaySearchBar.value);
  const dispatch = useDispatch();
  const onSearchBarChange = function(e) {
    dispatch(setWantToPlaySearchBar(e.target.value));
  };

  return (
    <div className="SearchBar">
      <Input 
        placeholder="Search..."
        value={wantToPlaySearchValue}
        onChange={(e) => onSearchBarChange(e)}/>
    </div>
  );
}

export { WantToPlaySearchBar };