const path = require('path');
const rootDir = path.resolve(__dirname, '../')

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css?$/,
        loaders: ['style', 'raw'],
        include: rootDir
      }
    ]
  },

  resolve: {
    root: rootDir,
    alias: {
      components: 'src/js/components',
      constants: 'src/js/constants',
      core: 'src/js/core',
      scenes: 'src/js/scenes',
      images: 'img',
      test: 'test'
    },
    extensions: ['', '.js', '.jsx']
  }
}
