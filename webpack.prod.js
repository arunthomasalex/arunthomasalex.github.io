const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	devServer: {
		contentBase: path.join(__dirname, 'src')
	},
	plugins: [
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
			resumeUrl: 'resume.html',
			rules: 'https://portfolio-arunthomasalex.herokuapp.com/rule'
        })
    }
});
