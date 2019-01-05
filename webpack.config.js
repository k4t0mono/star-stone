const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = (env) => {
	const isProd = env === 'prod';
	const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' });

	return {
		entry: './src/app.jsx',
		output: {
			path: path.resolve(__dirname, 'public'),
			filename: 'bundle.js'
		},
		mode: 'development',
		module: {
			rules: [
				{
					loader: 'babel-loader',
					test: /\.jsx?$/,
					exclude: /node_modules/
				},
				{
				 test: /\.s?css$/,
				 use: [
					 {
						loader: 'css-hot-loader',
						options: {
							sourceMap: true
						 }
					 },
					 MiniCssExtractPlugin.loader,
					 {
						loader: 'css-loader',
						options: {
							sourceMap: true
						 }
					 },
					 {
						loader: 'sass-loader',
						options: {
							sourceMap: true
						 }
					 }
				 ]
				}
			]
		},
		plugins: [ CSSExtract ],
		devtool: isProd ? 'source-map1' : 'inline-source-map',
		devServer: {
			contentBase: path.resolve(__dirname, './public/'),
			historyApiFallback: true
		}
	};
};
