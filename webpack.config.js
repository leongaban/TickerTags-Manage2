const fs = require('fs');
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const build = path.resolve(__dirname, "build");
const src = path.resolve(__dirname, "src");
// const environment = process.env.NODE_ENV;
// https://gist.github.com/leongaban/dc92204454b3513e511645af98107775

module.exports = {
  context: src,
  entry: [
    "./index.js"
  ],
  output: {
    path: build,
    filename: "manage2.bundle.js",
    publicPath: '/static/',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: ["css-loader", "sass-loader"],
          publicPath: build
        })
      }
    ]
  },
  devServer: {
    hot: false,
    quiet: true,
    publicPath: "",
    contentBase: path.join(__dirname, "build"),
    compress: true,
    stats: "errors-only",
    open: true,
    proxy: {
        '/app': {
            target: 'http://localhost',
            secure: false
        }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    }),
    new ExtractTextPlugin({
      filename: "manage2.css",
      disable: false,
      allChunks: true
    }),
    new CopyWebpackPlugin([{ from: "static", to: "static" }])
  ],
  node: {
    net: 'empty',
    dns: 'empty'
  }
};