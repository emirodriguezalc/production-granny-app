import { React, useState } from "react";
import Button from "../button";
import Header from "../header";
import "./styles.css";

const AddMedicine = ({
  medicines,
  setMedicines,
  viewName,
  viewTitle,
  backTo,
}) => {
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const [days, setDays] = useState("");

  const handleMedicines = (e) => {
    e.preventDefault();
    const updatedMedicines = [
      ...medicines,
      {
        text: text,
        taken: false,
        time,
      },
    ];
    setMedicines(updatedMedicines);
    setText("");
    setTime("");
  };

  return (
    <div>
      <Header title={viewName} backTo={backTo} />
      <h1>{viewTitle}</h1>

      <form onSubmit={handleMedicines}>
        <div className="form-group">
          <label htmlFor="time"></label>
          <select
            className="input-component"
            value={time}
            name="time"
            id="dropdown-time"
            onChange={(e) => setTime(e.target.value)}
          >
            <option value="Time of Day">Time of Day</option>
            <option value="morning">Morning</option>
            <option value="midday">Midday</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="name"></label>
          <input
            id="medicine-input"
            className="input-component"
            value={text}
            placeholder="Medicine's Name"
            type="text"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <input type="submit" className="btn" value="Submit" />
      </form>
      <Button title="See my medicines" linkTo="/seeMedicines" size="big" />
    </div>
  );
};

export default AddMedicine;
