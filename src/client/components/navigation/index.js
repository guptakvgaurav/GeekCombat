import React, { Component }from 'react'
import { browserHistory } from 'react-router';
import { Navbar, Nav, Grid, Button, Row } from 'react-bootstrap'

import './style.scss'

class Navigation extends Component {

  goToReview = () => {
    browserHistory.push({pathname: '/history', query: {} })
  }
  goToPrediction = (data) => {
    browserHistory.push({pathname: '/predict', query: {} })
  }

  render () {
    return (
      <div className="navigation">
        <Grid>
          <h3 className="welcome-message text-right">
            Welcome Guest!
          </h3>
        </Grid>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">The Mechanix</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <div className="navigation-btns">
                <Button className="review-btn" onClick={() => this.goToReview()}>
                  Review Old Prediction
                </Button>
                <Button className="predict-btn" onClick={() => this.goToPrediction()}>
                  Predict
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Navigation