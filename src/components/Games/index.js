import React from 'react';
import './index.css';

function Games(props) {
  return (
    <div className="Games">
        {props.children}
    </div>
  );
}

export { Games };