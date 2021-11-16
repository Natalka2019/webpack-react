import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FormInputField from "./index";

export default {
  title: "FormInputField",
  component: FormInputField,
  args: {
    register: () => null,
    label: "Label",
    placeholder: "Enter text here",
  },
} as ComponentMeta<typeof FormInputField>;

const Template: ComponentStory<typeof FormInputField> = (args) => <FormInputField {...args} />;

export const Default = Template.bind({});

export const withError = Template.bind({});

withError.args = {
  error: "Some error",
};
