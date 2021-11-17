import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import genres from "../../common/genres";

import SelectComponent from "./index";

export default {
  title: "SelectComponent",
  component: SelectComponent,
  args: {
    label: "Select label",
    options: genres,
    placeholder: "Select from options",
  },
} as ComponentMeta<typeof SelectComponent>;

const Template: ComponentStory<typeof SelectComponent> = (args) => <SelectComponent {...args} />;

export const Default = Template.bind({});

export const withError = Template.bind({});

withError.args = {
  error: "Some error",
};
