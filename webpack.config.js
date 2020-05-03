const path = require('path')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    main: ['@babel/polyfill', path.resolve(__dirname, 'src/js', 'main.js')],
    browser: ['@babel/polyfill', path.resolve(__dirname, 'src/js', 'browser.js')],
    style: ['@babel/polyfill', path.resolve(__dirname, 'src', 'js/style.js')]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
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
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
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
