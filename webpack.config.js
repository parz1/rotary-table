const path = require("path");
const webpack = require("webpack");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const rootPath = path.resolve(__dirname, "source");
const nodeModulesPath = path.resolve(__dirname, "node_modules");

module.exports = {
  context: rootPath,
  mode: "development",
  entry: {
    createjs: path.join(nodeModulesPath, "/createjs/builds/1.0.0/createjs.js"),
    app: path.join(rootPath, "/app.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  devServer: {
    contentBase: rootPath,
    stats: {
      warnings: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /node_modules(\/|\\)(createjs)(\/|\\).*\.js$/,
        loader: "imports-loader?this=>window!exports-loader?window.createjs",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "CreateJS Boilerplate",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: "[name].js.map",
      exclude: ["createjs.js"],
    }),
  ],
  resolve: {
    alias: {
      "@": rootPath,
      "@createjs/EaselJS": path.resolve(rootPath, "createjs"),
      "@createjs": path.resolve(rootPath, "createjs"),
    },
  },
};
