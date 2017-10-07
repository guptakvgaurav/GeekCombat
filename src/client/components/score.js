import React, { Component, PropTypes } from 'react'
import GoToHome from './../utils/'


class Score extends Component {
  render () {
    console.log("OOOO", this.props);
    return (
      <div>
        <h1>Score Page</h1>
        <GoToHome></GoToHome>

      </div>
    )
  }
}


export default Score
