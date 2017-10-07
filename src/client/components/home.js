import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router';
import Introbox from './Introbox'
import Footer from './Footer'

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  gotoDashboard =() => {
    browserHistory.push('/dashboard')
  }

  gotoPredection =() => {
    browserHistory.push('/predict')
  }

  render () {
    return (
      <div>
        <div className="csm-full-body-inner-wrapper">
          <div className="csm-header-wrapper">
            <div className="wrapper">
            </div>
          </div>
          <div className="csm-body-content-wrapper">
            <div className="wrapper">
              <div className="csm-home-screen-left-content">
              </div>
              <div className="csm-home-screen-right-content">
                <Introbox/>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    )
  }
}



export default Dashboard
