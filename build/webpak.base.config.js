const path = require('path');
const config = require('../config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
				loader: 'vue-loader',
				options: {
					loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader'
                        })
                    }
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            }
		]
	},
	plugins: [
        new ExtractTextPlugin({
            filename: '[name]_[hash:8].css',
            allChunks: true
        })
    ]
}