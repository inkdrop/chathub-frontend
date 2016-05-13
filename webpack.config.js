var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    application: ['webpack-dev-server/client?http://localhost:8080', 'webpack/hot/only-dev-server', './src/js/application'],
    index: ['./src/js/index']
  },

  stats: {
    colors: true,
    reasons: true
  },

  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: 'http://localhost:8080/dist/'
  },

  devtool: 'source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react']
    }]
  }
}
