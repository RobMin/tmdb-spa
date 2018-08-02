import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getMoviesBySearch, getPopularMovies } from "../../actions";

import NavBar from "../../components/NavBar";

function mapStatetoProps(state) {
  return {
    movies: state.movies,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ getMoviesBySearch, getPopularMovies }, dispatch);
}

export default connect(
  mapStatetoProps,
  matchDispatchToProps
)(NavBar);
