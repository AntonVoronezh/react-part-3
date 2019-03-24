import React, { Component } from "react";
import classes from "./App.css";
import Cars from './Cars/Cars.jsx'
import About from './About/About.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <nav className={classes.nav}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
        <About />
        <Cars />
      </div>
    );
  }
}

export default App;
