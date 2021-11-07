import React from "react";
import { shallow } from "enzyme";
import MoviePage from "./index";
import { SearchResults, SearchHeader } from "containers";
import { Footer } from "components";

test("Contains SearchHeader, SearchResults, Footer", () => {
  const wrapper = shallow(<MoviePage />);
  expect(wrapper.contains(<SearchResults />)).toBeTruthy();
  expect(wrapper.contains(<SearchHeader />)).toBeTruthy();
  expect(wrapper.contains(<Footer />)).toBeTruthy();
});
