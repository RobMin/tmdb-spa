import React, { Component } from "react";
import injectSheet from "react-jss";
import styles from "./styles";

import IconButton from "@material-ui/core/IconButton";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

import { getFavorites, addFav, remFav } from "../../localStoreFuncs";

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fav: getFavorites().includes(this.props.movie.id)
    };
  }

  handleFavButtonClick = () => {
    const { fav } = this.state;
    if (fav) {
      remFav(this.props.movie.id);
      this.setState({ fav: false });
    } else {
      addFav(this.props.movie.id);
      this.setState({ fav: true });
    }
  }

  render() {
    const { classes, movie } = this.props;
    return (
      <div className={classes.card}>
        <img
          className={classes.image}
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt="Blah"
        />
        <div className={classes.cardBottom}>
          {movie.title}
          <IconButton onClick={this.handleFavButtonClick}>
            {this.state.fav ? (
              <Favorite />
            ) : (
              <FavoriteBorder />
            )}
          </IconButton>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(MovieCard);
