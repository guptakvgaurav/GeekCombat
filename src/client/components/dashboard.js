import React, { Component } from 'react';
import GoToHome from './../utils/';
import { browserHistory} from 'react-router';
import { Header, Icon, Image } from 'semantic-ui-react'


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
        <div>
      <Header as='h2' icon textAlign='center'>
        <Icon name='pie graph' circular />
        <Header.Content>
          Dashboard
        </Header.Content>
      </Header>
      <Image centered size='tiny' className="dashboard-header-image" src='/img/centered-paragraph.png' />
    </div>

      <div className="center padding-goto">
        <button className="ui ui_header violet button" role="button" onClick={() => this.goToReview()}>Review Old Prediction</button>
        <button className="ui ui_header violet button" role="button" onClick={() => this.goToPrediction()}>Predict</button>
      </div>
      <div className="center">
        <GoToHome ></GoToHome>
      </div>
      </div>
    )
  }
}
export default Predict
