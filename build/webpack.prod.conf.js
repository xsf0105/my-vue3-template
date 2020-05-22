const merge = require("webpack-merge");
const path = require("path");
const baseConfig = require("./webpack.base.conf");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
		{
			test: /\.css$/,
			use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
		},
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, "../"),
      verbose: true,
      dry: false,
	}),
	// 抽取 CSS 到单文件
	new MiniCssExtractPlugin({
		filename: "[name].css",
		chunkFilename: "[id].css"
	})
  ],
});
