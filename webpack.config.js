const path = require('path')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: ['@babel/polyfill', path.resolve(__dirname, 'src/js', 'main.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src/js'),
      'Components': path.resolve(__dirname, 'src/js', 'components'),
      'Objects': path.resolve(__dirname, 'src/js', 'objects'),
      'Models': path.resolve(__dirname, 'src/js', 'models'),
      'Shaders$': path.resolve(__dirname, 'src/js', 'shaders', 'main.js'),
      'Functions': path.resolve(__dirname, 'src/js', 'shaders', 'functions')
    }
  },
  node: {
    fs: 'empty'
  },
  devServer: {
    port: process.env.PORT || 8080, // it's possible to specific which port you'd prefer to use
    writeToDisk: true,
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true
  }
}
