import React from 'react';
import "./styles.css";
import Button from '../../components/button';
import Header from '../../components/header';
import Row from '../../components/row';

const MyScore = ({ data }) => {
 let sum = 0;
 return (
  <section className="myscore-section">
   <Header title="My score" backTo="/haveFunMenu" />
   <h1 className="myscore-title">My score section</h1>
   <div className="myscore-board">
    {
     data.points.map(items => {
      sum += items.points
      return <Row title={items.title} value={items.points} type="normal" />
     })
    }
    <Row title="Total" value={sum} type="inverted" />
   </div>

   <Button title="Weekly Board" linkTo="/weeklyBoard" size="small" />
  </section>
 )
};

export default MyScore;
