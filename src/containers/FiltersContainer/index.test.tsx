/**
 * @jest-environment jsdom
 */

import React from "react";
import * as reactRedux from "react-redux";
import { mount, ReactWrapper } from "enzyme";
import FiltersContainer from "./index";
import { genres, sortOptions } from "common";
import * as actionTypes from "store/actionTypes";

describe("FiltersContainer", () => {
  let wrapper: ReactWrapper;

  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

  const store = {
    movieReducer: {
      moviesRequestParams: {
        search: "",
        limit: 12,
        offset: 0,
        sortBy: "release_date",
        sortOrder: "desc",
        searchBy: "title",
        filter: [genres[1].value],
      },
    },
  };

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test("sort change", () => {
    const mockedDispatch = jest.fn();
    const event = { target: { value: sortOptions[0].value } };
    const sort = event.target.value.split("_");
    const sortBy = sort.slice(0, sort.length - 1).join("_");
    const sortOrder = sort[sort.length - 1];
    const actionUpdateParams = {
      type: actionTypes.UPDATE_MOVIES_REQUEST_PARAMS,
      payload: {
        offset: 0,
        sortBy,
        sortOrder,
      },
    };
    const actionGetMovies = {
      type: actionTypes.GET_MOVIES,
    };

    useSelectorMock.mockImplementation((selectorFn: any) => selectorFn(store));
    useDispatchMock.mockReturnValue(mockedDispatch);
    wrapper = mount(<FiltersContainer />);

    expect(wrapper.find({ label: "Sort by" }).props().onChange(event));
    expect(mockedDispatch).toHaveBeenCalledWith(actionUpdateParams);
    expect(mockedDispatch).toHaveBeenCalledWith(actionGetMovies);
  });
  test("genres change", () => {
    const mockedDispatch = jest.fn();
    const actionUpdateParamsFilter = {
      type: actionTypes.UPDATE_MOVIES_REQUEST_PARAMS,
      payload: {
        filter: [genres[0].value],
      },
    };
    const actionUpdateParamsOffset = {
      type: actionTypes.UPDATE_MOVIES_REQUEST_PARAMS,
      payload: {
        offset: 0,
      },
    };
    const actionGetMovies = {
      type: actionTypes.GET_MOVIES,
    };

    useSelectorMock.mockImplementation((selectorFn: any) => selectorFn(store));
    useDispatchMock.mockReturnValue(mockedDispatch);

    wrapper = mount(<FiltersContainer />);

    expect(wrapper.find({ name: genres[0].label }).props().onClick(genres[0]));
    expect(mockedDispatch).toHaveBeenCalledWith(actionUpdateParamsFilter);
    expect(mockedDispatch).toHaveBeenCalledWith(actionUpdateParamsOffset);
    expect(mockedDispatch).toHaveBeenCalledWith(actionGetMovies);
  });
  test("button class name if genre selected", () => {
    const className = "FiltersContainer__genre_selected";

    useSelectorMock.mockImplementation((selectorFn: any) => selectorFn(store));
    wrapper = mount(<FiltersContainer />);

    expect(wrapper.find({ name: genres[1].label }).hasClass(className)).toBe(true);
  });
});
