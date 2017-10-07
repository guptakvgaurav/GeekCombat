import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import GoToHome from './../utils/';
import { browserHistory} from 'react-router';
import './dashboard.scss'

import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
var chartData = require('../processed.csv');

const initialData = {}

chartData.forEach((data,i) => {
  const region = data.TTN_GEO
  initialData[region] = { frequency: 0}
})

chartData.forEach((data,i) => {
  const region = data.TTN_GEO
  if (Object.keys(initialData).indexOf(data.TTN_GEO) !== -1) {
    initialData[region]['frequency']++
  }
})

const finalData = []

Object.keys(initialData).forEach((key) => {
  finalData.push({
    region: key,
    frequency: initialData[key]['frequency']
  })
})

console.log('finalData', finalData)

class Dashboard extends Component {
  goToReview = () => {
    browserHistory.push({pathname: '/history', query: {} })
  }
  goToPrediction = (data) => {
    browserHistory.push({pathname: '/predict', query: {} })
  }
  render () {
    return (
      <div className="dashboard-wrapper">
        <div className="navigation-btns">
          <GoToHome ></GoToHome>
          <div>
            <Button className="review-btn" onClick={() => this.goToReview()}>
              Review Old Prediction
            </Button>
            <Button className="predict-btn" onClick={() => this.goToPrediction()}>
              Predict
            </Button>
          </div>
        </div>
        <h2>Analytics</h2>
        <BarChart width={600} height={300} data={finalData}
            margin={{top: 20, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="region"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Bar dataKey="frequency" fill="#8884d8" />
        </BarChart>
      </div>
    )
  }
}
export default Dashboard
