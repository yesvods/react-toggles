'use strict';

module.exports = {
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.s[c|a]ss$/, loader: 'style!css?modules&importLoaders=2&localIdentName=[local]___[hash:base64:5]!sass' },
    ]
  },
  output: {
    library: 'ES678-boilderplate',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js']
  },
  devtool: 'source-map',
};