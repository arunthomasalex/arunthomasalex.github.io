const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        portfolio: path.join(__dirname, 'src', 'index.js'),
		resume: path.join(__dirname, 'src', 'biodata.js')
    },
	output: { 
		path: path.join(__dirname, 'portfolio'), 
		filename: '[name].[chunkhash].js'
	},
    module: {
		rules: [
			{
				test: /\.(js|jsx)$/, 
				exclude: /node_modules/, 
				use: ["babel-loader", "eslint-loader"]
			},
			{
				test: /\.(css|scss)$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
			{ 
				test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
				use: 'file-loader'
			},
		 ],
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html'),
			filename: 'index.html',
			chunks: ['portfolio']
		})
	]
}