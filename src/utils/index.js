import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router';

class GoToHome extends Component {
  constructor(props) {
    super(props);
  }

  goBackToHome =() => {
    browserHistory.push('/')
  }



  render () {
    return (
      <div>
      <h1>
      </h1>
      <h2 onClick={() => this.goBackToHome()}>Go To Home</h2>
      </div>
    )
  }
}



export default GoToHome
