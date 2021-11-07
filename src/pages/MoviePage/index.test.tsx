/**
 * @jest-environment jsdom
 */

import React from "react";
import { mount, ReactWrapper } from "enzyme";
import MoviePage from "./index";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import createSagaMiddleware from "redux-saga";
import { MemoryRouter } from "react-router-dom";

const sagaMiddleware = createSagaMiddleware();

const mockStore = configureMockStore([sagaMiddleware]);

describe("MoviePage", () => {
  let wrapper: ReactWrapper;

  test("get movie loading", () => {
    const store = mockStore({
      movieReducer: {
        getMovieStatus: {
          loading: true,
          success: null,
          error: null,
        },
        moviesRequestParams: {
          search: "",
          limit: 12,
          offset: 0,
          sortBy: "release_date",
          sortOrder: "desc",
          searchBy: "title",
          filter: [],
        },
        movies: [],
      },
    });
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/film/2"]}>
          {" "}
          <MoviePage />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.find(".loaderContainer").exists()).toBeTruthy();
  });
  test("get movie error", () => {
    const store = mockStore({
      movieReducer: {
        getMovieStatus: {
          loading: false,
          success: null,
          error: "Error",
        },
        moviesRequestParams: {
          search: "",
          limit: 12,
          offset: 0,
          sortBy: "release_date",
          sortOrder: "desc",
          searchBy: "title",
          filter: [],
        },
        movies: [],
      },
    });
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/film/2"]}>
          {" "}
          <MoviePage />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.find(".errorContainer").exists()).toBeTruthy();
  });
  test("get movie success", () => {
    const store = mockStore({
      movieReducer: {
        getMovieStatus: {
          loading: false,
          success: null,
          error: "Error",
        },
        moviesRequestParams: {
          search: "",
          limit: 12,
          offset: 0,
          sortBy: "release_date",
          sortOrder: "desc",
          searchBy: "title",
          filter: [],
        },
        movies: [],
        movie: {
          id: 2,
          title: "Dune",
          genres: ["Sci-Fi"],
          vote_average: 8.4,
          release_date: "2021-01-01",
          overview:
            "Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.",
          runtime: 155,
          poster_path:
            "https://www.themoviedb.org/t/p/original/cDbNAY0KM84cxXhmj8f0dLWza3t.jpg",
        },
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/film/2"]}>
          {" "}
          <MoviePage />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.find(".MovieDetails").exists()).toBeTruthy();
    expect(wrapper.find(".MovieDetails__vote").text()).toEqual("8.4");
    expect(wrapper.find(".MovieDetails_runtime").text()).toEqual("155 min");
  });
  test("no vote or runtime", () => {
    const store = mockStore({
      movieReducer: {
        getMovieStatus: {
          loading: false,
          success: null,
          error: "Error",
        },
        moviesRequestParams: {
          search: "",
          limit: 12,
          offset: 0,
          sortBy: "release_date",
          sortOrder: "desc",
          searchBy: "title",
          filter: [],
        },
        movies: [],
        movie: {
          id: 2,
          title: "Dune",
          genres: ["Sci-Fi"],
          vote_average: null,
          release_date: "2021-01-01",
          overview:
            "Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.",
          runtime: null,
          poster_path:
            "https://www.themoviedb.org/t/p/original/cDbNAY0KM84cxXhmj8f0dLWza3t.jpg",
        },
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/film/2"]}>
          {" "}
          <MoviePage />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.find(".MovieDetails__vote").text()).toEqual("0.0");
    expect(wrapper.find(".MovieDetails_runtime").text()).toEqual("");
  });
});
