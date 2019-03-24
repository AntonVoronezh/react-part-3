import React, { Component } from "react";
import classes from "./App.css";
import Cars from './Cars/Cars.jsx'
import About from './About/About.jsx'
import {Route} from 'react-router-dom'

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
            <li>
              <a href="/cars">Cars</a>
            </li>
          </ul>
        </nav>
       
         <Route path="/" exact render={()=><h1>Home page</h1>} />
         <Route path="/about" exact component={About} />
         <Route path="/cars" exact component={Cars} />
      </div>
    );
  }
}

export default App;
``