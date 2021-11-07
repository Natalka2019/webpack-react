import React from "react";
import { shallow } from "enzyme";
import SearchResults from "./index";
import { FiltersContainer, MoviesList } from "containers";

test("Contains FiltersContainer and MoviesList", () => {
  const wrapper = shallow(<SearchResults />);
  expect(wrapper.contains(<FiltersContainer />)).toBeTruthy();
  expect(wrapper.contains(<MoviesList />)).toBeTruthy();
});
