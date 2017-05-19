const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // devtool: 'cheap-module-eval-source-map',
  entry: {
    use: 'webpack-hot-middleware/client',
    bundle: path.join(__dirname, 'app'),
    vendor: ['react', 'react-dom']
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].[hash].js',
    // filename: 'bundle.js',
    publicPath: '/public/'
  },
  module: {
    rules: [
      {
        use: ['react-hot-loader', 'babel-loader'],
        test: /\.js$/,
        exclude:/node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test:/\.css$/
      },
      {
				use: [
					{
						loader: 'url-loader',
						options: { limit: 40000 }
					},
					{
    				loader: 'image-webpack-loader',
    				options: {}
					}
				],
				test: /\.(jpe?g|png|gif|svg)$/
			}
    ]

  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'app/assets/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.HotModuleReplacementPlugin()
  ]
};
