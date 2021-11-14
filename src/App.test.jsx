/**
 * @jest-environment jsdom
 */

import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import { SearchPage, MoviesPage, MoviePage } from "pages";
import Routes from "./routes";
import { Route } from "react-router-dom";
import { MemoryRouter } from "react-router";

let pathMap = {};
describe("routes using array of routers", () => {
  beforeAll(() => {
    const component = shallow(<App />);
    pathMap = component.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});
  });
  test("paths should match components", () => {
    console.log(pathMap);
    expect(pathMap[Routes.ROOT]).toEqual(MoviesPage);
    expect(pathMap[Routes.SEARCH]).toEqual(SearchPage);
    expect(pathMap[`${Routes.MOVIE}/:id`]).toEqual(MoviePage);
  });
});

describe("test render of components according to paths", () => {
  test("invalid path should trigger render of NotFoundPage", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/random"]}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(".NotFound")).toHaveLength(1);
    expect(wrapper.find(".SearchPage")).toHaveLength(0);
  });
  test("/search path should trigger render of SearchPage", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[Routes.SEARCH]}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(".NotFound")).toHaveLength(0);
    expect(wrapper.find(".SearchPage")).toHaveLength(1);
  });
  test("/ path should trigger render of MoviesPage", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[Routes.ROOT]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(".MoviesPage")).toHaveLength(1);
  });
  test("/movie path should trigger render of MoviePage", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[`${Routes.MOVIE}/:id`]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(".MoviePage")).toHaveLength(1);
  });
});
