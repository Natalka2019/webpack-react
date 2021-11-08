import { runSaga } from "redux-saga";
import * as API from "../../api/movies";
import { getMovie, deleteMovie, getMovies, addEditMovie } from "./movieSaga";
import * as types from "../actionTypes";
import sinon from "sinon";

describe("movieSaga", () => {
  test("delete movie success", async () => {
    const deleteMovieResponse = {
      config: "config",
      data: "",
      headers: {},
      request: "request",
      status: 204,
      statusTest: "No Content",
    };

    const args = {
      type: types.DELETE_MOVIE,
      payload: 2,
    };

    const stub = sinon.stub(API, "deleteMovie").returns(deleteMovieResponse);

    const dispatched = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      deleteMovie,
      args
    ).done;

    expect(stub.called).toEqual(true);
    expect(dispatched[0].type).toEqual("DELETE_MOVIE_SUCCESS");
    expect(dispatched[0].payload).toEqual(deleteMovieResponse.data);
    stub.restore();
  });
  test("delete movie failure", async () => {
    const error = new Error("No such page");

    const args = {
      type: types.DELETE_MOVIE,
      payload: 2,
    };

    const stub = sinon.stub(API, "deleteMovie").throws(error);

    const dispatched = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      deleteMovie,
      args
    ).done;

    expect(stub.called).toEqual(true);
    expect(dispatched[0].type).toEqual("DELETE_MOVIE_FAILURE");
    expect(dispatched[0].payload).toEqual(error);
    stub.restore();
  });
  test("get movie success", async () => {
    const getMovieResponse = {
      config: "config",
      data: {
        id: 10,
        title: "Meet Joe Black",
        genres: ["Fantasy"],
        vote_average: 7.2,
        release_date: "1998-01-01",
        overview:
          "Death, who takes the form of a young man, asks a media mogul to act as a guide to teach him about life on Earth, and in the process, he falls in love with his guide's daughter.",
        runtime: 181,
        poster_path: "https://www.themoviedb.org/t/p/original/baH1LWTmKooo35s9YXkGabDJJaG.jpg",
      },
      headers: "headers",
      request: "request",
      status: 200,
      statusTest: "statusTest",
    };

    const args = {
      type: types.GET_MOVIE,
      payload: 10,
    };

    const stub = sinon.stub(API, "getMovie").returns(getMovieResponse);

    const dispatched = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      getMovie,
      args
    ).done;

    expect(stub.called).toEqual(true);
    expect(dispatched[0].type).toEqual("GET_MOVIE_SUCCESS");
    expect(dispatched[0].payload).toEqual(getMovieResponse.data);
    stub.restore();
  });
  test("get movie failure", async () => {
    const error = new Error("No such page");

    const args = {
      type: types.GET_MOVIE,
      payload: 10,
    };

    const stub = sinon.stub(API, "getMovie").throws(error);

    const dispatched = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      getMovie,
      args
    ).done;

    expect(stub.called).toEqual(true);
    expect(dispatched[0].type).toEqual("GET_MOVIE_FAILURE");
    expect(dispatched[0].payload).toEqual(error);
    stub.restore();
  });
  test("get movies success", async () => {
    const getMoviesResponse = {
      config: "config",
      data: {
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
            poster_path: "https://www.themoviedb.org/t/p/original/baH1LWTmKooo35s9YXkGabDJJaG.jpg",
          },
        ],
        limit: 12,
        offset: 0,
        totalAmount: 30,
      },
      headers: "headers",
      request: "request",
      status: 200,
      statusTest: "statusTest",
    };

    const mockState = {
      movieReducer: {
        moviesRequestParams: {
          search: "",
          limit: 12,
          offset: 0,
          sortBy: "release_date",
          sortOrder: "desc",
          searchBy: "title",
          filter: [],
        },
      },
    };

    const stub = sinon.stub(API, "getMovies").returns(getMoviesResponse);

    const dispatched = [];

    await runSaga(
      {
        getState: () => mockState,
        dispatch: (action) => dispatched.push(action),
      },
      getMovies
    ).done;

    expect(stub.called).toEqual(true);
    expect(dispatched[0].type).toEqual("GET_MOVIES_SUCCESS");
    expect(dispatched[0].payload).toEqual(getMoviesResponse.data);
    stub.restore();
  });
  test("get movies failure", async () => {
    const error = {
      response: { data: { message: new Error("No such page") } },
    };

    const mockState = {
      movieReducer: {
        moviesRequestParams: {
          search: "",
          limit: 12,
          offset: 0,
          sortBy: "release_date",
          sortOrder: "desc",
          searchBy: "title",
          filter: [],
        },
      },
    };

    const stub = sinon.stub(API, "getMovies").throws(error);

    const dispatched = [];

    await runSaga(
      {
        getState: () => mockState,
        dispatch: (action) => dispatched.push(action),
      },
      getMovies
    ).done;

    expect(stub.called).toEqual(true);
    expect(dispatched[0].type).toEqual("GET_MOVIES_FAILURE");
    expect(dispatched[0].payload).toEqual(error);
    stub.restore();
  });
  test("add movie success", async () => {
    const movie = {
      title: "Meet Joe Black",
      genres: ["Fantasy"],
      vote_average: 7.2,
      release_date: "1998-01-01",
      overview:
        "Death, who takes the form of a young man, asks a media mogul to act as a guide to teach him about life on Earth, and in the process, he falls in love with his guide's daughter.",
      runtime: 181,
      poster_path: "https://www.themoviedb.org/t/p/original/baH1LWTmKooo35s9YXkGabDJJaG.jpg",
    };
    const addMovieResponse = {
      config: "config",
      data: {
        id: 10,
        title: "Meet Joe Black",
        genres: ["Fantasy"],
        vote_average: 7.2,
        release_date: "1998-01-01",
        overview:
          "Death, who takes the form of a young man, asks a media mogul to act as a guide to teach him about life on Earth, and in the process, he falls in love with his guide's daughter.",
        runtime: 181,
        poster_path: "https://www.themoviedb.org/t/p/original/baH1LWTmKooo35s9YXkGabDJJaG.jpg",
      },

      headers: "headers",
      request: "request",
      status: 200,
      statusTest: "OK",
    };

    const mockState = {
      movieReducer: {
        movie: null,
      },
    };

    const args = {
      type: types.ADD_EDIT_MOVIE,
      payload: movie,
    };

    const stub = sinon.stub(API, "addMovie").returns(addMovieResponse);

    const dispatched = [];

    await runSaga(
      {
        getState: () => mockState,
        dispatch: (action) => dispatched.push(action),
      },
      addEditMovie,
      args
    ).done;

    expect(stub.called).toEqual(true);
    expect(dispatched[0].type).toEqual("ADD_EDIT_MOVIE_SUCCESS");
    expect(dispatched[0].payload).toEqual(addMovieResponse.data);
    expect(dispatched[1].type).toEqual("MOVIE_MODAL_STATUS_TOGGLE");
    expect(dispatched[1].payload).toEqual(false);
    expect(dispatched[2].type).toEqual("GET_MOVIES");
    stub.restore();
  });
  test("edit movie success", async () => {
    const movie = {
      id: 10,
      title: "Meet Joe Black",
      genres: ["Fantasy"],
      vote_average: 7.2,
      release_date: "1998-01-01",
      overview:
        "Death, who takes the form of a young man, asks a media mogul to act as a guide to teach him about life on Earth, and in the process, he falls in love with his guide's daughter.",
      runtime: 181,
      poster_path: "https://www.themoviedb.org/t/p/original/baH1LWTmKooo35s9YXkGabDJJaG.jpg",
    };
    const addMovieResponse = {
      config: "config",
      data: {
        id: 10,
        title: "Meet Joe Black",
        genres: ["Fantasy"],
        vote_average: 7.2,
        release_date: "1998-01-01",
        overview:
          "Death, who takes the form of a young man, asks a media mogul to act as a guide to teach him about life on Earth, and in the process, he falls in love with his guide's daughter.",
        runtime: 181,
        poster_path: "https://www.themoviedb.org/t/p/original/baH1LWTmKooo35s9YXkGabDJJaG.jpg",
      },

      headers: "headers",
      request: "request",
      status: 200,
      statusTest: "OK",
    };

    const mockState = {
      movieReducer: {
        movie: {
          id: 10,
          title: "Meet Joe Black",
          genres: ["Fantasy"],
          vote_average: 7.2,
          release_date: "1998-01-01",
          overview:
            "Death, who takes the form of a young man, asks a media mogul to act as a guide to teach him about life on Earth, and in the process, he falls in love with his guide's daughter.",
          runtime: 181,
          poster_path: "https://www.themoviedb.org/t/p/original/baH1LWTmKooo35s9YXkGabDJJaG.jpg",
        },
      },
    };

    const args = {
      type: types.ADD_EDIT_MOVIE,
      payload: movie,
    };

    const stub = sinon.stub(API, "editMovie").returns(addMovieResponse);

    const dispatched = [];

    await runSaga(
      {
        getState: () => mockState,
        dispatch: (action) => dispatched.push(action),
      },
      addEditMovie,
      args
    ).done;

    expect(stub.called).toEqual(true);
    expect(dispatched[0].type).toEqual("ADD_EDIT_MOVIE_SUCCESS");
    expect(dispatched[0].payload).toEqual(addMovieResponse.data);
    expect(dispatched[1].type).toEqual("MOVIE_MODAL_STATUS_TOGGLE");
    expect(dispatched[1].payload).toEqual(false);
    expect(dispatched[2].type).toEqual("GET_MOVIES");
    expect(dispatched[3].type).toEqual("GET_MOVIE");
    expect(dispatched[3].payload).toEqual(10);
    stub.restore();
  });
  test("add movie failure", async () => {
    const movie = {
      title: "Meet Joe Black",
      genres: ["Fantasy"],
      vote_average: 7.2,
      release_date: "1998-01-01",
      overview:
        "Death, who takes the form of a young man, asks a media mogul to act as a guide to teach him about life on Earth, and in the process, he falls in love with his guide's daughter.",
      runtime: 181,
      poster_path: "https://www.themoviedb.org/t/p/original/baH1LWTmKooo35s9YXkGabDJJaG.jpg",
    };
    const error = new Error("Not found");

    const mockState = {
      movieReducer: {
        movie: null,
      },
    };

    const args = {
      type: types.ADD_EDIT_MOVIE,
      payload: movie,
    };

    const stub = sinon.stub(API, "addMovie").throws(error);

    const dispatched = [];

    await runSaga(
      {
        getState: () => mockState,
        dispatch: (action) => dispatched.push(action),
      },
      addEditMovie,
      args
    ).done;

    expect(stub.called).toEqual(true);
    expect(dispatched[0].type).toEqual("ADD_EDIT_MOVIE_FAILURE");
    expect(dispatched[0].payload).toEqual(error);
    stub.restore();
  });
});
