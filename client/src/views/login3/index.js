import React from "react";
import Button from "../../components/button";
import "./styles.css";
import tick from "../../media/tick.svg";

const Login3 = () => {
  return (
    <div class="loggedin-wrapper">
      <h2 class="loggedin-header">
        Granny <br />
        App
      </h2>
      <h1 class="loggedin-title">We are all set!</h1>
      <img class="loggedin-tick" src={tick} alt="tick icon" />
      <h2 class="loggedin-subtitle">
        Feel free to explore the app. It is designed for you
      </h2>
      <Button size="big" linkTo="/" title="Tap me to begin!"></Button>
    </div>
  );
};

export default Login3;
