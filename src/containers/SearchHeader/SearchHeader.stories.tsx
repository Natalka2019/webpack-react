import React from "react";
import { Provider } from "react-redux";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { MemoryRouter } from "react-router";

import SearchHeader from "./index";

const store = {
  getState: () => {
    return {
      movieReducer: {
        movieModalStatus: false,
      },
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
} as any;

export default {
  title: "SearchHeader",
  component: SearchHeader,
  decorators: [
    (story) => (
      <Provider store={store}>
        <MemoryRouter initialEntries={["/search"]}>{story()}</MemoryRouter>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof SearchHeader>;

const Template: ComponentStory<typeof SearchHeader> = (args) => <SearchHeader {...args} />;

export const Default = Template.bind({});
