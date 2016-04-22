/* global __dirname */

var path = require('path');

var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var dir_js = path.resolve(__dirname, 'js');
var dir_less = path.resolve(__dirname, 'less');
var dir_style = path.resolve(__dirname, 'style');
var dir_html = path.resolve(__dirname, 'html');
var dir_build = path.resolve(__dirname, 'dist');

module.exports = {
  entry: path.resolve(dir_js, 'app.jsx'),
  output: {
    path: dir_build,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: dir_build,
    port: 8000,
  },
  module: {
    loaders: [
      {
        loader: 'react-hot',
        test: dir_js,
      },
      {
        loader: 'babel-loader',
        test: dir_js,
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        loader: "style-loader!css-loader!less-loader",
        //test: /\.css$/,
        test: dir_less
      },
    ]
  },
  plugins: [
    // Simply copies the files over
    new CopyWebpackPlugin([
      { from: dir_html }, // to: output.path
      { from: dir_style }
    ]),
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin()
  ],
  stats: {
    // Nice colored output
    colors: true
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map',
};
