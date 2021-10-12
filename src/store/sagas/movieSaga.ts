import { put, call, takeEvery, all } from "redux-saga/effects";
import * as types from "../actionTypes";
import * as api from "../../api";
import * as actions from "../actions";
import { IMovie } from "models";

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

export function* getMovies() {
  try {
    const response: MoviesResponse = yield call(api.movies.getMovies);
    console.log(response);
    yield put(actions.movieActions.getMoviesSuccess(response.data.data));
  } catch (error) {
    console.log(error);
    yield put(actions.movieActions.getMoviesFailure(error));
  }
}

export function* getMovie({ payload }: { type: string; payload: number }) {
  try {
    const response: MovieResponse = yield call(api.movies.getMovie, payload);
    console.log(response);
    yield put(actions.movieActions.getMovieSuccess(response.data));
  } catch (error) {
    console.log(error);
    yield put(actions.movieActions.getMovieFailure(error));
  }
}

export default function* watch() {
  yield all([
    takeEvery(types.GET_MOVIES, getMovies),
    takeEvery(types.GET_MOVIE, getMovie),
  ]);
}
