import React from 'react';
import Button from '../../components/button';
import facebookIcon from '../../icons/facebook.svg';
import googleIcon from '../../icons/google-plus.svg';
import instagramIcon from '../../icons/instagram.svg';
import './Login1.css';

const Login1 = () => {
  return (
    <div className="login1">
      <div className="logo">
        <h2 className="logo--text">Granny App</h2>
      </div>
      <div className="section--title">
        <h1>We need some information first</h1>
      </div>
      <div className="section--content">
        <h3>Tap one icon to sign up</h3>
        <div className="icon-wrapper">
          <img className="icon--login" src={facebookIcon} alt="facebook icon" />
          <img
            className="icon--login"
            src={instagramIcon}
            alt="instagram icon"
          />
          <img
            className="icon--login"
            src={googleIcon}
            alt="google plus icon"
          />
        </div>
      </div>
      <Button linkTo="/register" title="Tap here to do it manually" />
    </div>
  );
};

export default Login1;
