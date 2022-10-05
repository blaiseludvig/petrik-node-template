const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  optimization: {
    minimize: false,
  },
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    watchFiles: ['src/**/*'],
    host: "0.0.0.0",
    port: "8080",
    open: true,
    compress: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "src/index.html", to: "index.html" },
        { from: "src/images/favicon-32x32.png", to: "favicon-32x32.png" },
      ],
    }),
  ],
};

module.exports = config;
