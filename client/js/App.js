import React from 'react'
import { Link } from 'react-router'

import Nav from './Nav'
import Home from './Home'

export default React.createClass({
  render() {
    return (
      <div>
        {/*<ul role="nav">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>*/}
        <Nav />
        
        {/* children components of App get swapped out here */}
        { this.props.children ?
          (this.props.children)
        :
          (<Home />) // default homepage
        } 

      </div>
    )
  }
})
