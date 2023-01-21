import React from "react";
import "./styles/nav.css";
import clock from "./clock.jpeg";

export const Nav = () => {
  return (
    <div className="nav">
      <img className="nav_logo" src={clock} alt="clock" />
      <div className="nav_brand">Alaram clock</div>
    </div>
  );
};
