import React from "react";
import "./styles/alaram.css";
import { Card } from "./card";

export const Alaram = () => {
  const date = new Date();
  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  return (
    <div className="main">
      <h1 className="main_text">Alaram Clock</h1>
      <h1 className="main_time">{showTime}</h1>
      <Card />
    </div>
  );
};
