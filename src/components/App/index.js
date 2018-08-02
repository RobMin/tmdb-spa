import React, { Component } from "react";
import injectSheet from "react-jss";
import styles from "./styles";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "../Login";
import Popular from "../../containers/Popular";
import Favorites from "../../containers/Favorites";
import PrivateRoute from "../PrivateRoute";

import { getIsAuth } from "../../localStoreFuncs";
import image from "../../Pic/backgroundImage.jpg";

class App extends Component {
  render() {
    const { classes } = this.props;
    const isAuth = getIsAuth();
    return (
      <Router>
        <div className={classes.back}>
          <img className={classes.image} src={image} alt="text" />
          <Switch>
            <Route path="/movies/favorites" component={Favorites} />
            <Route path="/movies/popular" component={Popular} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute isAuth={isAuth} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default injectSheet(styles)(App);
