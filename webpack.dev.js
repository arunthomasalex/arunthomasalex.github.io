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
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'portfolio'),
		historyApiFallback: { // expose 2 end points "/" and "/resume"
			rewrites: [
			  { from: /^\/$/, to: '/index.html' },
			  { from: /^\/resume/, to: '/resume.html' }
			],
		  }
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
			baseTag: '<base href="/">', //inject into the html page directly by webpack, a place holder <%= htmlWebpackPlugin.options.baseTag %> has been added in biodata.html
			chunks: ['resume']
		}),
	],
	externals: {
        config: JSON.stringify({
            portfolioJson: 'https://arunthomasalex.github.io/portfolio/portfolio.json',
			messageUrl: 'http://127.0.0.1:8000/message/',
			resumeUrl: '/resume'
        })
    }
};
