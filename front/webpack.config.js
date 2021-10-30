const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/main.ts',
    polyfills: './src/polyfills.ts',
    // vendor: './src/vendor.ts',
  },
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
      },
      {
        test: /\.ts$/,
        use: ['ts-loader', 'angular2-template-loader'],
        exclude: [/node_modules/],
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  devServer: {
    historyApiFallback: true,
  }
};