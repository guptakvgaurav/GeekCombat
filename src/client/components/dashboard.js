import React, { Component } from 'react';
import GoToHome from './../utils/';
import { browserHistory} from 'react-router';


class Predict extends Component {
  goToReview =() => {
    browserHistory.push({pathname: '/history', query: {} })
  }
  goToPrediction =(data) => {
    browserHistory.push({pathname: '/predict', query: {} })
  }
  render () {
    return (
      <div>
      <h1 className="ui header">
      This is Dashboard
      </h1>
      <GoToHome className="ui_header"></GoToHome>
        <button className="ui ui_header violet button" role="button" onClick={() => this.goToReview()}>Review Old Prediction</button>
        <button className="ui ui_header violet button" role="button" onClick={() => this.goToPrediction()}>Predict</button>

      </div>
    )
  }
}
export default Predict
