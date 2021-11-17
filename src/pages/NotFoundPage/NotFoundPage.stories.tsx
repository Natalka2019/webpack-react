import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import NotFoundPage from "./index";

export default {
  title: "NotFoundPage",
  component: NotFoundPage,
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />;

export const Default = Template.bind({});
