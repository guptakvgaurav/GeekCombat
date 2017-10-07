import React, { Component, PropTypes } from 'react'
import {browserHistory} from 'react-router'
import GoToHome, {getData} from './../utils/'

class Predict extends Component {
  gotoScore =() => {
    browserHistory.push('/score')
  }
  getAPIData =() => {
    getData((ggg) =>{
      console.log("API response", ggg);
    })
  }
  render () {
    return (
      <div>
        <h1 className="ui header">Predict Screen</h1>
        <button className="ui teal button" role="button" onClick={() => this.gotoScore()}>Go To Score</button>
          <button className="ui teal button" role="button" onClick={() => this.getAPIData()}>GetAPI DATA</button>

        <GoToHome></GoToHome>
      </div>
    )
  }
}


export default Predict
