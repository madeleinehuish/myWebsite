const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, 'app');
const BUILD_DIR = path.join(__dirname, 'build');
const VENDOR_LIBS = ['react', 'react-dom'];

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    use: 'webpack-hot-middleware/client',
    bundle: APP_DIR + '/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    rules: [
      {
        use: ['babel-loader', 'react-hot-loader'],
        test: /\.js$/,
        exclude:/node_modules/,
        include: path.join(__dirname, 'app')
      },
      {
        use: ['style-loader', 'css-loader'],
        test:/\.css$/
      }
    ]

  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   names: ['vendor', 'manifest']
    // }),
    // new HtmlWebpackPlugin({
    //   template: 'app/assets/index.html'
    // }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

// const path = require('path');
// const webpack = require('webpack');
// const APP_DIR = path.resolve(__dirname, 'src');
// const BUILD_DIR = path.resolve(__dirname, 'build');
//
// module.exports = {
//   devtool: 'cheap-module-eval-source-map',
//   entry: [
//     'webpack-hot-middleware/client',
//     APP_DIR + '/index.jsx',
//   ],
//   output: {
//     filename: 'bundle.js',
//     path: BUILD_DIR,
//     publicPath: '/build/',
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin()
//   ],
//   module: {
//     rules: [{
//       test: /\.jsx?$/,
//       exclude: /node_modules/,
//       use: ['react-hot-loader', 'babel-loader'],
//       include: path.join(__dirname, 'src'),
//     }],
//   },
//   resolve: {
//     extensions: ['.jsx', '.js']
//   },
// }
