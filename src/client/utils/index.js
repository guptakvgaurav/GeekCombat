import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router';
import { Button } from 'semantic-ui-react'
class GoToHome extends Component {
  constructor(props) {
    super(props);
  }

  goBackToHome =() => {
    browserHistory.push('/')
  }

  render () {
    console.log("KKKSKSKSK");
    return (
      <div>
      <h1>
      </h1>
      <Button primary onClick={() => this.goBackToHome()}>Go To Home</Button>
      </div>
    )
  }
}



export default GoToHome
