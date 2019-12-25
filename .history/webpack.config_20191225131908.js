const webpack = require('webpack');
const path = require('path');

const config = {
  entry: [
    './index.js',
    './config/index.js',
  ],
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