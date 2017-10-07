import React, { Component, PropTypes } from 'react'
import GoToHome from './../utils/'
import {Label} from 'semantic-ui-react'


class Score extends Component {
  render () {
    console.log("OOOO", this.props);
    return (
      <div>
        <h1>Score Page</h1>
        <h2><Label circular color='orange' key='orange'>{this.props.location.query.data}</Label></h2>
        <GoToHome></GoToHome>

      </div>
    )
  }
}


export default Score
