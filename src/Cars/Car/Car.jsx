import React from "react";
import classes from "./Car.css";

export default props => {
  return (
    <div className={classes.Car}>
      <h1>Car name : {props.name}</h1>
      Car year : {props.year}
    </div>
  );
};
