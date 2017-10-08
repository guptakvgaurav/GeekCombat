import React, { Component }from 'react'
import { browserHistory } from 'react-router';
import { Navbar, Nav, Grid, Button, Row } from 'react-bootstrap'

import './style.scss'

class Navigation extends Component {
  constructor(props) {
    super(props);

  }
  goToReview = () => {
    browserHistory.push({pathname: '/history' })
  }
  goToPrediction = (data) => {
    browserHistory.push({pathname: '/predict' })
  }
  goToHome = () => {
    browserHistory.push({pathname: '/' })
  }

  render () {
    console.log("UUUUU", this);
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
              <a onClick={() => this.goToHome()}>Oracle.AI</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <div className="navigation-btns">
                {(this.props.show !=='his' || this.props.show=='dash') &&<Button className="review-btn" onClick={() => this.goToReview()}>
                  Review Old Prediction
                </Button>}
                {(this.props.show !=='pred' || this.props.show=='dash') &&<Button className="predict-btn" onClick={() => this.goToPrediction()}>
                  Predict
                </Button>}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Navigation
