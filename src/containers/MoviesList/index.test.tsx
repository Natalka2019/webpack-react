/**
 * @jest-environment jsdom
 */

import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import MoviesList from "./index";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const mockStore = configureMockStore([sagaMiddleware]);

describe(" MoviesList", () => {
  test("Do not render MoviesList if moviesList.length === 0", () => {
    const movies = [];
    const store = mockStore({
      movieReducer: { movies: [] },
    });
    // // if (movies.length === 0) {
    // //   const wrapper: ShallowWrapper<typeof MoviesList> = shallow(
    // //     <MoviesList />
    const wrapper = shallow(
      <Provider store={store}>
        <MoviesList />
      </Provider>
    );
    //   );
    //  expect(wrapper.find("MoviesList").children()).toHaveLength(1);
    // expect(wrapper.find("MoviesList").children()).toBe(true);
    // expect(wrapper.find("MoviesList").html()).toEqual("Hello");
    expect(wrapper.find(".noData").getElement()).toEqual("Hello");
  });
  // test("Render MoviesList if moviesList.length !== 0", () => {
  //   const movies = [1, 2, 3];

  //   if (movies.length !== 0) {
  //     const wrapper: ShallowWrapper<typeof MoviesList> = shallow(
  //       <MoviesList />
  //     );
  //     expect(wrapper.isEmptyRender()).toEqual(false);
  //   }
  // });
});
