import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router';
import {GoToHome} from './../utils/'

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  gotoDashboard =() => {
    browserHistory.push('/dashboard')
  }

  gotoPredection =() => {
    browserHistory.push('/predict')
  }

  render () {
    return (
      <div>
      <h1>
      Splash Screen
      </h1>
      <h2 onClick={() => this.gotoDashboard()}>Go To Dashboard</h2>
        <h2 onClick={() => this.gotoPredection()}>Go To Predection</h2>

      </div>
    )
  }
}



export default Dashboard
