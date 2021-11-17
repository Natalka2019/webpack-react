const path = require("path");
const webpackConfig = require("../webpack.common.js");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
    "@storybook/preset-scss",
    "@storybook/addon-backgrounds",
  ],
  webpackFinal: (config) => {
    config.resolve.alias = {
      ...webpackConfig.resolve.alias,
      ...config.resolve.alias,
    };
    return config;
  },
};
