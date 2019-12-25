const webpack = require('webpack');
const path = require('path');

const config = {
  entry: {
    config: './config/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: "umd",
    library: "config",
  },
};

module.exports = config;