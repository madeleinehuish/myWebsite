const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const VENDOR_LIBS = ['react', 'react-dom'];

module.exports = {
  entry: {
    bundle: './app/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
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
      template: 'app/assets/index.html'
      // filename: 'index.html',
      // inject: 'body'
    }),
    new ExtractTextPlugin('style.css')
  ]
};
