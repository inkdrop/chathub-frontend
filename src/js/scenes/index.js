import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory } from 'react-router'
import Home from './Home'
import Application from './Application'


render((
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path="application" component={Application} />
  </Router>
), document.getElementById('application'))
