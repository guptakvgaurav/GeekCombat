import React, { Component } from 'react';
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
export default Predict
