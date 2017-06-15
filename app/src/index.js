import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router'

import App from './App';
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Events from './pages/Events'

// import './index.css';

render(
  <div>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={ browserHistory }>
      <Route path="/" component={ App }>
        <Route path="/about" component={ About }/>
        <Route path="/contact" component={ Contact }/>
        <Route path="/events" component={ Events }/>
        <Route path="/portfolio" component={ Portfolio }/>
      </Route>
    </Router>
  </div>,
  document.getElementById('root')
);
