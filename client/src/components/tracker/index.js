import React from 'react';
import Button from '../button';
import Header from '../header';
import './styles.css';
import './toggle.css';
import water from '../../icons/water.png'
import pill from '../../icons/pill.png'
import pizza from '../../icons/pizza.png'

let timeOfDay;
const hour = new Date().getHours();

if (hour < 12) {
  timeOfDay = 'morning';
}
if (12 <= hour && hour < 14) {
  timeOfDay = 'midday';
}
if (14 <= hour && hour < 18) {
  timeOfDay = 'afternoon';
}
if (18 <= hour && hour < 24) {
  timeOfDay = 'evening';
}

const Tracker = ({ list, viewTitle, viewName, backTo, screen }) => {
  let newList = [...list];
  const glass = <img className="icon" src={water} />;

  const food = <img className="icon" src={pizza} />;

  const medicines = <img className="icon" src={pill} />;


  let medicineWithCorrectTime = [];
  if (list.length > 0) {
    if (Object.keys(list[0]).some(key => key === 'time')) {
      medicineWithCorrectTime = list.filter(medicine => {
        return medicine.time === timeOfDay;
      });
    }
  }

  if (medicineWithCorrectTime.length > 0) {
    newList = [...medicineWithCorrectTime];
  }

  return (
    <div className={viewName}>
      <Header title={viewName} backTo={backTo} />
      <h2 className="tracker-view-title">{viewTitle}</h2>
      <div className="tracker-wrapper">
        {newList.map(l => (
          <section className="section--text">
            <div className="text-container">
              <span className="text-span">
                {l.text}
              </span>
              {viewName === "Water tracker" && glass} {viewName === "Food tracker" && food} {viewName === "See medicines" && medicines}
            </div>
            <div className="toggle-wrapper">
              <input name={l.text} id={l.text} type="checkbox" />
              <label for={l.text}> </label>
            </div>
          </section>
        ))}
      </div>
      <Button title="Submit and go back" linkTo="/bodyMenu" size="big" />
    </div>
  );
};

export default Tracker;
