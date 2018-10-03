const path = require('path');

module.exports = {
	dev: {
		hot: true,
		devtool: 'source-map',
		autoOpenBrowser: true,
		host: 'localhost',
		port: 8080,
		outputPath: path.join(__dirname, '../dist')
	},
	build: {

	}
}