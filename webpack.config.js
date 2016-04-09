var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/js/application.jsx'
    ],

    stats: {
        colors: true,
        reasons: true
    },

    output: {
        path: path.join(__dirname, '/dist/'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/dist/'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react']
            }
        ]
    }
}
