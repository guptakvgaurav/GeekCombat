const express = require('express')
const path = require('path')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const dashboard = require('./dashboard')
const history = require('./history')

const MONGO_URI = 'mongodb://heroku_fg05wnl1:l131o1po2quvck1qvno8kfedaj@ds113915.mlab.com:13915/heroku_fg05wnl1'

mongoose.Promise = global.Promise
mongoose.connect(MONGO_URI, { useMongoClient: true })
.then(() => {
	console.log('mongodb connected')
})
.catch(err => console.log('err in mongodb connection'))

const app = express()
app.use(express.static(path.join(__dirname, '../dist')))
app.use(express.static(path.join(__dirname, '../public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use('/v1/api/dashboard',dashboard)
app.use('/v1/api/history', history)

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../index.html'))
})

if (process.env.NODE_ENV !== 'production') {
	const webpackDevMiddleware = require('webpack-dev-middleware')
	const webpackHotMiddleware = require("webpack-hot-middleware")
	const webpack = require('webpack')
	const webpackConfig = require('../../webpack.config')
	const compiler = webpack(webpackConfig)
	app.use(webpackDevMiddleware(compiler, {
    	noInfo: true, publicPath: webpackConfig.output.publicPath
	}))
	app.use(webpackHotMiddleware(compiler))
}

app.listen(7777, function () {
  console.log('Server is running on PORT 7777')
})