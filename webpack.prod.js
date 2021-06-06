const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
	entry: {
        portfolio: path.join(__dirname, 'src', 'index.js'),
		resume: path.join(__dirname, 'src', 'biodata.js')
    },
	output: { 
		path: path.join(__dirname, 'portfolio'), 
		filename: '[name].[chunkhash].js'
	},
	mode: 'production',
	devtool: 'source-map',
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
			filename: 'index.html',
			chunks: ['portfolio']
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'biodata.html'),
			filename: 'resume.html',
			chunks: ['resume']
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
			messageUrl: 'https://portfolio-arunthomasalex.herokuapp.com/message/',
			resumeUrl: 'resume.html'
        })
    }
};
