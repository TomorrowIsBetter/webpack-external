const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    bundle: './index.js',
    config: './config/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: 'template/index.html',
        inject: true,
        appMountId: 'app',
    }),
  ],
};

module.exports = config;