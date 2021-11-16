import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import InputField from "./index";

export default {
  title: "InputField",
  component: InputField,
  args: {
    label: "Label for below field",
  },
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => <InputField {...args} />;

export const Default = Template.bind({});

export const Id = Template.bind({});
Id.args = {
  name: "id",
  value: "123",
};

export const Date = Template.bind({});
Date.args = {
  type: "date",
};
