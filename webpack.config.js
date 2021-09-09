const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
{/* specify the entry and bundled file and path */}
module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.[hash].js",
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
      rules: [
          {
              test: /\.(js|jsx|tsx|ts)$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader'
              }
          },
          {
              test: /\.module\.s(a|c)ss$/,
              use: [
                "style-loader", 
                {
                  loader: "css-loader",
                  options: {
                    modules: {
                      localIdentName: "[local]--[hash:base64:5]",
                    },
                  },
                }, 
                "sass-loader"],
          },
          {
              test: /\.(png|svg|jp(e*)g|gif)$/,
              use: ["file-loader"]
          },
          {
              test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
              use: {
                loader: 'url-loader',
              },
            },
      ]
  },
  mode: 'development',
  plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.html'
      })
  ]
};