import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ErrorFallback from "./index";

export default {
  title: " ErrorFallback",
  component: ErrorFallback,
} as ComponentMeta<typeof ErrorFallback>;

const Template: ComponentStory<typeof ErrorFallback> = (args) => <ErrorFallback {...args} />;

export const Default = Template.bind({});
