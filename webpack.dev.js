const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
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
	plugins: [
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
			messageUrl: 'http://127.0.0.1:8000/message',
			resumeUrl: '/resume',
			rules: 'http://127.0.0.1:8000/rule'
        })
    }
});
