import React from "react";
import classes from "./Car.css";
import { withRouter } from "react-router-dom";

const Car = props => {
  // console.log(props)
  return (
    <div
      className={classes.Car}
    >
      <h1>Car name : {props.name}</h1>
      Car year : {props.year}
    </div>
  );
};

export default withRouter(Car);
