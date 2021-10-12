import { Reducer } from "redux";
import * as types from "../actionTypes";
import * as helpers from "../helpers";
import { IMovie } from "models";

interface State {
  movies: IMovie[];
  getMoviesStatus: {
    loading: boolean;
    success: string | null;
    error: string | null;
  };
}

const initialState: State = {
  movies: [],
  getMoviesStatus: helpers.getDefaultState(),
};

const movieReducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_MOVIES: {
      return {
        ...state,
        getMoviesStatus: helpers.getRequestState(),
      };
    }
    case types.GET_MOVIES_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        movies: payload,
        getMoviesStatus: helpers.getSuccessState("Success!"),
      };
    }
    case types.GET_MOVIES_FAILURE: {
      const { payload } = action;
      return {
        ...state,
        getMoviesStatus: helpers.getErrorState(payload),
      };
    }
    case types.CLEAR_GET_MOVIES_STATUS: {
      return {
        ...state,
        getMoviesStatus: helpers.getDefaultState(),
      };
    }
    default:
      return state;
  }
};

export default movieReducer;
