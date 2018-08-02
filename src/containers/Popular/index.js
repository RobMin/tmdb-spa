import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPopularMovies } from "../../actions";

import Popular from "../../components/Popular";

function mapStatetoProps(state) {
  return {
    movies: state.movies,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ getPopularMovies }, dispatch);
}

export default connect(
  mapStatetoProps,
  matchDispatchToProps
)(Popular);
