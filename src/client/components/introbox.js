import React, {Component, PropTypes} from 'react'
import GoToHome from './../utils/'
import { browserHistory } from 'react-router';
import {Form} from 'semantic-ui-react'

class Introbox extends Component {    

    render() {
        return (
            <div className="csm-intro-screen">
                <div className="csm-intro-screen-text">
                  <img src="../../img/graph.png"/>						
                  <h1>JungleBook</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in.
                  </p>
                </div>
                <div className="csm-intro-btn btn">
                   <a href="/"> Intro </a> <a href="/"> Skip </a>
                </div>					
            </div>
        )
    }
}


export default Introbox
