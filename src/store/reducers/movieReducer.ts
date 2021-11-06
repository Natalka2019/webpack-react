import { Reducer } from "redux";
import * as types from "../actionTypes";
import * as helpers from "../helpers";
import { IMovie, IMoviesRequestParams } from "models";
import { genresTypes } from "../../common";

interface IRequestStatus {
  loading: boolean;
  success: string | null;
  error: string | null;
}

interface IState {
  movies: IMovie[];
  moviesTotal: number;
  getMoviesStatus: IRequestStatus;
  movie: IMovie | null;
  getMovieStatus: IRequestStatus;
  moviesRequestParams: IMoviesRequestParams;
  addEditMovieStatus: IRequestStatus;
  deleteMovieStatus: IRequestStatus;
  movieModalStatus: boolean;
}

const defaultMoviesRequestParams = {
  search: "",
  limit: 12,
  offset: 0,
  sortBy: "release_date",
  sortOrder: "desc",
  searchBy: "title",
  filter: [],
};

const initialState: IState = {
  movies: [],
  moviesTotal: 0,
  getMoviesStatus: helpers.getDefaultState(),
  movie: null,
  getMovieStatus: helpers.getDefaultState(),
  moviesRequestParams: defaultMoviesRequestParams,
  addEditMovieStatus: helpers.getDefaultState(),
  deleteMovieStatus: helpers.getDefaultState(),
  movieModalStatus: false,
};

const movieReducer: Reducer<IState> = (state = initialState, action) => {
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

      if (payload.filter) {
        const updatedFilter = payload.filter.includes(genresTypes.All)
          ? [genresTypes.All]
          : Array.from(
              new Set([
                ...state.moviesRequestParams.filter.filter(
                  (el) => el !== genresTypes.All
                ),
                ...payload.filter,
              ])
            );
        return {
          ...state,
          moviesRequestParams: {
            ...state.moviesRequestParams,
            filter: updatedFilter,
          },
        };
      }
      return {
        ...state,
        moviesRequestParams: { ...state.moviesRequestParams, ...payload },
      };
    }
    case types.ADD_EDIT_MOVIE: {
      return {
        ...state,
        addEditMovieStatus: helpers.getRequestState(),
      };
    }
    case types.ADD_EDIT_MOVIE_SUCCESS: {
      return {
        ...state,
        addEditMovieStatus: helpers.getSuccessState(
          "Action completed successfully!"
        ),
      };
    }
    case types.ADD_EDIT_MOVIE_FAILURE: {
      const { payload } = action;
      return {
        ...state,
        addEditMovieStatus: helpers.getErrorState(payload),
      };
    }
    case types.DELETE_MOVIE: {
      return {
        ...state,
        deleteMovieStatus: helpers.getRequestState(),
      };
    }
    case types.DELETE_MOVIE_SUCCESS: {
      return {
        ...state,
        deleteMovieStatus: helpers.getSuccessState("Deleted successfully!"),
      };
    }
    case types.DELETE_MOVIE_FAILURE: {
      const { payload } = action;
      return {
        ...state,
        deleteMovieStatus: helpers.getErrorState(payload),
      };
    }
    case types.MOVIE_MODAL_STATUS_TOGGLE: {
      return {
        ...state,
        movieModalStatus: action.payload,
      };
    }
    case types.CLEAR_MOVIES_LIST: {
      return {
        ...state,
        movies: [],
        moviesRequestParams: defaultMoviesRequestParams,
      };
    }
    default:
      return state;
  }
};

export default movieReducer;
