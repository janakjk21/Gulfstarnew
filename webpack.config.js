const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './src/index.js', // Your entry point
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		chunkFilename: '[name].[contenthash].js', // Change this line for code splitting
		publicPath: '/',
	},
	optimization: {
		minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()],
	},
	devServer: {
		hot: false,
		// ... other devServer options
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader', // Use Babel for JavaScript/JSX files
			},

			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'], // Extract and optimize CSS
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 8192, // Convert images < 8kb to base64 strings
						name: 'images/[name].[ext]',
					},
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/', // Output path for font files
						},
					},
				],
			},
			{
				test: /\.webp$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'images/', // Output path for images
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html', // HTML template
		}),
		new MiniCssExtractPlugin({
			filename: 'styles.css', // Extracted CSS file name
		}),
	],
};
