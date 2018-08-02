import { GET_MOVIES_SUCCESS, GET_MOVIES_FAIL } from "../constants";
import fetch from "cross-fetch";
import { getFavorites } from "../localStoreFuncs";

export const getPopularMovies = (page = 1) => dispatch => {
  fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=5bd9acca54182b3e04ea3b527c3e920a&language=en-US&page=${page}`
  )
    .then(data => data.json(), e => console.log("fetch error: ", e))
    .then(data => dispatch(getMoviesSuccess(data.results)))
    .catch(error => dispatch(getMoviesFail(error)));
};

export const getMoviesBySearch = str => dispatch => {
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=5bd9acca54182b3e04ea3b527c3e920a&language=en-US&query=${str}&include_adult=true`
  )
    .then(data => data.json(), e => console.log("fetch error: ", e))
    .then(data => dispatch(getMoviesSuccess(data.results)))
    .catch(error => dispatch(getMoviesFail(error)));
};

export const getFavMovies = () => dispatch => {
  const favMoviesIds = getFavorites();
  Promise.all(
    favMoviesIds.map(id =>
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=5bd9acca54182b3e04ea3b527c3e920a`
      )
    )
  )
    .then(data => Promise.all(data.map(v => v.json())))
    .then(data => dispatch(getMoviesSuccess(data)))
    .catch(error => dispatch(getMoviesFail(error)));
};

function getMoviesSuccess(movies) {
  return { type: GET_MOVIES_SUCCESS, movies };
}

function getMoviesFail(error) {
  return { type: GET_MOVIES_FAIL, error };
}
