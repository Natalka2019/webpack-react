import React from "react";
import Button from "./index";
import { shallow } from "enzyme";

const clickFn = jest.fn();

describe("Button", () => {
  test("button click should hide component", () => {
    const wrapper = shallow(<Button onClick={clickFn} name={"submit"} />);
    wrapper.find(".Button").simulate("click");
    expect(clickFn).toHaveBeenCalled();
  });
});
