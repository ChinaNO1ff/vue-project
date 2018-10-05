const path = require('path');
const config = require('../config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	context: path.resolve(__dirname, '../'),
	entry: {
		main: './src/main.js'
	},
	output: {
		filename: '[name]_[hash:8].js',
		path: config.dev.outputPath,
	},
	resolve: {
		extensions: ['.js', '.vue', 'json'],
		alias: {
			'@': path.resolve(__dirname, '../src/components/')
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: [ 
					'vue-loader',
					{
						loader: 'iview-loader',
						options: {
							prefix: false
						}
					}
				]
			},
			{
				test: /\.js$/,
				use: [ 'babel-loader' ],
				exclude: /node_modules/
			},
			{
                test: /\.(woff?|eot|ttf|otf|svg|woff2)(\?.*)?$/,
                use: [ 'url-loader' ]
            },
			{
                test: /\.css$/,
                use: [
                	MiniCssExtractPlugin.loader,
                	'css-loader'
                ]
            }
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name]_[hash].css',
			chunkFilename: '[id].css'
		}),
    ]
}