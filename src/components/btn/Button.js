import React from 'react';
import './Button.css';

function Button(props) {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.label}
    </button>
  );
}

export default Button;