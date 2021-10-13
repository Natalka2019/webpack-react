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

export function* getMovies({
  payload,
}: {
  type: string;
  payload: { offset?: number; limit?: number; search?: string };
}) {
  const { offset = 0, limit = 12, search = "" } = payload;

  const requestParams = `offset=${offset}&limit=${limit}&search=${search}&searchBy=title`;
  try {
    const response: MoviesResponse = yield call(
      api.movies.getMovies,
      requestParams
    );
    console.log(response);
    yield put(actions.movieActions.getMoviesSuccess(response.data));
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
