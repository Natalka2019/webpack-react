/**
 * @jest-environment jsdom
 */

import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import DeleteModal from "./index";

describe("DeleteModal", () => {
  const onConfirm = jest.fn();

  test("Render activity modal if id provided", () => {
    const wrapper: ShallowWrapper<typeof DeleteModal> = shallow(
      <DeleteModal onConfirm={onConfirm} />
    );
    expect(wrapper.find({ name: "Confirm" }).simulate("click"));
    expect(onConfirm).toHaveBeenCalled();
  });
});
