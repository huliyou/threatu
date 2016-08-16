const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

var NODE_ENV = process.env.NODE_ENV;

const NODE_MODULES = path.resolve(__dirname, 'node_modules');
const reactPath = path.resolve(NODE_MODULES, 'react/dist/react.min.js');
const reactLibPath = path.resolve(NODE_MODULES, 'react/lib');
const reactRouterPath = path.resolve(NODE_MODULES, 'react-router/umd/ReactRouter.min.js');
const isomorphicPath = path.resolve(__dirname, 'src/common/isomorphic.js');

const config = {
  entry: [
    'babel-polyfill',
    './src/index.js',
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$|\.js?$/,
        exclude: /node_modules/,

        // loader: 'react-hot!babel'
        loader: 'react-hot!babel',
      },
      {
        test: /\.css/,
        // loader: 'style!css',
        // include: /node_modules/,
        loader: ExtractTextPlugin.extract('style', 'css-loader'),
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' +
          '!autoprefixer-loader!sass-loader'
        ),
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=100000000',
      },
      {
        test: /\.svg$/,
        loader: 'babel!react-svg'
      },
    ],
    noParse: [reactPath],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      // 'react/lib': reactLibPath,
      // react: reactPath,
      // 'react-router': reactRouterPath,
      'isomorphic': isomorphicPath,
    },
  },
  output: {
    path: './dist/',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js',
  },
  // output: {
  //   path: './dist/',
  //   filename: 'bundle.js',
  // },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new ExtractTextPlugin('stylesheets/[name].css', {
      allChunks: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.IgnorePlugin(/^(buffertools)$/),
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
      compress: {
        warnings: false,
      },
      sourceMap: false,
    }),
    new HtmlWebpackPlugin({
      title: 'drmondo',
      filename: 'index.html',
      template: 'src/template.html',
      minify: {
        html5: true,
        removeComments: true,
        removeEmptyAttributes: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true
      }
    })
  ],
};

module.exports = config;

