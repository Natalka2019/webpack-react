import * as actions from "./movieActions";
import * as types from "../actionTypes";

describe("Movie actions", () => {
  test("should create an action to get movies", () => {
    const expectedAction = {
      type: types.GET_MOVIES,
    };
    expect(actions.getMovies()).toEqual(expectedAction);
  });
  test("should create an action to get movies success", () => {
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
      limit: 12,
      offset: 0,
      totalAmount: 30,
    };
    const expectedAction = {
      type: types.GET_MOVIES_SUCCESS,
      payload,
    };
    expect(actions.getMoviesSuccess(payload)).toEqual(expectedAction);
  });
  test("should create an action to get movies failure", () => {
    const payload = "Not found";
    const expectedAction = {
      type: types.GET_MOVIES_FAILURE,
      payload,
    };
    expect(actions.getMoviesFailure(payload)).toEqual(expectedAction);
  });
  test("should create an action to clear get movies status", () => {
    const expectedAction = {
      type: types.CLEAR_GET_MOVIES_STATUS,
    };
    expect(actions.clearGetMoviesStatus()).toEqual(expectedAction);
  });
  test("should create an action to get movie", () => {
    const payload = 5;
    const expectedAction = {
      type: types.GET_MOVIE,
      payload,
    };
    expect(actions.getMovie(payload)).toEqual(expectedAction);
  });

  test("should create an action to get movie success", () => {
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
    const expectedAction = {
      type: types.GET_MOVIE_SUCCESS,
      payload,
    };
    expect(actions.getMovieSuccess(payload)).toEqual(expectedAction);
  });
  test("should create an action to get movie failure", () => {
    const payload = "Not found";
    const expectedAction = {
      type: types.GET_MOVIE_FAILURE,
      payload,
    };
    expect(actions.getMovieFailure(payload)).toEqual(expectedAction);
  });
  test("should create an action to clear get movie status", () => {
    const expectedAction = {
      type: types.CLEAR_GET_MOVIE_STATUS,
    };
    expect(actions.clearGetMovieStatus()).toEqual(expectedAction);
  });
  test("should create an action to update movie request params", () => {
    const payload = {
      search: "Hello",
      limit: 12,
      offset: 0,
      sortBy: "release_date",
      sortOrder: "desc",
      searchBy: "title",
      filter: [],
    };
    const expectedAction = {
      type: types.UPDATE_MOVIES_REQUEST_PARAMS,
      payload,
    };
    expect(actions.updateMoviesRequestParams(payload)).toEqual(expectedAction);
  });

  test("should create an action to add movie", () => {
    const payload = {
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
    const expectedAction = {
      type: types.ADD_EDIT_MOVIE,
      payload,
    };
    expect(actions.addEditMovie(payload)).toEqual(expectedAction);
  });
  test("should create an action to edit movie success", () => {
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
    const expectedAction = {
      type: types.ADD_EDIT_MOVIE_SUCCESS,
      payload,
    };
    expect(actions.addEditMovieSuccess(payload)).toEqual(expectedAction);
  });
  test("should create an action to add movie failure", () => {
    const payload = "Not found";
    const expectedAction = {
      type: types.ADD_EDIT_MOVIE_FAILURE,
      payload,
    };
    expect(actions.addEditMovieFailure(payload)).toEqual(expectedAction);
  });
  test("should create an action to delete movie", () => {
    const payload = 3;
    const expectedAction = {
      type: types.DELETE_MOVIE,
      payload,
    };
    expect(actions.deleteMovie(payload)).toEqual(expectedAction);
  });
  test("should create an action to delete movie success", () => {
    const payload = "Success";
    const expectedAction = {
      type: types.DELETE_MOVIE_SUCCESS,
      payload,
    };
    expect(actions.deleteMovieSuccess(payload)).toEqual(expectedAction);
  });
  test("should create an action to delete movie failure", () => {
    const payload = "Error";
    const expectedAction = {
      type: types.DELETE_MOVIE_FAILURE,
      payload,
    };
    expect(actions.deleteMovieFailure(payload)).toEqual(expectedAction);
  });
  test("should create an action to toggle movie modal status", () => {
    const payload = true;
    const expectedAction = {
      type: types.MOVIE_MODAL_STATUS_TOGGLE,
      payload,
    };
    expect(actions.movieModalStatusToggle(payload)).toEqual(expectedAction);
  });
  test("should create an action to clear movies list", () => {
    const expectedAction = {
      type: types.CLEAR_MOVIES_LIST,
    };
    expect(actions.clearMoviesList()).toEqual(expectedAction);
  });
});
