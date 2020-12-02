import React from 'react';
import "./styles.css";
import arrowLeft from "../../icons/arrow-left.svg"
import home from "../../icons/home.svg"
import {
 Link
} from "react-router-dom";

const Header = ({ title, backTo }) => (
 <section className="header-section">

  <Link to={backTo}>
   <img className="icon--action" src={arrowLeft} alt="icon--back" />
  </Link>
  <h2 className="logo--text">
   {title}
  </h2>
  <Link to="/">
   <img className="icon--action" src={home} alt="icon--home" />
  </Link>
 </section>
);

export default Header;
