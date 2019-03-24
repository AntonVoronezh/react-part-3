import React, { Component } from "react";
import Car from "./Car/Car.jsx";

class Cars extends Component {
  state = {
    cars: [
      { name: "Audi", year: 2010 },
      { name: "Ford", year: 2011 },
      { name: "Vaz", year: 2012 }
    ]
  };
  render() {
    return (
      <div
        style={{
          width: 400,
          margin: "auto",
          paddingTop: 20
        }}
      >
        {this.state.cars.map((elem, i) => {
          return <Car key={i} name={elem.name} year={elem.year} />;
        })}
      </div>
    );
  }
}

export default Cars;
