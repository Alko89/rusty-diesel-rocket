const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './frontend/client.js',
  output: { 
    path: path.resolve(__dirname, 'static/assets/'),
    filename: 'bundle.js'
  },
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
  },
};
