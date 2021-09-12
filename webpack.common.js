const path = require("path");


module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx'],
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
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
        test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings, pass the rest to file-loader
              name: 'images/[hash]-[name].[ext]'
            },
          },
        ]
      },
    ]
  },
};