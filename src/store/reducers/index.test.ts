import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import * as types from "../actionTypes";
import * as helpers from "../helpers";

describe("Reducer", () => {
  test("returns a composite reducer that maps the state keys to given reducers", () => {
    const reducer = combineReducers({ movieReducer });
    const state1 = reducer(undefined, { type: types.GET_MOVIES });
    expect(state1).toEqual({
      movieReducer: {
        movies: [],
        moviesTotal: 0,
        getMoviesStatus: helpers.getRequestState(),
        movie: null,
        getMovieStatus: helpers.getDefaultState(),
        moviesRequestParams: {
          search: "",
          limit: 12,
          offset: 0,
          sortBy: "release_date",
          sortOrder: "desc",
          searchBy: "title",
          filter: [],
        },
        addEditMovieStatus: helpers.getDefaultState(),
        deleteMovieStatus: helpers.getDefaultState(),
        movieModalStatus: false,
      },
    });
  });
});
