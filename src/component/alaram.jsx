import React from "react";

export const Alaram = () => {
  const date = new Date();
  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  return (
    <div className="main">
      <h1>Alaram Clock</h1>
      <h1>{showTime}</h1>
      <button>Add Alaram</button>
    </div>
  );
};
