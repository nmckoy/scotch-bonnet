import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import App from './js/App'
import Contact from './js/Contact'
import About from './js/About'

render((
  <Router onUpdate={() => window.scrollTo(0, 0)} history={ hashHistory }>
    <Route path="/" component={ App }>
      <Route path="/about" component={ About }/>
      <Route path="/contact" component={ Contact }/>
    </Route>
  </Router>
), document.getElementById('App'))