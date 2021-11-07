/**
 * @jest-environment jsdom
 */

import React from "react";
import { shallow, mount, ReactWrapper } from "enzyme";
import Poster from "./index";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import createSagaMiddleware from "redux-saga";
import { createMemoryHistory } from "history";

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
    poster_path:
      "https://www.themoviedb.org/t/p/w500/nzWdHTq53KMQFphullKFaVi6252.jpg",
  };

  const store = mockStore({
    movieReducer: {
      deleteMovieStatus: {
        loading: false,
        success: null,
        error: null,
      },
      movieModalStatus: false,
    },
  });

  // const setState = jest.fn();
  // const useStateSpy = jest.spyOn(React, "useState");
  // const init = movie;
  // useStateSpy.mockImplementation([init, setState] as any);

  afterEach(() => {
    wrapper.unmount();
  });

  test("onManageMovie", () => {
    wrapper = mount(
      <Provider store={store}>
        <Poster movie={movie} />
      </Provider>
    );
    expect(wrapper.find({ id: "roundButton" }).at(0).props().onClick());
  });
  // test("activityModal", () => {
  //   expect(wrapper.find({ id: "activityModalWrapper" }).getElement()).toEqual(
  //     "Hello"
  //   );

  //   // expect(wrapper.find({ id: movie.id }).at(0).props().onClick());
  // });
  // test("deleteModal", () => {
  //   expect(wrapper.find({ id: "deleteModalWrapper" }).at(0).props().onClick());
  //   // expect(wrapper.find({ id: "deleteModal" }).at(0).props().onClick());
  // });
  // test("movieModal", () => {
  //   expect(wrapper.find({ id: "movieModalWrapper" }).at(0).props().onClick());
  //   // expect(wrapper.find({ id: "movieModal" }).at(0).props().onClick());
  // });
});
