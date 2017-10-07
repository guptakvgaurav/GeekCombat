import React, { Component, PropTypes } from 'react'
import GoToHome from './../utils/'
import {Label} from 'semantic-ui-react'


class Score extends Component {
  render () {
    console.log("OOOO", this.props);
    return (
      <div>
          <div className="csm-predivtion-results">
            <div className="csm-prediction-left-col">
              <img src="../public/img/ai.png"/>
            </div>
            <div className="csm-prediction-right-col">
              <div className="csm-prediction-right-inner-wrapper">
                <div className="csm-prediction-right-inner-col">
                  <p>Your Chances to get this client is</p>
                  <div className="csm-percentage-result">50{this.props.location.query.data}<span>%</span></div>
                </div>
              </div>
            </div>
			  	</div>
      </div>
    )
  }
}


export default Score
