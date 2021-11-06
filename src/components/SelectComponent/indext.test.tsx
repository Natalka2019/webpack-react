import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import SelectComponent from "./index";

describe("SelectComponent", () => {
  const label = "Sort";
  const placeholder = "All";
  const onChange = jest.fn();
  const name = "sort";
  const options = [
    { value: "release_date_desc", label: "Release, DESC" },
    { value: "release_date_asc", label: "Release, ASC" },
  ];

  test("label prop provided", () => {
    const wrapper: ShallowWrapper<typeof SelectComponent> = shallow(
      <SelectComponent
        label={label}
        options={options}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
      />
    );
    expect(wrapper.find(".SelectComponent__label").exists()).toBeTruthy();
  });
  test("label, placeholder and name props NOT provided", () => {
    const wrapper: ShallowWrapper<typeof SelectComponent> = shallow(
      <SelectComponent options={options} onChange={onChange} />
    );
    expect(wrapper.find(".SelectComponent__label").exists()).toBeFalsy();
  });
});
