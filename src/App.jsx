import React, { Component } from "react";
import classes from "./App.scss";
import Cars from './Cars/Cars.jsx'
import About from './About/About.jsx'
import {Route, NavLink} from 'react-router-dom'

class App extends Component {

  render() {
    
    return (
      <div>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink to="/" exact>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeStyle={{color:'blue',fontWeight:'bold'}}>About</NavLink>
            </li>
            <li>
              <NavLink to={{
                pathname:"/cars"
              }}>Cars</NavLink>
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