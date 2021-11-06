/**
 * @jest-environment jsdom
 */

import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import ActivityModal from "./index";

describe("ActivityModal", () => {
  const onDelete = jest.fn();
  const onEdit = jest.fn();
  const id = 5;

  test("Do not render activity modal if no id provided", () => {
    const wrapper: ShallowWrapper<typeof ActivityModal> = shallow(
      <ActivityModal onDelete={onDelete} onEdit={onEdit} />
    );
    expect(wrapper.getElement()).toEqual(null);
  });
  test("Render activity modal if id provided", () => {
    const wrapper: ShallowWrapper<typeof ActivityModal> = shallow(
      <ActivityModal onDelete={onDelete} onEdit={onEdit} id={id} />
    );
    expect(wrapper.isEmptyRender()).toEqual(false);
    expect(wrapper.find("div").children()).toHaveLength(2);
    expect(wrapper.find({ name: "Delete" }).simulate("click"));
    expect(onDelete).toHaveBeenCalled();
    expect(wrapper.find({ name: "Edit" }).simulate("click"));
    expect(onEdit).toHaveBeenCalled();
  });
});
