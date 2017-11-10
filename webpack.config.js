const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssExtractor = new ExtractTextPlugin('styles.css');
const htmlExtractor = new ExtractTextPlugin('../index.html');

module.exports = {
  context: path.resolve('source'),
  entry: {
    app: './app/index.js',
    createjs: '../node_modules/createjs/builds/1.0.0/createjs.js'
  },
  output: {
    path: path.resolve('dist/assets'),
    publicPath: '/assets',
    filename: '[name].js'
  },
  plugins: [
    cssExtractor,
    htmlExtractor
  ],
  devServer: {
    contentBase: './source/'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre'
      }
    ],
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: cssExtractor.extract('style', 'css')
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: cssExtractor.extract('style-loader', 'css-loader!sass-loader')
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: htmlExtractor.extract('html-loader!html-minify-loader')
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        loader: 'file-loader'
      },
      {
        test: /\.(woff2|woff)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.(ttf|eot|svg)$/,
        loader: 'file-loader'
      },
      {
        test: /node_modules(\/|\\)(createjs)(\/|\\).*\.js$/,
        loader: 'imports?this=>window!exports?window.createjs'
      }
    ],
  },
  resolve: {
    extensions: ['', '.css', '.scss', '.html', '.js'],
    modulesDirectories: ['node_modules']
  },
  eslint: {
    configFile: '.eslintrc'
  }
};
