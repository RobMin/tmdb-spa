import React, { Component } from "react";
import injectSheet from "react-jss";
import styles from "./styles";

import Input from "@material-ui/core/Input";
import { Link } from "react-router-dom";
import { logOut, clearFav } from "../../localStoreFuncs";
import logo from "../../Pic/logo.png";

class NavBar extends Component {
  handleSearchChange = e => {
    if (e.target.value === "") {
      this.props.getPopularMovies();
    } else {
      this.props.getMoviesBySearch(e.target.value);
    }
  };

  handleLogout = () => {
    logOut();
    clearFav();
  };

  render() {
    const { classes, showSearch } = this.props;
    return (
      <div className={classes.navBar}>
        <div className={classes.flexRow}>
          <Link to="/movies/popular">
            <img className={classes.logo} src={logo} alt="Just a Logo" />
          </Link>
          <div className={classes.button}>
            <Link className={classes.textDecor} to="/movies/favorites">
              Favorites
            </Link>
          </div>
        </div>
        {showSearch && (
          <Input
            className={classes.input}
            placeholder="Search"
            onChange={this.handleSearchChange}
            error
          />
        )}
        <div onClick={this.handleLogout} className={classes.button}>
          <Link className={classes.textDecor} to="/login">
            Log Out
          </Link>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(NavBar);
