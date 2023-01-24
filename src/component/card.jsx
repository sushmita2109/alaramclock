import React, { useState } from "react";
import TimePicker from "react-time-picker";
import "./styles/card.css";

export const Card = () => {
  const [value, onChange] = useState("00:00");
  const clickHandler = () => {
    setInterval(checkTime, 1000);
  };
  const checkTime = () => {
    const currTime = new Date();
    const showTime = currTime.getHours() + ":" + currTime.getMinutes();
    console.log({ showTime });
    console.log({ value });
    if (showTime === value) {
      onChange("");

      alert("It's Time");
    }
  };
  //   useEffect(() => {
  //     setInterval(checkTime, 1000);
  //   }, []);
  return (
    <div className="card">
      <TimePicker onChange={onChange} value={value} />
      <button onClick={clickHandler}>Set alaram</button>
    </div>
  );
};

//user input alarm time.

/**
 *
 * setInterval(checkTime, 1000);
 *
 * const checkTime =() =>{
 *
 * const currentTime = new Date();
 * if(currentTime === userInputAlarmTIme){
 * alert("Its time")
 * }
 * }
 */
