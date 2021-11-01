import { put, call, takeEvery, all, select } from "redux-saga/effects";
import * as types from "../actionTypes";
import * as api from "../../api";
import * as actions from "../actions";
import { IMovie, IMoviesRequestParams } from "models";
import { RootState } from "store/reducers";
import { toast } from "react-toastify";
import { genresTypes } from "common";

interface MoviesResponse {
  config: any;
  data: {
    data: IMovie[];
    limit: number;
    offset: number;
    totalAmount: number;
  };
  headers: any;
  request: any;
  status: number;
  statusTest: string;
}

interface MovieResponse {
  config: any;
  data: IMovie;
  headers: any;
  request: any;
  status: number;
  statusTest: string;
}

const moviesRequestParams = (state: RootState) =>
  state.movieReducer.moviesRequestParams;
const movie = (state: RootState) => state.movieReducer.movie;

export function* getMovies() {
  const params: IMoviesRequestParams = yield select(moviesRequestParams);

  const { search, searchBy, filter, ...basicQuery } = params;

  let queryString: string = Object.keys(basicQuery)
    .map((key) => `${key}=${encodeURIComponent((basicQuery as any)[key])}`)
    .join("&");

  if (search) {
    queryString = `${queryString}&search=${search}&searchBy=${searchBy}`;
  }

  if (!filter.includes(genresTypes.All)) {
    queryString = `${queryString}&filter=${filter.join("%2C%20")}`;
  }

  try {
    const response: MoviesResponse = yield call(
      api.movies.getMovies,
      queryString
    );
    yield put(actions.movieActions.getMoviesSuccess(response.data));
  } catch (error: any) {
    yield put(actions.movieActions.getMoviesFailure(error));
    toast.error(`Error: ${error.response.data.messages.join(" ,")}`, {
      theme: "dark",
    });
  }
}

export function* getMovie({ payload }: { type: string; payload: number }) {
  try {
    const response: MovieResponse = yield call(api.movies.getMovie, payload);
    yield put(actions.movieActions.getMovieSuccess(response.data));
  } catch (error: any) {
    toast.error(`Error: ${error.response.data.messages.join(" ,")}`, {
      theme: "dark",
    });
    yield put(actions.movieActions.getMovieFailure(error));
  }
}

export function* addEditMovie({ payload }: { type: string; payload: IMovie }) {
  try {
    let response: MovieResponse;

    if (payload.id) {
      response = yield call(api.movies.editMovie, payload);
    } else {
      response = yield call(api.movies.addMovie, payload);
    }

    yield put(actions.movieActions.addEditMovieSuccess(response.data));
    yield put(actions.movieActions.movieModalStatusToggle(false));
    yield put(actions.movieActions.getMovies());

    const movieDetails: IMovie = yield select(movie);
    if (movieDetails?.id && movieDetails?.id === response.data.id) {
      yield put(actions.movieActions.getMovie(movieDetails?.id));
    }

    toast.success(`Movie successfully saved!`, {
      theme: "dark",
    });
  } catch (error: any) {
    toast.error(`Error: ${error.response.data.messages.join(" ,")}`, {
      theme: "dark",
    });
    yield put(actions.movieActions.addEditMovieFailure(error));
  }
}

export function* deleteMovie({ payload }: { type: string; payload: number }) {
  try {
    const response: MovieResponse = yield call(api.movies.deleteMovie, payload);
    yield put(actions.movieActions.deleteMovieSuccess(response.data));
    toast.success(`Movie has been deleted!`, {
      theme: "dark",
    });
  } catch (error: any) {
    toast.error(`Error: ${error.response.data.messages.join(" ,")}`, {
      theme: "dark",
    });
    yield put(actions.movieActions.deleteMovieFailure(error));
  }
}

export default function* watch() {
  yield all([
    takeEvery(types.GET_MOVIES, getMovies),
    takeEvery(types.GET_MOVIE, getMovie),
    takeEvery(types.ADD_EDIT_MOVIE, addEditMovie),
    takeEvery(types.DELETE_MOVIE, deleteMovie),
  ]);
}
