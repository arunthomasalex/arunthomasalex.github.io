const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');

module.exports = {
	entry: path.join(__dirname, 'src', 'index.js'),
	output: { 
		path: path.join(__dirname, 'portfolio'), 
		filename: 'build.[chunkhash].js' 
	},
	mode: process.env.NODE_ENV || 'development',
	devtool: (process.env.NODE_ENV == 'production') ? 'source-map' : 'inline-source-map',
	// devtool: 'inline-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'src')
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/, 
				exclude: /node_modules/, 
				loader: 'babel-loader'
			},
			{
				test: /\.(css|scss)$/,
				use: ['style-loader', 'css-loader'],
			},
			{ 
				test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
				use: 'file-loader'
			},
		 ],
	},
	plugins: [
		 new HtmlWebpackPlugin({
			 template: path.join(__dirname, 'src', 'index.html'),
		 }),
		 new RemovePlugin({
			 before: {
				root: ".",
				test: [
					{
						folder: './portfolio',
						method: () => true,
						recursive: true
					}
				]
			 }
		 })
	]
};
