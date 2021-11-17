import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DeleteModal from "./index";

export default {
  title: "DeleteModal",
  component: DeleteModal,
} as ComponentMeta<typeof DeleteModal>;

const Template: ComponentStory<typeof DeleteModal> = (args) => <DeleteModal {...args} />;

export const Default = Template.bind({});
