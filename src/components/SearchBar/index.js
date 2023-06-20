import React from 'react';
import { Input } from 'antd';
import './index.css';

function SearchBar() {
  return (
    <div className="SearchBar">
      <Input placeholder="Search..." />
    </div>
  );
}

export { SearchBar };