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

  goToHomePage = () => {
    this.props.history.push({
      pathname: '/'
    })
  }

  render() {
    // console.log(this.props)
    return (
      <div
        style={{
          width: 400,
          margin: "auto",
          paddingTop: 20,
          textAlign: 'center'
        }}
      >
      <button onClick={this.goToHomePage}>на главную</button>
      <hr/>
        {this.state.cars.map((elem, i) => {
          return <Car key={i} name={elem.name} year={elem.year} />;
        })}
      </div>
    );
  }
}

export default Cars;
