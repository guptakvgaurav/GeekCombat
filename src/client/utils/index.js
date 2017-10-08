import React, { Component, PropTypes } from 'react'
import { Button } from 'react-bootstrap'
import { browserHistory } from 'react-router'
import axios from 'axios'

class GoToHome extends Component {
  constructor(props) {
    super(props);
  }

  goBackToHome = (e) => {
    e.preventDefault();
    browserHistory.push('/')
  }

  render () {
    return (
      <div>
        <a href onClick={(e) => {this.goBackToHome(e)}}>
          Go Back
        </a>
      </div>
    )
  }
}

export default GoToHome

export const getData = (cb) =>{
  axios({
    method: 'get',
    baseURL: `${baseUrl}v1/api/history`,
    headers: {"Access-Control-Allow-Origin": "*",
              'Content-Type':'application/json',
              'Accept': 'application/json'
            }
  })
  .then(function (response) {
    console.log("SUCCESS",response);
    cb(response)
  })
  .catch(function (error) {
    console.log("ERROR", error);
  });
}
