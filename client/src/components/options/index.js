import React from 'react';
import "./styles.css";
import Button from '../../components/button';
import Header from '../../components/header';

const Options = ({ data }) => (
 <section className="options-section">
  <Header title={data.title} backTo={data.backTo} />
  {
   data.buttons.map(button => {
    return <Button title={button.title} linkTo={button.linkTo} size={button.size} />
   })
  }
 </section>
);

export default Options;
