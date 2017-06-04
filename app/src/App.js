import React, { Component } from 'react'

// import { Link } from 'react-router'

import AppNav from './components/AppNav'
import Home from './pages/Home'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        {/*<ul role="nav">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>*/}
        
        <AppNav />
        
        {/* children components of App get swapped out here */}
        { this.props.children ?
          (this.props.children)
        :
          (<Home />) // default homepage
        } 
        <Footer/>
      </div>
    )
  }
}

export default App