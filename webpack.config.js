const path = require('path')
const extractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {bundle: ['./src/client/components/app.js', 'webpack-hot-middleware/client']},
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: extractTextPlugin.extract({
        use: [
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
        fallback: "style-loader",
      })},
      {
        test: /\.csv$/,
        use: [
          {
            loader: 'dsv-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new extractTextPlugin("style.css"),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
