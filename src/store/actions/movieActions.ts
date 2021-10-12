import * as types from "../actionTypes";
import { IMovie } from "models";

export const getMovies = () => ({
  type: types.GET_MOVIES,
});

export const getMoviesSuccess = (payload: IMovie[]) => ({
  type: types.GET_MOVIES_SUCCESS,
  payload,
});

export const getMoviesFailure = (payload: any) => ({
  type: types.GET_MOVIES_FAILURE,
  payload,
});

export const clearGetMoviesStatus = () => ({
  type: types.CLEAR_GET_MOVIES_STATUS,
});

export const getMovie = (payload: number) => ({
  type: types.GET_MOVIE,
  payload,
});

export const getMovieSuccess = (payload: IMovie) => ({
  type: types.GET_MOVIE_SUCCESS,
  payload,
});

export const getMovieFailure = (payload: any) => ({
  type: types.GET_MOVIE_FAILURE,
  payload,
});

export const clearGetMovieStatus = () => ({
  type: types.CLEAR_GET_MOVIE_STATUS,
});
