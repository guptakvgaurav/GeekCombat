const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require("webpack-hot-middleware")
const webpack = require('webpack')
const webpackConfig = require('../../webpack.config')
const path = require('path')
import morgan from 'morgan'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
var csv = require('csv-parser')
var fs = require('fs')
const Promise = require('bluebird');
mongoose.Promise = Promise;

import History from './history/model'

var cors = require('cors')

// const MONGO_URI = 'mongodb://heroku_fg05wnl1:l131o1po2quvck1qvno8kfedaj@ds113915.mlab.com:13915/heroku_fg05wnl1'
const MONGO_URI = 'mongodb://127.0.0.1:27017'

mongoose.Promise = global.Promise
mongoose.connect(MONGO_URI, { useMongoClient: true })
.then(() => {
	console.log('mongodb connected')
})
.catch(err => console.log('err in mongodb connection'))

import dashboard from './dashboard'
import history from './history'

const app = express()
app.use(cors({credentials: true, origin: true}))
app.use(express.static(path.join(__dirname, '../dist')))
app.use(express.static(path.join(__dirname, '../public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const compiler = webpack(webpackConfig)
if (process.env.NODE_ENV !== 'production') {
		app.use(webpackDevMiddleware(compiler, {
    	noInfo: true, publicPath: webpackConfig.output.publicPath
	}))
	app.use(webpackHotMiddleware(compiler))	
}


app.use(morgan('dev'))
app.use('/v1/api/dashboard',dashboard)
app.use('/v1/api/history', history)

/**
|--------------------------------------------------
| THIS IS ONE TIME API. USED TO POPULATE DATA INTO
| DB. SHOULD NOT BE CALLED VIA APP.
|--------------------------------------------------
*/

app.get('/v1/seed_processed_csv', (req, res, next) => {
  let rawAccountData = [];
  fs.createReadStream(path.join(__dirname, 'processed.csv'))
  .pipe(csv())
  .on('data', function (data) {
    let formattedData = {
      name: '',
      industry: data.Industry,
      size: data.Company_Size,
      isDecisionMaker: data.Decision_Maker == 1? true: false,
      region: data.TTN_GEO,
      addedViaPortal: false,
      actualOutcome: data.Qualified
    }
    const history = new History(formattedData);
    rawAccountData.push(history.save())
  })
  .on('end', () => console.log('Read process completed. Total %d records', rawAccountData.length))
  Promise.all(rawAccountData)
    .then(result=> res.json(result))
    .catch(error => res.json(error));
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../index.html'))
})



app.listen(process.env.PORT || 7777, function () {
  console.log('Server is running on PORT 7777')
})