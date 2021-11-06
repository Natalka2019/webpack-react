/**
 * @jest-environment jsdom
 */

import React from "react";
import { shallow, ShallowWrapper, mount, ReactWrapper } from "enzyme";
import MovieModal from "./index";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import createSagaMiddleware from "redux-saga";
import { Button } from "components";

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
      poster_path:
        "https://www.themoviedb.org/t/p/original/cDbNAY0KM84cxXhmj8f0dLWza3t.jpg",
    };
    wrapper = mount(
      <Provider store={store}>
        <MovieModal
          buttonName={buttonName}
          modalTitle={modalTitle}
          movie={movie}
        />
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
  // test("onSubmit triggered", () => {
  //   const handleSubmit = jest.fn();
  //   wrapper = mount(
  //     <Provider store={store}>
  //       <MovieModal buttonName={buttonName} modalTitle={modalTitle} />
  //     </Provider>
  //   );

  //   const button = wrapper.find({ type: "submit" }).at(0);
  //   expect(button.simulate("click"));
  //   // expect(wrapper.find(".MovieModal__form").simulate("submit"));
  //   // wrapper.find({ type: "submit" }).at(0).click();
  //   // expect(wrapper.find({ type: "submit" }).at(0).getElement()).toEqual(null);
  //   expect(handleSubmit).toHaveBeenCalled();
  // });
  // test("Render activity modal if id provided", () => {
  //   const wrapper: ShallowWrapper<typeof ActivityModal> = shallow(
  //     <ActivityModal onDelete={onDelete} onEdit={onEdit} id={id} />
  //   );
  //   expect(wrapper.isEmptyRender()).toEqual(false);
  //   expect(wrapper.find("div").children()).toHaveLength(2);
  //   expect(wrapper.find({ name: "Delete" }).simulate("click"));
  //   expect(onDelete).toHaveBeenCalled();
  //   expect(wrapper.find({ name: "Edit" }).simulate("click"));
  //   expect(onEdit).toHaveBeenCalled();
  // });
});
