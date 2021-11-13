/**
 * @jest-environment jsdom
 */

import React from "react";
import { mount, ReactWrapper } from "enzyme";
import Poster from "./index";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import createSagaMiddleware from "redux-saga";
import * as reactRedux from "react-redux";
import * as actionTypes from "store/actionTypes";

const sagaMiddleware = createSagaMiddleware();

const mockStore = configureMockStore([sagaMiddleware]);

describe("Poster", () => {
  let wrapper: ReactWrapper;
  const movie = {
    id: 5,
    title: "Person of interest",
    genres: ["Crime"],
    vote_average: 8.4,
    release_date: "2011-01-01",
    overview:
      "An ex-CIA agent and a wealthy programmer save lives via a surveillance AI that sends them the identities of civilians involved in impending crimes. However, the details of the crimes, including the civilians' roles, are left a mystery.",
    runtime: 1012,
    poster_path: "https://www.themoviedb.org/t/p/w500/nzWdHTq53KMQFphullKFaVi6252.jpg",
  };

  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

  const mockedDispatch = jest.fn();
  const mockSetState = jest.fn();

  useDispatchMock.mockReturnValue(mockedDispatch);
  const useStateSpy = jest.spyOn(React, "useState");

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  afterEach(() => {
    wrapper.unmount();
    jest.clearAllMocks();
  });

  const store = mockStore({
    movieReducer: {
      deleteMovieStatus: {
        loading: false,
        success: null,
        error: null,
      },
      movieModalStatus: true,
    },
  });

  test("onManageMovie click", () => {
    useStateSpy.mockImplementation(() => [null, mockSetState]);
    wrapper = mount(
      <Provider store={store}>
        <Poster movie={movie} />
      </Provider>
    );
    expect(wrapper.find({ id: "roundButton" }).at(0).props().onClick());
    expect(mockSetState).toHaveBeenCalledWith(true);
    expect(mockSetState).toHaveBeenCalledWith(movie);
  });
  test("selectedMovie !== null, activityModalWrapper close", () => {
    useStateSpy.mockImplementation(() => [movie, mockSetState]);

    wrapper = mount(
      <Provider store={store}>
        <Poster movie={movie} />
      </Provider>
    );

    expect(wrapper.find({ id: "activityModalWrapper" }).at(0).props().onCloseModal());
    expect(mockSetState).toHaveBeenCalledWith(false);
  });
  test("selectedMovie !== null, movieModalWrapper close", () => {
    const action = {
      type: actionTypes.MOVIE_MODAL_STATUS_TOGGLE,
      payload: false,
    };

    wrapper = mount(
      <Provider store={store}>
        <Poster movie={movie} />
      </Provider>
    );

    expect(wrapper.find({ id: "movieModalWrapper" }).at(0).props().onCloseModal());
    expect(mockedDispatch).toHaveBeenCalledWith(action);
  });
  test("selectedMovie !== null, deleteModalWrapper close", () => {
    useStateSpy.mockImplementation(() => [movie, mockSetState]);

    wrapper = mount(
      <Provider store={store}>
        <Poster movie={movie} />
      </Provider>
    );

    expect(wrapper.find({ id: "deleteModalWrapper" }).at(0).props().onCloseModal());
    expect(mockSetState).toHaveBeenCalledWith(false);
  });
});
