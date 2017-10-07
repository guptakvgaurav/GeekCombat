import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router';
import { Button } from 'semantic-ui-react'
import axios from 'axios'
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
      <Button primary onClick={() => this.goBackToHome()}>Go To Home</Button>
      </div>
    )
  }
}

export default GoToHome

export const getData = (cb) =>{
  axios({
    method: 'get',
    baseURL:'http://jsonplaceholder.typicode.com/posts/1',
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
