const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
  },

  mode: "production",

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCSSExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
    ],
  },

  plugins: [
    new MiniCSSExtractPlugin({
      filename: "styles.[contenthash].css",
    }),

    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: "src/index.html",
      title: "Canonical Web Developer - Home Test",
      description: "Canonical Web Developer - Home Test. Realized on 25/11/2022.",
      minify: true,
    }),
  ],
};
