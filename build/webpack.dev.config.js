const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('../config');
const baseWebpackConfig = require('./webpak.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const HOST = process.env.HOST;
const PORT = process.env.PORT;

const devWebpackConfig = merge(baseWebpackConfig, {
	mode: 'development',
	devtool: config.dev.devtool,
	devServer: {
		contentBase: path.join(__dirname, '../dist'),
		stats: 'minimal',
		hot: config.dev.hot,
		host: HOST || config.dev.host,
		port: PORT || config.dev.port,
		open: config.dev.autoOpenBrowser,
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './index.html'
		}),
		new VueLoaderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
})

module.exports = devWebpackConfig;