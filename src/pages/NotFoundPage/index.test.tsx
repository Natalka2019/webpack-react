import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import NotFound from "./index";

test("Not found message", () => {
  const wrapper: ShallowWrapper<typeof NotFound> = shallow(<NotFound />);
  expect(wrapper.text()).toEqual(
    "404 page not foundWe are sorry but the page you are looking for does not exist."
  );
});
