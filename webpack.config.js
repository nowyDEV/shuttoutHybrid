const path = require('path')
const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.web.js'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          plugins: ['react-native-web/babel'],
          presets: ['react-native']
        }
      },
      {
        test: /\.css$/,
        exclude: /^node_modules$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [ '.web.js', '.js' ],
    alias: {
      'react-native': 'react-native-web',
      'react': 'react-v-15.6'
    }
  },
  output: {
    path: __dirname + '/web/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './web/dist'
  }
};