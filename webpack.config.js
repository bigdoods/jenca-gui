'use strict';

var path = require('path')
var webpack = require('webpack');

var RELEASE = process.env.RELEASE ? true : false;

module.exports = {

  entry: path.resolve(__dirname, 'src', 'app.js'),
    
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  plugins: RELEASE ? [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ] : [],

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }

    ]
  }
};