import React from "react";
import { Provider } from "react-redux";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { MemoryRouter } from "react-router";

import MoviesPage from "./index";

const store = {
  getState: () => {
    return {
      movieReducer: {
        movieModalStatus: false,
        movies: [
          {
            id: 4,
            title: "Fringe",
            genres: ["Sci-Fi"],
            vote_average: 8.4,
            release_date: "2008-01-01",
            overview:
              "An F.B.I. agent is forced to work with an institutionalized scientist and his son in order to rationalize a brewing storm of unexplained phenomena.",
            runtime: 5000,
            poster_path: "https://www.themoviedb.org/t/p/w500/sY9hg5dLJ93RJOyKEiu1nAtBRND.jpg",
          },
          {
            id: 8,
            title: "A Christmas Prince",
            genres: ["Fantasy"],
            vote_average: 5.8,
            release_date: "2017-01-01",
            overview:
              "When a reporter goes undercover as a tutor to get the inside scoop on a playboy prince, she gets tangled in some royal intrigue and ends up finding love - but will she be able to keep up her lie?",
            runtime: 92,
            poster_path:
              "https://m.media-amazon.com/images/M/MV5BNWMzZTE4NTYtOGRiNi00YzQ2LWJiNjctMzk1NDU4NmY5ZGQwXkEyXkFqcGdeQXVyODIyMzA4NDc@._V1_.jpg",
          },
          {
            id: 9,
            title: "Continuum",
            genres: ["Sci-Fi"],
            vote_average: 7.6,
            release_date: "2012-01-01",
            overview:
              "A detective from the year 2077 finds herself trapped in present-day Vancouver and searching for ruthless criminals from the future.",
            runtime: 1848,
            poster_path:
              "https://m.media-amazon.com/images/M/MV5BMTUzNTU1NzQ2Ml5BMl5BanBnXkFtZTcwMDUzNjk4Nw@@._V1_.jpg",
          },
          {
            id: 10,
            title: "Meet Joe Black",
            genres: ["Fantasy"],
            vote_average: 7.2,
            release_date: "1998-01-01",
            overview:
              "Death, who takes the form of a young man, asks a media mogul to act as a guide to teach him about life on Earth, and in the process, he falls in love with his guide's daughter.",
            runtime: 181,
            poster_path: "https://www.themoviedb.org/t/p/original/baH1LWTmKooo35s9YXkGabDJJaG.jpg",
          },
        ],
        moviesRequestParams: {
          search: "",
          limit: 12,
          offset: 0,
          sortBy: "release_date",
          sortOrder: "desc",
          searchBy: "title",
          filter: ["All"],
        },
        moviesTotal: 30,
      },
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
} as any;

export default {
  title: "MoviesPage",
  component: MoviesPage,
  decorators: [
    (story) => (
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof MoviesPage>;

const Template: ComponentStory<typeof MoviesPage> = (args) => <MoviesPage {...args} />;

export const Default = Template.bind({});
