/**
 * @jest-environment jsdom
 */

import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import InputField from "./index";

describe("InputField", () => {
  const onEnter = jest.fn();
  const onChange = jest.fn();

  test("input onEnter and onChange events provided as props", () => {
    const wrapper: ShallowWrapper<typeof InputField> = shallow(
      <InputField onEnter={onEnter} onChange={onChange} />
    );
    expect(wrapper.find("#input").simulate("keyPress"));
    expect(onEnter).toHaveBeenCalled();
    expect(wrapper.find("#input").simulate("change"));
    expect(onChange).toHaveBeenCalled();
  });
  test("input onEnter and onChange events NOT provided as props", () => {
    const wrapper: ShallowWrapper<typeof InputField> = shallow(<InputField />);
    expect(wrapper.find("#input").simulate("keyPress"));
    expect(onEnter).toHaveBeenCalled();
    expect(wrapper.find("#input").simulate("change"));
    expect(onChange).toHaveBeenCalled();
  });
});
