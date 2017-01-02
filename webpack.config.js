const path = require( 'path' );
const webpack = require( 'webpack' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const FriendlyErrorsWebpackPlugin = require( 'friendly-errors-webpack-plugin' );
const autoprefixer = require( 'autoprefixer' );
const cwd = process.cwd();

const _ = {
	cwd( filepath ) {
		return path.resolve( cwd, filepath );
	},
};

module.exports = Object.assign( {}, {
	output: {
		path: _.cwd( 'dist' ),
		filename: '[name]-[chunkhash:8].js',
		publicPath: './'
	},
	module: {
		loaders: [
			{
				test: /\.(css|less)$/,
				loader: ExtractTextPlugin.extract( 'style-loader', 'css-loader?localIdentName=[name]_[local]--[hash:base64:5]!less-loader!postcss-loader' ),
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: [ 'es2015' ],
					plugins: [ 'transform-object-rest-spread' ],
				}
			},
			{
				test: /\.(ttf|woff|eot|svg)$/,
				exclude: /node_modules/,
				loader: 'url-loader?limit=10240&name=[name].[ext]?[hash:8]'
			},
			{
				test: /\.(jpg|jpeg|png|gif)$/,
				exclude: /node_modules/,
				loader: 'url-loader?limit=10240&name=[name].[ext]?[hash:8]'
			},
		]
	},
	postcss: [ autoprefixer ],
	resolve: {
		extensions: [ '', '.js' ],
	},
	externals: {},
}, {
	quiet: true,
	devtool: 'cheap-source-map',
	entry: {
		app: _.cwd( 'client/index.js' ),
	},
	target: 'electron',
	plugins: [
		new webpack.ProvidePlugin( {
			Regular: 'regularjs',
		} ),
		new HtmlWebpackPlugin( {
			filename: 'index.html',
			chunks: [ 'app' ],
			template: 'client/index.html',
		} ),
		new ExtractTextPlugin( '[name]-[contenthash:8].css' ),
		new FriendlyErrorsWebpackPlugin(),
	],
} );
