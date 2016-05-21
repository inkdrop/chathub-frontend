var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    bundle: ['webpack-dev-server/client?http://localhost:8080', 'webpack/hot/only-dev-server', './src/js/scenes/index']
  },

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    root: path.resolve(__dirname),
    alias: {
      componentsRoot: 'src/js/components',
      constants: 'src/js/constants',
      core: 'src/js/core',
      scenes: 'src/js/scenes',
      images: 'img',
      test: 'test'
    },
    extensions: ['', '.js', '.jsx']
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
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react']
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=8192' // inline base64 URLs for <=8k images, direct URLs for the rest
      }
    ]
  }
}
