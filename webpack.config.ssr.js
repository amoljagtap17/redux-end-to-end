var path = require('path')
var webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: {
    js: './index.js'
  },
  output: {
    path: __dirname + '/assets', filename: 'bundle.js'
  },
  devtool: '#cheap-module-source-map',
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      use: ['babel-loader'],
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  ]
}