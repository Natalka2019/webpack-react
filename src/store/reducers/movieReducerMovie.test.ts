import * as types from "../actionTypes";
import movieReducer from "./movieReducer";
import * as helpers from "../helpers";

describe("Movie reducer - movie", () => {
  test("should handle GET_MOVIE", () => {
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
        { type: types.GET_MOVIE }
      )
    ).toEqual({
      movies: [],
      moviesTotal: 0,
      getMoviesStatus: helpers.getDefaultState(),
      movie: null,
      getMovieStatus: helpers.getRequestState(),
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
    });
  });
  test("should handle GET_MOVIE_SUCCESS", () => {
    const payload = {
      id: 10,
      title: "Meet Joe Black",
      genres: ["Fantasy"],
      vote_average: 7.2,
      release_date: "1998-01-01",
      overview:
        "Death, who takes the form of a young man, asks a media mogul to act as a guide to teach him about life on Earth, and in the process, he falls in love with his guide's daughter.",
      runtime: 181,
      poster_path:
        "https://www.themoviedb.org/t/p/original/baH1LWTmKooo35s9YXkGabDJJaG.jpg",
    };
    expect(
      movieReducer(
        {
          movies: [],
          moviesTotal: 0,
          getMoviesStatus: helpers.getDefaultState(),
          movie: null,
          getMovieStatus: helpers.getRequestState(),
          moviesRequestParams: {
            search: "",
            limit: 12,
            offset: 1,
            sortBy: "release_date",
            sortOrder: "desc",
            searchBy: "title",
            filter: [],
          },
          addEditMovieStatus: helpers.getDefaultState(),
          deleteMovieStatus: helpers.getDefaultState(),
          movieModalStatus: false,
        },
        {
          type: types.GET_MOVIE_SUCCESS,
          payload,
        }
      )
    ).toEqual({
      movies: [],
      moviesTotal: 0,
      getMoviesStatus: helpers.getDefaultState(),
      movie: payload,
      getMovieStatus: helpers.getSuccessState("Success!"),
      moviesRequestParams: {
        search: "",
        limit: 12,
        offset: 1,
        sortBy: "release_date",
        sortOrder: "desc",
        searchBy: "title",
        filter: [],
      },
      addEditMovieStatus: helpers.getDefaultState(),
      deleteMovieStatus: helpers.getDefaultState(),
      movieModalStatus: false,
    });
  });
  test("should handle GET_MOVIE_FAILURE", () => {
    const payload = "Not found";
    expect(
      movieReducer(
        {
          movies: [],
          moviesTotal: 0,
          getMoviesStatus: helpers.getDefaultState(),
          movie: null,
          getMovieStatus: helpers.getRequestState(),
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
        {
          type: types.GET_MOVIE_FAILURE,
          payload,
        }
      )
    ).toEqual({
      movies: [],
      moviesTotal: 0,
      getMoviesStatus: helpers.getDefaultState(),
      movie: null,
      getMovieStatus: helpers.getErrorState(payload),
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
    });
  });
  test("should handle CLEAR_GET_MOVIE_STATUS", () => {
    expect(
      movieReducer(
        {
          movies: [],
          moviesTotal: 0,
          getMoviesStatus: helpers.getDefaultState(),
          movie: null,
          getMovieStatus: helpers.getSuccessState("Success"),
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
        {
          type: types.CLEAR_GET_MOVIE_STATUS,
        }
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
      deleteMovieStatus: helpers.getDefaultState(),
      movieModalStatus: false,
    });
  });
});
