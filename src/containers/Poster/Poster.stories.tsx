import React from "react";
import { Provider } from "react-redux";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Poster from "./index";

const store = {
  getState: () => {
    return {
      movieReducer: {
        deleteMovieStatus: {
          loading: false,
          success: null,
          error: null,
        },
        movieModalStatus: false,
      },
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
} as any;

export default {
  title: "Poster",
  component: Poster,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  args: {
    movie: {
      id: 5,
      title: "Person of interest",
      genres: ["Crime"],
      vote_average: 8.4,
      release_date: "2011-01-01",
      overview:
        "An ex-CIA agent and a wealthy programmer save lives via a surveillance AI that sends them the identities of civilians involved in impending crimes. However, the details of the crimes, including the civilians' roles, are left a mystery.",
      runtime: 1012,
      poster_path: "https://www.themoviedb.org/t/p/w500/nzWdHTq53KMQFphullKFaVi6252.jpg",
    },
  },
} as ComponentMeta<typeof Poster>;

const Template: ComponentStory<typeof Poster> = (args) => <Poster {...args} />;

export const Default = Template.bind({});
