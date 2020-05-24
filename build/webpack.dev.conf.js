const merge = require("webpack-merge");
const path = require("path");
const baseConfig = require("./webpack.base.conf");

module.exports = merge(baseConfig, {
	mode: "development",
	devtool: "inline-source-map",
	module: {
		rules: [ // 自己拓展着玩呀
		
		],
	},
	devServer: {
		contentBase: path.resolve(__dirname, "../dist"),
		open: true,
	},
});