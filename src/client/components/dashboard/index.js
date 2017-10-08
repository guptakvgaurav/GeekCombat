import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import axios from 'axios'
import GoToHome from '../../utils';
import { browserHistory} from 'react-router';
import Navigation from '../navigation'

// import './dashboard.scss'
import './style.scss'

import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Sector, Cell} from 'recharts'
const baseUrl = 'http://localhost:7777/' || 'https://sales-predictor.herokuapp.com/'

class Dashboard extends Component {
   constructor(props) {
    super(props)
    this.state = {
      data: [],
      pieData: [],
      finalData: []
    }
  }

  createGrapqh = () => {
    const chartData = this.state.data
    const initialData = {}

    chartData.forEach((data,i) => {
      const region = data.TTN_GEO
      const size = data.Company_Size
      initialData[region] = { win: 0, loss: 0}
    })

    const initialPieData = {}

    chartData.forEach((data,i) => {
      const size = data.Company_Size
      initialPieData[size] = { win: 0}
    })


    chartData.forEach((data,i) => {
      const region = data.TTN_GEO
      if (Object.keys(initialData).indexOf(data.TTN_GEO) !== -1) {
        if (data.actualOutcome === '0') {
          initialData[region]['loss']++
        } else {
          initialData[region]['win']++
          // initialData[size]['win']++
        }
      }
    })

    chartData.forEach((data,i) => {
      const size = data.Company_Size
      if (Object.keys(initialPieData).indexOf(data.Company_Size) !== -1) {
        if (data.actualOutcome === '0') {
          initialPieData[size]['loss']++
        } else {
          initialPieData[size]['win']++
        }
      }
    })

    const finalData = []
    const pieData = []

    Object.keys(initialPieData).forEach((key) => {
      pieData.push({
        size: key,
        win: initialPieData[key]['win'],
      })

    })

    Object.keys(initialData).forEach((key) => {
      finalData.push({
        region: key,
        win: initialData[key]['win'],
        loss: initialData[key]['loss']
      })
    })

    console.log('finalData', finalData)
    console.log('pieData', pieData)
    this.setState({
      finalData: finalData,
      pieData: pieData
    })

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;                    
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index,...others}) => {
      
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x  = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy  + radius * Math.sin(-midAngle * RADIAN);
     
      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'}  
        dominantBaseline="central">
          {`${others.payload.size}`}
        </text>
      );
    }
  }

  componentDidMount() {
    const config = {
      method: 'get',
      url: `${baseUrl}v1/api/history?addedViaPortal=false`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type':'application/json',
        'Accept': 'application/json'
      }
    }

    axios(config)
    .then((response) => {
      console.log('response', response)
      this.setState({
        data: response.data
      }, () => this.createGrapqh())
    })
    .catch((err) => {
      console.log('err in axios', err)
    })
  }

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
          <Navigation />
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
        <BarChart width={600} height={300} data={this.state.finalData}
            margin={{top: 20, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="region"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Bar dataKey="win" stackid='a' fill="#8884d8" />
          <Bar dataKey="loss" stackid='a' fill="#82ca9d" />
        </BarChart>
        <PieChart width={800} height={400}>
          <Pie
            data={this.state.pieData} 
            dataKey='win' 
            cx={300} 
            cy={200} 
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={140} 
            fill="#8884d8">
            {pieData.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)}
          </Pie>
        </PieChart>  
      </div>
    )
  }
}
export default Dashboard

/*import React, { Component } from 'react';
import GoToHome from '../../utils/';
import Navigation from '../navigation'
import './style.scss'

class Predict extends Component {
  render () {
    return (
      <div className="dashboard-wrapper">
        <Navigation />
          <GoToHome ></GoToHome>
        <h2>Analytics</h2>
      </div>
    )
  }
}
export default Predict*/