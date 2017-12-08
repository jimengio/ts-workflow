var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
	entry: {
		vendor: [
			"react",
			"react-dom",
			"mobx",
			"mobx-react",
			"react-router-dom",
			"font-awesome/css/font-awesome.min.css"
		],
		main: ["./src/main.tsx"]
	},
	output: {
		filename: "[name].[chunkhash:8].js",
		path: path.join(__dirname, "/dist")
	},
	devtool: "none",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			},
			{
				test: /\.tsx?$/,
				loader: "awesome-typescript-loader",
				exclude: /node_modules/
			},
			{
				test: /\.(eot|svg|ttf|jpg|png|woff2?|mp3)(\?.+)?$/,
				loader: "url-loader",
				query: {
					limit: 100,
					name: "fonts/[hash:8].[ext]"
				}
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			minChunks: Infinity
		}),
		new ExtractTextPlugin("[name].[chunkhash:8].css"),
		new UglifyJSPlugin({
			uglifyOptions: { ie8: false, ecma: 8 }
		}),
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "template.ejs"
		})
	]
};
