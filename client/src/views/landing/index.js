import React from "react";

import "./styles.css";
import Button from "../../components/button";
import grandma from "../../media/grandma.jpg";
const Landing = () => {
  return (
    <section class="landing-wrapper">
      <h1 class="landing-title">Granny App</h1>
      <img src={grandma} alt="grandma" class="landing-image" />
      <Button title="Tap me to begin" linkTo="login1" size="big"></Button>
    </section>
  );
};

export default Landing;
