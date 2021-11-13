/**
 * @jest-environment jsdom
 */

import React from "react";
import { mount, ReactWrapper } from "enzyme";
import MovieModal from "./index";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const mockStore = configureMockStore([sagaMiddleware]);

describe("MovieModal", () => {
  const buttonName = "submit";
  const modalTitle = "Modal title";
  let wrapper: ReactWrapper;

  const store = mockStore({
    movieReducer: { movies: [] },
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test("If property movie provided", () => {
    const movie = {
      id: 2,
      title: "Dune",
      genres: ["Sci-Fi"],
      vote_average: 8.4,
      release_date: "2021-01-01",
      overview:
        "Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.",
      runtime: 155,
      poster_path: "https://www.themoviedb.org/t/p/original/cDbNAY0KM84cxXhmj8f0dLWza3t.jpg",
    };
    wrapper = mount(
      <Provider store={store}>
        <MovieModal buttonName={buttonName} modalTitle={modalTitle} movie={movie} />
      </Provider>
    );
    expect(wrapper.find({ name: "id" }).exists()).toBeTruthy();
  });
  test("If property movie NOT provided", () => {
    wrapper = mount(
      <Provider store={store}>
        <MovieModal buttonName={buttonName} modalTitle={modalTitle} />
      </Provider>
    );
    expect(wrapper.find({ name: "id" }).exists()).toBeFalsy();
  });
  test("reset triggered", () => {
    wrapper = mount(
      <Provider store={store}>
        <MovieModal buttonName={buttonName} modalTitle={modalTitle} />
      </Provider>
    );

    const mockEvent = { preventDefault: jest.fn() };

    expect(wrapper.find({ name: "Reset" }).props().onClick(mockEvent));
  });
  test("submit triggered", () => {
    wrapper = mount(
      <Provider store={store}>
        <MovieModal buttonName={buttonName} modalTitle={modalTitle} />
      </Provider>
    );

    expect(wrapper.find({ id: "movieModalForm" }).props().onSubmit());
  });
});
