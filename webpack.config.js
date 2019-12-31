const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },
  devServer: {
    port: 5000,
    contentBase: './dist',
    progress: true,
    compress: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                '@babel/plugin-transform-runtime',
                '@babel/plugin-transform-modules-commonjs'
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html')
    }),
    new HtmlWebpackTagsPlugin({
      append: false,
      usePublicPath: false,
      scripts: [
        'https://cdn.bootcss.com/systemjs/6.1.2/system.min.js',
        'https://cdn.bootcss.com/systemjs/6.1.2/extras/amd.min.js',
        'https://cdn.bootcss.com/systemjs/6.1.2/extras/named-exports.min.js',
        'https://cdn.bootcss.com/systemjs/6.1.2/extras/named-register.min.js',
        'https://cdn.bootcss.com/systemjs/6.1.2/extras/use-default.min.js'
      ]
    })
  ]
};
