import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import App from './js/App'
import Contact from './js/Contact'
import About from './js/About'
import Portfolio from './js/Portfolio'
import Events from './js/Events'

render((
  <Router onUpdate={() => window.scrollTo(0, 0)} history={ hashHistory }>
    <Route path="/" component={ App }>
      <Route path="/about" component={ About }/>
      <Route path="/contact" component={ Contact }/>
      <Route path="/events" component={ Events }/>
      <Route path="/portfolio" component={ Portfolio }/>
    </Route>
  </Router>
), document.getElementById('App'))