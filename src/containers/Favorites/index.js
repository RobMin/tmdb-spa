import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getFavMovies } from "../../actions";

import Favorites from "../../components/Favorites";

function mapStatetoProps(state) {
  return {
    movies: state.movies
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ getFavMovies }, dispatch);
}

export default connect(
  mapStatetoProps,
  matchDispatchToProps
)(Favorites);
