/**
 * @jest-environment jsdom
 */

import React from "react";
import { mount } from "enzyme";
import MoviesList from "./index";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const mockStore = configureMockStore([sagaMiddleware]);

describe(" MoviesList", () => {
  test("Do not render MoviesList if moviesList.length === 0", () => {
    const store = mockStore({
      movieReducer: { movies: [] },
    });
    const wrapper = mount(
      <Provider store={store}>
        <MoviesList />
      </Provider>
    );
    expect(wrapper.find(".noData").exists()).toBeTruthy();
  });
  test("Render MoviesList if moviesList.length !== 0", () => {
    const store = mockStore({
      movieReducer: {
        movies: [
          {
            id: 4,
            title: "Fringe",
            genres: ["Sci-Fi"],
            vote_average: 8.4,
            release_date: "2008-01-01",
            overview:
              "An F.B.I. agent is forced to work with an institutionalized scientist and his son in order to rationalize a brewing storm of unexplained phenomena.",
            runtime: 5000,
            poster_path: "https://www.themoviedb.org/t/p/w500/sY9hg5dLJ93RJOyKEiu1nAtBRND.jpg",
          },
        ],
        moviesRequestParams: {
          search: "",
          limit: 12,
          offset: 0,
          sortBy: "release_date",
          sortOrder: "desc",
          searchBy: "title",
          filter: [],
        },
        moviesTotal: 30,
      },
    });

    const wrapper = mount(
      <Provider store={store}>
        <MoviesList />
      </Provider>
    );

    expect(wrapper.find(".noData").exists()).toBeFalsy();

    expect(wrapper.find(".MoviesList").exists()).toBeTruthy();
  });
});
