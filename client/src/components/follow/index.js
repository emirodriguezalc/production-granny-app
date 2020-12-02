import React from 'react';
import "./styles.css";
import Button from '../../components/button';
import Header from '../../components/header';
import Input from '../../components/input';

const Follow = ({ config }) => (
 <section className="follow-section">
  <Header title={config.viewTitle} backTo={config.backTo} />
  <h1 className="follow-title">{config.title}</h1>
  <Input placeholder={config.placeholder} />
  <h2 className="follow-subtitle">{config.subtitle}</h2>
  <Button title="Tap me to submit!" linkTo={config.linkTo} size="big" />
 </section>
);

export default Follow;
