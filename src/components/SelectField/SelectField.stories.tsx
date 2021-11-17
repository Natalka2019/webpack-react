import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import options from "../../common/sortOptions";

import SelectField from "./index";

export default {
  title: "SelectField",
  component: SelectField,
  args: {
    label: "Sort label",
    optionsList: options,
    placeholder: "Select sort option",
  },
} as ComponentMeta<typeof SelectField>;

const Template: ComponentStory<typeof SelectField> = (args) => <SelectField {...args} />;

export const Default = Template.bind({});
