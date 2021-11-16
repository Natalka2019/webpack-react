import React from "react";
import { Provider } from "react-redux";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import FiltersContainer from "./index";

const store = {
  getState: () => {
    return {
      movieReducer: {
        moviesRequestParams: {
          search: "",
          limit: 12,
          offset: 0,
          sortBy: "release_date",
          sortOrder: "desc",
          searchBy: "title",
          filter: ["All"],
        },
      },
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
} as any;

export default {
  title: "FiltersContainer",
  component: FiltersContainer,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof FiltersContainer>;

const Template: ComponentStory<typeof FiltersContainer> = (args) => <FiltersContainer {...args} />;

export const Default = Template.bind({});
