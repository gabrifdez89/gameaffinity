import React from 'react';
import './index.css';

function MainContainer(props) {
  return (
    <div className="MainContainer">
        {props.children}
    </div>
  );
}

export { MainContainer };