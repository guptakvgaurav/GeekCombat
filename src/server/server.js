const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require("webpack-hot-middleware")
const webpack = require('webpack')
const webpackConfig = require('../../webpack.config')
const path = require('path')

import dashboard from './dashboard'

const router = express.Router()

const app = express()
app.use(express.static(path.join(__dirname, '../dist')))
app.use(express.static(path.join(__dirname, '../public')))

const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../index.html'))
})

router.use('/v1/api/dashboard',dashboard)

app.listen(7777, function () {
  console.log('Server is running on PORT 7777')
})