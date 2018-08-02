import React, { Component } from "react";
import injectSheet from "react-jss";
import styles from "./styles";

import { Redirect } from "react-router-dom";

import MovieCard from "../MovieCard";
import NavBar from "../../containers/NavBar";
import { getIsAuth } from "../../localStoreFuncs";

class Popular extends Component {
  render() {
    const { classes, movies } = this.props;
    const isAuth = getIsAuth();
    if (!isAuth) return <Redirect to="/login" />;
    return (
      <div>
        <NavBar showSearch={true} />
        <div className={classes.main}>
          {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.getPopularMovies();
  }
}

export default injectSheet(styles)(Popular);
