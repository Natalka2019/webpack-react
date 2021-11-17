const path = require("path");
const common = require("./webpack.common");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: false,
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.[contenthash].js", // If the file's contents don't change, the content hash doesn't change
  },
  module: {
    rules: [
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extracts css into files
          {
            loader: "css-loader", // take all the CSS from the CSS file and generate it to a single string and will pass this to style-loader.
            options: {
              modules: {
                localIdentName: "[local]--[hash:base64:5]",
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(), //  minify/minimize JavaScript.
      new HtmlWebpackPlugin({
        // The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags.
        template: "./src/index.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
      new HtmlMinimizerPlugin(),
    ],
    splitChunks: {
      // Our bundle's name contains a contenthash for cache validation in the browser. When we change some code in our app, we create a new bundle that includes a different contenthash, and users will download it again. Frequently we'll change code inside our app directory and not change our npm dependencies, but our users will anew download the whole bundle. Here is where splitChunks can help us.
      chunks: "all",
      // minSize: 20000,
      maxInitialRequests: 20, // maximum number of source files that can be loaded in parallel for entry-point imports and split-point imports, respectively.
      maxAsyncRequests: 20,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name(module, chunks, cacheGroupKey) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `vendors_${cacheGroupKey}.${packageName.replace("@", "")}`;
          },
        },
        common: {
          minChunks: 2,
          priority: -10, // Assigns a negative priority to the common cache group so that chunks for the vendors cache group would be considered first.
        },
      },
    },
    runtimeChunk: "single",
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }), //This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS.
    new CleanWebpackPlugin(),
    // new BundleAnalyzerPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: "[name].js.map",
    }),
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 20000, // Minimum number of characters
    }),
  ],
});
