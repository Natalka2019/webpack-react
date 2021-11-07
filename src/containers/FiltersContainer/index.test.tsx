/**
 * @jest-environment jsdom
 */

import React from "react";
import { mount, ReactWrapper } from "enzyme";
import FiltersContainer from "./index";
import { genres } from "common";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const mockStore = configureMockStore([sagaMiddleware]);

describe("FiltersContainer", () => {
  let wrapper: ReactWrapper;

  const store = mockStore({
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
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test("sort change", () => {
    const event = { target: { value: "release_date_desc" } };
    wrapper = mount(
      <Provider store={store}>
        <FiltersContainer />
      </Provider>
    );

    expect(wrapper.find({ label: "Sort by" }).props().onChange(event));
  });
  test("genres change", () => {
    wrapper = mount(
      <Provider store={store}>
        <FiltersContainer />
      </Provider>
    );

    expect(wrapper.find({ name: genres[0].label }).props().onClick());
  });
});
