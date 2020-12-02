import React from 'react';
import "./styles.css";

const Row = ({ title, value, type }) => (
 <span className={`row-span ${type}`}>{title}: {value}</span>
);

export default Row;
