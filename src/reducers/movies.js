import { GET_MOVIES_SUCCESS, GET_MOVIES_FAIL } from "../constants";

export const movies = (state = [], action) => {
  switch (action.type) {
    case GET_MOVIES_SUCCESS: {
      return action.movies;
    }
    case GET_MOVIES_FAIL: {
      return [];
    }
    default:
      return state;
  }
};

export default movies;
