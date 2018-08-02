import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { getIsAuth } from "../../localStoreFuncs";

export default class PrivateRoute extends Component {
  render() {
    const isAuth = getIsAuth();
    return (
      <Route
        render={() =>
          isAuth ? <Redirect to="/movies/popular" /> : <Redirect to="/login" />
        }
      />
    );
  }
}
