import React from 'react';
import "./styles.css";

const Input = ({ placeholder }) => (
 <input type="text" placeholder={placeholder} className="input-component" autoComplete="off"></input>
);

export default Input;
