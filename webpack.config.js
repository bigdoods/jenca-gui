'use strict';

var path = require('path')
var webpack = require('webpack')

const RELEASE = process.env.RELEASE ? true : false

module.exports = {
  devtool: [
    'source-map'
  ],
  entry: [
    './src/app'
  ],
    
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
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
          presets: ['es2015', 'react', 'stage-1']
        }
      }

    ]
  }
};