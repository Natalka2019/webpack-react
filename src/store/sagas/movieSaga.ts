import { put, call, takeEvery, all, select } from "redux-saga/effects";
import * as types from "../actionTypes";
import * as api from "../../api";
import * as actions from "../actions";
import { IMovie, IMoviesRequestParams } from "models";
import { RootState } from "store/reducers";

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

export function* getMovies() {
  const params: IMoviesRequestParams = yield select(moviesRequestParams);

  const { search, searchBy, filter, ...basicQuery } = params;

  let queryString: string = Object.keys(basicQuery)
    .map((key) => `${key}=${encodeURIComponent((basicQuery as any)[key])}`)
    .join("&");

  if (search) {
    queryString = `${queryString}&search=${search}&searchBy=${searchBy}`;
  }

  if (!filter.includes("All")) {
    queryString = `${queryString}&filter=${filter.join("%2C%20")}`;
  }

  console.log(queryString);

  try {
    const response: MoviesResponse = yield call(
      api.movies.getMovies,
      queryString
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
