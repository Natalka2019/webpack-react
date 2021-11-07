import * as types from "../actionTypes";
import movieReducer from "./movieReducer";
import * as helpers from "../helpers";
import { genresTypes } from "../../common";

describe("Movie reducer - other", () => {
  test("should return the initial state", () => {
    expect(movieReducer(undefined, { type: undefined })).toEqual({
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
  test("should handle UPDATE_MOVIES_REQUEST_PARAMS if filter array is empty", () => {
    const payload = {
      search: "Hello",
      sortOrder: "asc",
    };
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
        { type: types.UPDATE_MOVIES_REQUEST_PARAMS, payload }
      )
    ).toEqual({
      movies: [],
      moviesTotal: 0,
      getMoviesStatus: helpers.getDefaultState(),
      movie: null,
      getMovieStatus: helpers.getDefaultState(),
      moviesRequestParams: {
        search: "Hello",
        limit: 12,
        offset: 0,
        sortBy: "release_date",
        sortOrder: "asc",
        searchBy: "title",
        filter: [],
      },
      addEditMovieStatus: helpers.getDefaultState(),
      deleteMovieStatus: helpers.getDefaultState(),
      movieModalStatus: false,
    });
  });
  test("should handle UPDATE_MOVIES_REQUEST_PARAMS if filter array is not empty", () => {
    const payload = {
      filter: [genresTypes.Fantasy],
    };
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
            filter: [genresTypes.Adventure],
          },
          addEditMovieStatus: helpers.getDefaultState(),
          deleteMovieStatus: helpers.getDefaultState(),
          movieModalStatus: false,
        },
        { type: types.UPDATE_MOVIES_REQUEST_PARAMS, payload }
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
        filter: [genresTypes.Adventure, genresTypes.Fantasy],
      },
      addEditMovieStatus: helpers.getDefaultState(),
      deleteMovieStatus: helpers.getDefaultState(),
      movieModalStatus: false,
    });
  });
  test("should handle UPDATE_MOVIES_REQUEST_PARAMS if filter array includes genreTypes.All", () => {
    const payload = {
      filter: [genresTypes.Fantasy, genresTypes.Adventure, genresTypes.All],
    };
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
        { type: types.UPDATE_MOVIES_REQUEST_PARAMS, payload }
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
        filter: [genresTypes.All],
      },
      addEditMovieStatus: helpers.getDefaultState(),
      deleteMovieStatus: helpers.getDefaultState(),
      movieModalStatus: false,
    });
  });
  test("should handle UPDATE_MOVIES_REQUEST_PARAMS if filter PREVIOUS array includes genreTypes.All", () => {
    const payload = {
      filter: [genresTypes.Fantasy, genresTypes.Adventure],
    };
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
            filter: [genresTypes.All],
          },
          addEditMovieStatus: helpers.getDefaultState(),
          deleteMovieStatus: helpers.getDefaultState(),
          movieModalStatus: false,
        },
        { type: types.UPDATE_MOVIES_REQUEST_PARAMS, payload }
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
        filter: [genresTypes.Fantasy, genresTypes.Adventure],
      },
      addEditMovieStatus: helpers.getDefaultState(),
      deleteMovieStatus: helpers.getDefaultState(),
      movieModalStatus: false,
    });
  });
  test("should handle MOVIE_MODAL_STATUS_TOGGLE", () => {
    const payload = true;
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
        {
          type: types.MOVIE_MODAL_STATUS_TOGGLE,
          payload,
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
      movieModalStatus: payload,
    });
  });
  test("should handle CLEAR_MOVIES_LIST", () => {
    expect(
      movieReducer(
        {
          movies: [
            {
              id: 9,
              title: "Continuum",
              genres: ["Sci-Fi"],
              vote_average: 7.6,
              release_date: "2012-01-01",
              overview:
                "A detective from the year 2077 finds herself trapped in present-day Vancouver and searching for ruthless criminals from the future.",
              runtime: 1848,
              poster_path:
                "https://m.media-amazon.com/images/M/MV5BMTUzNTU1NzQ2Ml5BMl5BanBnXkFtZTcwMDUzNjk4Nw@@._V1_.jpg",
            },
          ],
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
        {
          type: types.CLEAR_MOVIES_LIST,
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
