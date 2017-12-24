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
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      }
    ]
  },
};
