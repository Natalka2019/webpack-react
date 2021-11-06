import React from "react";
import { shallow } from "enzyme";
import Footer from "./index";
import { Logo } from "components";

test("Contains Logo", () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.contains(<Logo />)).toBeTruthy();
});
