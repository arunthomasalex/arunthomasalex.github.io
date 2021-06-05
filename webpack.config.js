const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
	entry: path.join(__dirname, 'src', 'index.js'),
	output: { 
		path: path.join(__dirname, 'portfolio'), 
		filename: 'build.[chunkhash].js' 
	},
	mode: process.env.NODE_ENV || 'development',
	devtool: (process.env.NODE_ENV == 'production') ? 'source-map' : 'inline-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'src')
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
		}),
		new RemovePlugin({
			before: {
				root: ".",
				test: [{
					folder: './portfolio',
					method: () => true,
					recursive: true
				}]
			}
		}),
        new FileManagerPlugin({
            events: {
                onEnd: {
                    copy: [
                        { source: './datas/*.json', destination: './portfolio' }
                    ]
                }
            }
        })
	],
	externals: {
        config: JSON.stringify({
            portfolioJson: 'https://arunthomasalex.github.io/portfolio/portfolio.json',
			messageUrl: 'http://127.0.0.1:8000/message/'
			// messageUrl: 'https://portfolio-arunthomasalex.herokuapp.com/message/'
        })
    }
};
