import React, { Component } from "react";
import classes from "./App.scss";
import Cars from "./Cars/Cars.jsx";
import About from "./About/About.jsx";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import CarDetail from "./CarDetail/CarDetail.jsx";

class App extends Component {
  state = {
    isInLogged: false
  };

  render() {
    return (
      <div>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeStyle={{ color: "blue", fontWeight: "bold" }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: "/cars"
                }}
              >
                Cars
              </NavLink>
            </li>
          </ul>
        </nav>
        <hr />
        <h3>is logged in is {this.state.isInLogged ? 'true' : 'false'}</h3>
        <button onClick={() => this.setState({isInLogged:true})}>login</button>
        <hr />
        <Switch>
          <Route path="/" exact render={() => <h1>Home page</h1>} />
         
          <Route path="/cars/:name" component={CarDetail} />
          <Route path="/cars" component={Cars} />
          {/* <Route render={() => <h1 style={{color:'red'}}>404 not found</h1>} /> */}
          <Redirect to={"/"} />
        </Switch>
      </div>
    );
  }
}

export default App;
