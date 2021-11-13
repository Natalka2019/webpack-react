/**
 * @jest-environment jsdom
 */

import React from "react";
import { mount, ReactWrapper } from "enzyme";
import SearchHeader from "./index";
import * as reactRedux from "react-redux";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import createSagaMiddleware from "redux-saga";
import { MemoryRouter } from "react-router-dom";
import * as actionTypes from "store/actionTypes";

const sagaMiddleware = createSagaMiddleware();

const mockStore = configureMockStore([sagaMiddleware]);

describe("SearchHeader", () => {
  let wrapper: ReactWrapper;

  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

  const mockedDispatch = jest.fn();
  const mockSetState = jest.fn();

  useDispatchMock.mockReturnValue(mockedDispatch);
  const useStateSpy = jest.spyOn(React, "useState");

  const store = mockStore({
    movieReducer: {
      movieModalStatus: false,
    },
  });

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  afterEach(() => {
    wrapper.unmount();
    jest.clearAllMocks();
  });

  test("add movie button click", () => {
    const action = {
      type: actionTypes.MOVIE_MODAL_STATUS_TOGGLE,
      payload: true,
    };

    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/search"]}>
          <SearchHeader />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find({ id: "addMovie" }).at(0).props().onClick());
    expect(mockedDispatch).toHaveBeenCalledWith(action);
  });
  test("change search word", () => {
    useStateSpy.mockImplementation(() => ["", mockSetState]);

    const searchValue = "Hello";
    const event = { target: { key: "click", value: searchValue } };
    const actionClearMoviesList = {
      type: actionTypes.CLEAR_MOVIES_LIST,
    };

    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/search"]}>
          <SearchHeader />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find({ id: "input" }).props().onChange(event));
    expect(mockSetState).toHaveBeenCalledWith(searchValue);
    expect(mockedDispatch).toHaveBeenCalledWith(actionClearMoviesList);
  });
  test("clear search field", () => {
    const searchValue = "";
    const event = { target: { key: "click", value: searchValue } };
    useStateSpy.mockImplementation(() => ["Hello", mockSetState]);
    const actionClearMoviesList = {
      type: actionTypes.CLEAR_MOVIES_LIST,
    };
    const actionUpdateRequestParams = {
      type: actionTypes.UPDATE_MOVIES_REQUEST_PARAMS,
      payload: {
        offset: 0,
        search: searchValue,
      },
    };

    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/search"]}>
          <SearchHeader />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find({ id: "input" }).props().onChange(event));
    expect(mockSetState).toHaveBeenCalledWith(searchValue);
    expect(mockedDispatch).toHaveBeenCalledWith(actionUpdateRequestParams);
    expect(mockedDispatch).toHaveBeenCalledWith(actionClearMoviesList);
  });
  test("search button and search input field enter click", () => {
    const searchValue = "Hello";
    const event = { target: { key: "click", value: searchValue } };
    useStateSpy.mockImplementation(() => [searchValue, mockSetState]);

    const actionUpdateRequestParams = {
      type: actionTypes.UPDATE_MOVIES_REQUEST_PARAMS,
      payload: {
        offset: 0,
        search: searchValue,
      },
    };
    const actionGetMovies = {
      type: actionTypes.GET_MOVIES,
    };

    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/search"]}>
          <SearchHeader />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find({ id: "search" }).at(0).props().onClick(event));
    expect(wrapper.find({ id: "input" }).props().onKeyPress(event));

    expect(mockedDispatch).toHaveBeenCalledWith(actionUpdateRequestParams);
    expect(mockedDispatch).toHaveBeenCalledWith(actionGetMovies);
  });
  test("close movie modal", () => {
    const action = {
      type: actionTypes.MOVIE_MODAL_STATUS_TOGGLE,
      payload: false,
    };

    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/search"]}>
          <SearchHeader />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find({ id: "movieModalWrapper" }).at(0).props().onCloseModal());

    expect(mockedDispatch).toHaveBeenCalledWith(action);
  });
  test("get search param from URL", () => {
    const searchValue = "avengers";
    useStateSpy.mockImplementation(() => [searchValue, mockSetState]);

    const actionUpdateRequestParams = {
      type: actionTypes.UPDATE_MOVIES_REQUEST_PARAMS,
      payload: {
        offset: 0,
        search: searchValue,
      },
    };
    const actionGetMovies = {
      type: actionTypes.GET_MOVIES,
    };

    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`/search?search=${searchValue}`]}>
          <SearchHeader />
        </MemoryRouter>
      </Provider>
    );
    expect(mockSetState).toHaveBeenCalledWith(searchValue);
    expect(mockedDispatch).toHaveBeenCalledWith(actionUpdateRequestParams);
    expect(mockedDispatch).toHaveBeenCalledWith(actionGetMovies);
  });
});
