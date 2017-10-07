import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import GoToHome from './../utils/';
import { browserHistory} from 'react-router';
import './dashboard.scss'

class Predict extends Component {
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
      </div>
    )
  }
}
export default Predict
