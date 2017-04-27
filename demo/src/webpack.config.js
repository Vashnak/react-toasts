let path = require('path');
let webpack = require('webpack');
module.exports = {
  entry: ['babel-polyfill', path.join(__dirname, '.')],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],

  module: {
    loaders: [
      {
        test: /\.js?|\.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.scss|\.css$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devtool: 'source-map',
  node: {
    fs: 'empty'
  }
};
