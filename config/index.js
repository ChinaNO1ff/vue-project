const path = require('path');

module.exports = {
	dev: {
		hot: true,
		devtool: 'source-map',
		autoOpenBrowser: true,
		host: 'localhost',
		port: 8080,
		publicPath: './'
	},
	build: {
		assetsRoot: path.resolve(__dirname, '../dist'),
	}
}