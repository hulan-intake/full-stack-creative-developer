const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  devtool: "inline-source-maps",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.min.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};