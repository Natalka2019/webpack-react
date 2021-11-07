import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Logo from "./index";

test("Netflix title", () => {
  const wrapper: ShallowWrapper<typeof Logo> = shallow(<Logo />);
  expect(wrapper.text()).toEqual("netflixroulette");
});
