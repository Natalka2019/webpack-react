import * as types from "../actionTypes";
import movieReducer from "./movieReducer";
import * as helpers from "../helpers";

describe("Movie reducer - movies", () => {
  test("should handle GET_MOVIES", () => {
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
        { type: types.GET_MOVIES }
      )
    ).toEqual({
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
    });
  });
  test("should handle GET_MOVIES_SUCCESS when offset === 0", () => {
    const payload = {
      data: [
        {
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
        },
      ],
      totalAmount: 30,
    };
    expect(
      movieReducer(
        {
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
        {
          type: types.GET_MOVIES_SUCCESS,
          payload,
        }
      )
    ).toEqual({
      movies: payload.data,
      moviesTotal: payload.totalAmount,
      getMoviesStatus: helpers.getSuccessState("Success!"),
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
  test("should handle GET_MOVIES_SUCCESS when offset is > 0", () => {
    const payload = {
      data: [
        {
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
        },
      ],
      totalAmount: 30,
    };
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
          getMoviesStatus: helpers.getRequestState(),
          movie: null,
          getMovieStatus: helpers.getDefaultState(),
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
          type: types.GET_MOVIES_SUCCESS,
          payload,
        }
      )
    ).toEqual({
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
        ...payload.data,
      ],
      moviesTotal: payload.totalAmount,
      getMoviesStatus: helpers.getSuccessState("Success!"),
      movie: null,
      getMovieStatus: helpers.getDefaultState(),
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
  test("should handle GET_MOVIES_FAILURE", () => {
    const payload = "Not found";
    expect(
      movieReducer(
        {
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
        {
          type: types.GET_MOVIES_FAILURE,
          payload,
        }
      )
    ).toEqual({
      movies: [],
      moviesTotal: 0,
      getMoviesStatus: helpers.getErrorState(payload),
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
  test("should handle CLEAR_GET_MOVIES_STATUS", () => {
    expect(
      movieReducer(
        {
          movies: [],
          moviesTotal: 0,
          getMoviesStatus: helpers.getSuccessState("Success"),
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
          type: types.CLEAR_GET_MOVIES_STATUS,
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
