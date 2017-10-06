import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Home from './home.js'
import About from './about.js'
import ContactUs from './contact.js'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

import './style.scss'
class App extends Component {
  render () {
    return (
      <div>
        <li>
          <Link to = "/home">Home</Link>
        </li>
        <li>
          <Link to = "/about">About</Link>
        </li>
        <li>
          <Link to = "/contact">Contact</Link>
        </li>

        <h1>
        Hello World
        </h1>
        {this.props.children}
      </div>
    )
  }
}

ReactDOM.render((
  <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <Route path = "home" component = {Home} />
         <Route path = "about" component = {About} />
         <Route path = "contact" component = {ContactUs} />
      </Route>
   </Router>
), document.getElementById("App"))
