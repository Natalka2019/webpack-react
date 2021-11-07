/**
 * @jest-environment jsdom
 */

import React from "react";
import { shallow, ShallowWrapper, mount } from "enzyme";
import Modal from "./index";

describe("Modal", () => {
  const onCloseModal = jest.fn();
  let isModalOpen: boolean;
  const Child = () => <div>Hello world!</div>;

  const modalRoot = global.document.createElement("div");
  modalRoot.setAttribute("id", "modal-root");
  const body = global.document.querySelector("body");
  body?.appendChild(modalRoot);

  test("Do not render Modal if isModalOpen === false or no such property given", () => {
    const wrapper: ShallowWrapper<typeof Modal> = shallow(
      <Modal onCloseModal={onCloseModal} />
    );
    expect(wrapper.getElement()).toEqual(null);
  });
  test("should mount modal on the div with id modal-root", () => {
    const modalRootEl = global.document.querySelector("#modal-root");
    expect(modalRootEl?.hasChildNodes()).toBeFalsy();

    isModalOpen = true;

    const wrapper = mount(
      <Modal onCloseModal={onCloseModal} isModalOpen={isModalOpen}>
        <Child />
      </Modal>
    );

    expect(modalRootEl?.hasChildNodes()).toBeTruthy();

    expect(wrapper.find(Modal).prop("isModalOpen")).toBe(true);
    expect(wrapper.find(".Modal__overlay").simulate("click"));
    expect(wrapper.find(".Modal__button").simulate("click"));
    expect(onCloseModal).toHaveBeenCalledTimes(2);

    wrapper.unmount();
  });
});
