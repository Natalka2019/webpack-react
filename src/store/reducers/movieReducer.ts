import { Reducer } from "redux";
import * as types from "../actionTypes";
import * as helpers from "../helpers";
import { IMovie } from "models";

interface State {
  movies: IMovie[];
  moviesTotal: number;
  getMoviesStatus: {
    loading: boolean;
    success: string | null;
    error: string | null;
  };
  movie: IMovie | null;
  getMovieStatus: {
    loading: boolean;
    success: string | null;
    error: string | null;
  };
}

const initialState: State = {
  movies: [],
  moviesTotal: 0,
  getMoviesStatus: helpers.getDefaultState(),
  movie: null,
  getMovieStatus: helpers.getDefaultState(),
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
        movies: [...state.movies, ...payload.data],
        moviesTotal: payload.totalAmount,
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
    case types.GET_MOVIE: {
      return {
        ...state,
        getMovieStatus: helpers.getRequestState(),
      };
    }
    case types.GET_MOVIE_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        movie: payload,
        getMovieStatus: helpers.getSuccessState("Success!"),
      };
    }
    case types.GET_MOVIE_FAILURE: {
      const { payload } = action;
      return {
        ...state,
        getMovieStatus: helpers.getErrorState(payload),
      };
    }
    case types.CLEAR_GET_MOVIE_STATUS: {
      return {
        ...state,
        getMovieStatus: helpers.getDefaultState(),
      };
    }
    default:
      return state;
  }
};

export default movieReducer;
