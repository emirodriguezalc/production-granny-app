import React from 'react';
import Button from '../button';
import Header from '../header';
import './styles.css';
import './toggle.css';

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

const Tracker = ({ list, viewTitle, viewName, backTo }) => {
  let newList = [...list];

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
      <div className="tracker-wrapper">
        <h2>{viewTitle}</h2>
        {newList.map(l => (
          <section className="section--text">
            {l.text}
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
