import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./index";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    type: { control: "type" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "button",
  name: "Button",
};

export const Submit = Template.bind({});
Submit.args = {
  isDisabled: false,
  type: "submit",
  name: "Submit",
};

export const Reset = Template.bind({});
Reset.args = {
  type: "reset",
  name: "Reset",
};
