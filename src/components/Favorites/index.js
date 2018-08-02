import React, { Component } from "react";
import injectSheet from "react-jss";
import styles from "./styles";

import { Redirect } from "react-router-dom";

import MovieCard from "../MovieCard";
import NavBar from "../../containers/NavBar";
import { getIsAuth } from "../../localStoreFuncs";

class Favorites extends Component {
  render() {
    const { classes, movies } = this.props;
    const isAuth = getIsAuth();
    if (!isAuth) return <Redirect to="/login" />;
    return (
      <div>
        <NavBar showSearch={false}/>
        <div className={classes.main}>
          {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.getFavMovies();
  }
}

export default injectSheet(styles)(Favorites);
