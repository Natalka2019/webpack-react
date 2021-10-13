import { Reducer } from "redux";
import * as types from "../actionTypes";
import * as helpers from "../helpers";
import { IMovie, IMoviesRequestParams } from "models";

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
  moviesRequestParams: IMoviesRequestParams;
}

const defaultMoviesRequestParams = {
  search: "",
  limit: 12,
  offset: 2970,
  sortBy: "release_date",
  sortOrder: "desc",
  searchBy: "title",
  filter: [],
};

const initialState: State = {
  movies: [],
  moviesTotal: 0,
  getMoviesStatus: helpers.getDefaultState(),
  movie: null,
  getMovieStatus: helpers.getDefaultState(),
  moviesRequestParams: defaultMoviesRequestParams,
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
      console.log(payload.data);
      return {
        ...state,
        movies:
          state.moviesRequestParams.offset > 0
            ? [...state.movies, ...payload.data]
            : payload.data,
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
    case types.UPDATE_MOVIES_REQUEST_PARAMS: {
      const { payload } = action;
      return {
        ...state,
        moviesRequestParams: { ...state.moviesRequestParams, ...payload },
      };
    }
    default:
      return state;
  }
};

export default movieReducer;
