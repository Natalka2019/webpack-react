import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ActivityModal from "./index";

export default {
  title: "ActivityModal",
  component: ActivityModal,
  args: {
    id: 5,
  },
} as ComponentMeta<typeof ActivityModal>;

const Template: ComponentStory<typeof ActivityModal> = (args) => <ActivityModal {...args} />;

export const Default = Template.bind({});
