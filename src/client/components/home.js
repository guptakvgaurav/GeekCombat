import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router';

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
      <h1 className="ui header">
      Splash Screen
      </h1>
      <button className="ui violet button" role="button" onClick={() => this.gotoDashboard()}>Go To Dashboard</button>
      <button className="ui purple button" role="button" onClick={() => this.gotoPredection()}>Go To Predection</button>
      </div>
    )
  }
}



export default Dashboard
