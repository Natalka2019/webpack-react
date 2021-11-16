import React from "react";
import { Provider } from "react-redux";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import MovieModal from "./index";

const store = {
  getState: () => null,
  subscribe: () => 0,
  dispatch: action("dispatch"),
} as any;

export default {
  title: "MovieModal",
  component: MovieModal,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  args: {
    buttonName: "Submit",
  },
} as ComponentMeta<typeof MovieModal>;

const Template: ComponentStory<typeof MovieModal> = (args) => <MovieModal {...args} />;

export const Default = Template.bind({});
