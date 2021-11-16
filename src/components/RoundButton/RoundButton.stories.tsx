import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RoundButton from "./index";

export default {
  title: "RoundButton",
  component: RoundButton,
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "dark",
          value: "#232323",
        },
      ],
    },
  },
} as ComponentMeta<typeof RoundButton>;

const Template: ComponentStory<typeof RoundButton> = (args) => <RoundButton {...args} />;

export const Default = Template.bind({});
