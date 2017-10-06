const path = require('path')
const extractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {bundle: ['./src/components/app.js', 'webpack-hot-middleware/client']},
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
        test: /\.scss$/,
        use: extractTextPlugin.extract({
        use: [
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
        fallback: "style-loader",
      })},
    ]
  },
  plugins: [
    new extractTextPlugin("style.css"),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
