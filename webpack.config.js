const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    use: 'webpack-hot-middleware/client',
    bundle: path.join(__dirname, 'app'),
    vendor: ['react', 'react-dom']
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].[hash].js',
    publicPath: '/public/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['react-hot-loader', 'babel-loader'],
        exclude:/node_modules/
      },
      {
        test:/\.css$/,
        use: ExtractTextPlugin.extract ({
          fallback: 'style-loader',
          use: 'css-loader'
        })
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
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'app/assets/index.html',
      filename: 'index.html',
      inject: 'body'
    }
  ),
    new ExtractTextPlugin('styles.css'),
  ]
};
