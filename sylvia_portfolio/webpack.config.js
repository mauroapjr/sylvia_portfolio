const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      { test: /\.html$/, use: 'html-loader' }
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/story.html' })],
};