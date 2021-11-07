import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import FormInputField from "./index";

describe("FormInputField", () => {
  const register = jest.fn();

  test("Render error message if error prop provided", () => {
    const error = "Error";

    const wrapper: ShallowWrapper<typeof FormInputField> = shallow(
      <FormInputField error={error} register={register} />
    );
    expect(wrapper.find(".InputField__error")).toHaveLength(1);
  });
  test("Do not render error message if error prop not provided", () => {
    const wrapper: ShallowWrapper<typeof FormInputField> = shallow(
      <FormInputField register={register} />
    );
    expect(wrapper.find(".InputField__error")).toHaveLength(0);
  });
});
