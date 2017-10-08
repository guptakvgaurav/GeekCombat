import React, { Component, PropTypes } from 'react';
import Particles from 'react-particles-js'
import { Modal, Button } from 'react-bootstrap'
import YoutubeEmbedVideo from "youtube-embed-video";

import { browserHistory } from 'react-router';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  openModal = () => {
    this.setState({ showModal: true });
  }

  gotoDashboard =() => {
    browserHistory.push('/dashboard')
  }

  gotoPredection =() => {
    browserHistory.push('/predict')
  }

  gotoHistory = () => {
    browserHistory.push('/history')
  }

  render () {
    const particleConfig = {
      "particles": {
      "number": {
        "value": 200,
          "density": {
          "enable": true,
            "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
          "stroke": {
          "width": 0,
            "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
            "width": 100,
            "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
          "random": false,
          "anim": {
          "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
        }
      },
      "size": {
        "value": 3,
          "random": true,
          "anim": {
          "enable": false,
            "speed": 3,
            "size_min": 0.1,
            "sync": false
        }
      },
      "line_linked": {
        "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
      },
      "move": {
        "enable": true,
          "speed": 3,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
          "enable": false,
            "rotateX": 600,
            "rotateY": 1200
        }
      }
    },
      "interactivity": {
        "detect_on": "canvas",
          "events": {
          "onhover": {
            "enable": true,
              "mode": "grab"
          },
          "onclick": {
            "enable": true,
              "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
              "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
          },
          "repulse": {
            "distance": 200,
              "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }
    return (
      <div className="wrapper">
        <Particles params={particleConfig}/>
        <div className="intro">
          <h1>Oracle.ai</h1>
          <h1>An empirical way to handle sales</h1>
          <div className="intro-button">
            <a href="#" className="intro-btn" onClick={this.openModal}>Intro</a>
            <a onClick={()=>this.gotoDashboard()} className="demo-btn">Demo</a>
          </div>
        </div>

        <Modal className="video-modal" show={this.state.showModal} onHide={this.closeModal} tabindex="-1">
          <Modal.Header closeButton />
          <Modal.Body>

            <YoutubeEmbedVideo width="800" height="450" autoplay={true} videoId="g1OCdFJXtbg" suggestions={false} />
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}



export default Dashboard
