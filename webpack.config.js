const path = require('path');

module.exports = {
	entry: {
		app: path.resolve(__dirname, 'src/frontend/index.js'),
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',

				// Skip any files outside of your project's 'src/frontend' directory
				include: [
					path.resolve(__dirname, 'src/frontend'),
				],
				// Only run '.js' files through Babel
				test: /\.js?$/,
			},
		],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
};