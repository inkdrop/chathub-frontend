module.exports = {
    context: __dirname + '/src',
    entry: {
        bundle: './js/application.jsx'
    },

    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },

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
