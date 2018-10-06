const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const prodWebpackConfig = merge(baseWebpackConfig, {
	mode: 'production',
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './index.html'
		}),
		new VueLoaderPlugin()
	]
})

module.exports = prodWebpackConfig;
