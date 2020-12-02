import React from 'react';
import "./styles.css";
import {
 Link
} from "react-router-dom";

const Button = ({ title, linkTo, size }) => (
 <Link to={linkTo} className={`button-component button-${size}`}>
  {title}
 </Link>
);

export default Button;
