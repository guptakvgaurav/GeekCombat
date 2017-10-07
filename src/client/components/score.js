import React, { Component, PropTypes } from 'react'

class Score extends Component {
  render () {
    console.log("OOOO", this.props);
    return (
      <div>
          <div className="csm-background-graphs">
            <div className="csm-background-graphs-01 csm-background-graphs-img">
              <img src="../../img/01.png"/>
            </div>
            <div className="csm-background-graphs-02 csm-background-graphs-img">
              <img src="../../img/02.gif"/>
            </div>
            <div className="csm-background-graphs-03 csm-background-graphs-img">
              <img src="../../img/03.gif"/>
            </div>
            <div className="csm-background-graphs-04 csm-background-graphs-img">
               <img src="../../img/04.png"/>
            </div>
            <div className="csm-background-graphs-05 csm-background-graphs-img">
              <img src="../../img/05.gif"/>
            </div>
            <div className="csm-background-graphs-06 csm-background-graphs-img">
              <img src="../../img/06.png"/>
            </div>
            <div className="csm-background-graphs-07 csm-background-graphs-img">
              <img src="../../img/07.gif"/>
            </div>
            <div className="csm-background-graphs-08 csm-background-graphs-img">
              <img src="../../img/08.jpg"/>
            </div>
            <div className="csm-background-graphs-09 csm-background-graphs-img">
              <img src="../../img/09.gif"/>
            </div>
          </div>
          <div className="csm-predivtion-results">
            <div className="csm-prediction-left-col">
            </div>
            <div className="csm-prediction-right-col">
              <div className="csm-prediction-right-inner-wrapper">
                 <p>Your Chances to get this client is</p>
                <div className="csm-prediction-right-inner-col">                 
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
