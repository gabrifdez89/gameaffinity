import React from 'react';
import './index.css';

function GamesList(props) {
  return (
    <div className="GamesList">
        {props.children}
    </div>
  );
}

export { GamesList };