const webpack = require('webpack');
const path = require('path');

const config = {
  entry: {
    components: './components/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: "umd",
    library: "components",
  },
  externals: {
    config: 'config',
  }
};

module.exports = config;