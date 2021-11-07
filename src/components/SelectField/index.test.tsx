import React from "react";
import SelectField from "./index";
import { shallow } from "enzyme";

describe("SelectField", () => {
  const onChange = jest.fn();
  const label = "Select";
  const optionsList = [
    { value: "release_date_desc", label: "Release, DESC" },
    { value: "release_date_asc", label: "Release, ASC" },
  ];

  test("onChange function provided", () => {
    const wrapper = shallow(
      <SelectField
        onChange={onChange}
        label={label}
        optionsList={optionsList}
      />
    );
    wrapper.find(".SelectField__select").simulate("change");
    expect(onChange).toHaveBeenCalled();
  });
  test("onChange function NOT provided", () => {
    const wrapper = shallow(
      <SelectField label={label} optionsList={optionsList} />
    );
    wrapper.find(".SelectField__select").simulate("change");
    expect(onChange).toHaveBeenCalled();
  });
});
