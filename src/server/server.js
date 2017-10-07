const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require("webpack-hot-middleware")
const webpack = require('webpack')
const webpackConfig = require('../../webpack.config')
const path = require('path')
import morgan from 'morgan'
import mongoose from 'mongoose'

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/geekCombat'

mongoose.connect(MONGO_URI, { useMongoClient: true })
.then(() => {
	console.log('mongodb connected')
})
.catch(err => console.log('err in mongodb connection'))

import dashboard from './dashboard'
import history from './history'

const app = express()
app.use(express.static(path.join(__dirname, '../dist')))
app.use(express.static(path.join(__dirname, '../public')))

const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

app.use(morgan('dev'))
app.use('/v1/api/dashboard',dashboard)
app.use('/v1/api/history', history)

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../index.html'))
})

app.listen(7777, function () {
  console.log('Server is running on PORT 7777')
})