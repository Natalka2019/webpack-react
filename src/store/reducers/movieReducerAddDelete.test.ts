import * as types from "../actionTypes";
import movieReducer from "./movieReducer";
import * as helpers from "../helpers";

describe("Movie reducer - edd/edit and delete", () => {
  test("should handle ADD_EDIT_MOVIE", () => {
    expect(
      movieReducer(
        {
          movies: [],
          moviesTotal: 0,
          getMoviesStatus: helpers.getDefaultState(),
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
        { type: types.ADD_EDIT_MOVIE }
      )
    ).toEqual({
      movies: [],
      moviesTotal: 0,
      getMoviesStatus: helpers.getDefaultState(),
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
      addEditMovieStatus: helpers.getRequestState(),
      deleteMovieStatus: helpers.getDefaultState(),
      movieModalStatus: false,
    });
  });
  test("should handle ADD_EDIT_MOVIE_SUCCESS", () => {
    const payload = "Action completed successfully!";
    expect(
      movieReducer(
        {
          movies: [],
          moviesTotal: 0,
          getMoviesStatus: helpers.getDefaultState(),
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
          addEditMovieStatus: helpers.getRequestState(),
          deleteMovieStatus: helpers.getDefaultState(),
          movieModalStatus: false,
        },
        { type: types.ADD_EDIT_MOVIE_SUCCESS, payload }
      )
    ).toEqual({
      movies: [],
      moviesTotal: 0,
      getMoviesStatus: helpers.getDefaultState(),
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
      addEditMovieStatus: helpers.getSuccessState(payload),
      deleteMovieStatus: helpers.getDefaultState(),
      movieModalStatus: false,
    });
  });
  test("should handle ADD_EDIT_MOVIE_FAILURE", () => {
    const payload = "Error";
    expect(
      movieReducer(
        {
          movies: [],
          moviesTotal: 0,
          getMoviesStatus: helpers.getDefaultState(),
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
          addEditMovieStatus: helpers.getRequestState(),
          deleteMovieStatus: helpers.getDefaultState(),
          movieModalStatus: false,
        },
        { type: types.ADD_EDIT_MOVIE_FAILURE, payload }
      )
    ).toEqual({
      movies: [],
      moviesTotal: 0,
      getMoviesStatus: helpers.getDefaultState(),
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
      addEditMovieStatus: helpers.getErrorState(payload),
      deleteMovieStatus: helpers.getDefaultState(),
      movieModalStatus: false,
    });
  });
  test("should handle DELETE_MOVIE", () => {
    expect(
      movieReducer(
        {
          movies: [],
          moviesTotal: 0,
          getMoviesStatus: helpers.getDefaultState(),
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
        { type: types.DELETE_MOVIE }
      )
    ).toEqual({
      movies: [],
      moviesTotal: 0,
      getMoviesStatus: helpers.getDefaultState(),
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
      deleteMovieStatus: helpers.getRequestState(),
      movieModalStatus: false,
    });
  });
  test("should handle DELETE_MOVIE_SUCCESS", () => {
    const payload = "Deleted successfully!";
    expect(
      movieReducer(
        {
          movies: [],
          moviesTotal: 0,
          getMoviesStatus: helpers.getDefaultState(),
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
          deleteMovieStatus: helpers.getRequestState(),
          movieModalStatus: false,
        },
        { type: types.DELETE_MOVIE_SUCCESS, payload }
      )
    ).toEqual({
      movies: [],
      moviesTotal: 0,
      getMoviesStatus: helpers.getDefaultState(),
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
      deleteMovieStatus: helpers.getSuccessState(payload),
      movieModalStatus: false,
    });
  });
  test("should handle DELETE_MOVIE_FAILURE", () => {
    const payload = "Error";
    expect(
      movieReducer(
        {
          movies: [],
          moviesTotal: 0,
          getMoviesStatus: helpers.getDefaultState(),
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
          deleteMovieStatus: helpers.getRequestState(),
          movieModalStatus: false,
        },
        { type: types.DELETE_MOVIE_FAILURE, payload }
      )
    ).toEqual({
      movies: [],
      moviesTotal: 0,
      getMoviesStatus: helpers.getDefaultState(),
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
      deleteMovieStatus: helpers.getErrorState(payload),
      movieModalStatus: false,
    });
  });
});
