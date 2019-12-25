const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    bundle: './index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: "umd",
    library: "config",
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: 'template/index.html',
        inject: true,
        appMountId: 'app',
    }),
  ],
  externals: {
    config: {
        commonjs: "config",//如果我们的库运行在Node.js环境中，import _ from 'lodash'等价于const _ = require('lodash')
        commonjs2: "config",//同上
        amd: "config",//如果我们的库使用require.js等加载,等价于 define(["lodash"], factory);
        root: "config"//如果我们的库在浏览器中使用，需要提供一个全局的变量‘_’，等价于 var _ 
    },
  }
};

module.exports = config;