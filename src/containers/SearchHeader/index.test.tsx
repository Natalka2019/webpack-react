/**
 * @jest-environment jsdom
 */

import React from "react";
import { mount, ReactWrapper } from "enzyme";
import SearchHeader from "./index";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import createSagaMiddleware from "redux-saga";
import { MemoryRouter, Route } from "react-router-dom";

const sagaMiddleware = createSagaMiddleware();

const mockStore = configureMockStore([sagaMiddleware]);

describe("SearchHeader", () => {
  let wrapper: ReactWrapper;

  const store = mockStore({
    movieReducer: {
      movieModalStatus: false,
    },
  });

  test("add movie button click", () => {
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/search"]}>
          <SearchHeader />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find({ id: "addMovie" }).at(0).props().onClick());
    wrapper.unmount();
  });
  test("search button and search input field enter click, change search word", () => {
    const event = { target: { key: "click", value: "Hello" } };
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/search"]}>
          <SearchHeader />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find({ id: "search" }).at(0).props().onClick(event));
    expect(wrapper.find({ id: "input" }).props().onKeyPress(event));
    expect(wrapper.find({ id: "input" }).props().onChange(event));
  });
  test("search trigger when search field empty", () => {
    const event = { target: { key: "click", value: "" } };
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/search"]}>
          <SearchHeader />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find({ id: "search" }).at(0).props().onClick(event));
    expect(wrapper.find({ id: "input" }).props().onKeyPress(event));
    expect(wrapper.find({ id: "input" }).props().onChange(event));
  });
  test("get search param from URL", () => {
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/search?search=avengers"]}>
          <SearchHeader />
        </MemoryRouter>
      </Provider>
    );
  });
});
