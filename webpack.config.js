var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
    publicPath: "/"
  },
  devServer: {
    contentBase: "./",
    historyApiFallback: true,
    port: 5000
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      Components: path.resolve(__dirname, "src/components/"),
      Core: path.resolve(__dirname, "src/core/"),
      Shared: path.resolve(__dirname, "src/components/shared/")
    }
  },
  module: {
    rules: [
      { test: /\.(js)$/, include: /src/, use: "babel-loader" },
      { test: /\.css$/, include: /src/, use: ["style-loader", "css-loader"] },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader"
          }
        ],
        include: /src/,
        exclude: /node_modules/
      }
    ]
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html"
    })
  ]
};
