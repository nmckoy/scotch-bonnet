import React, { Component } from 'react'

import Footer from '../components/Footer'

const text_content_lead = {color: '#777', backgroundColor: 'white', textAlign: 'center', padding: '150px 80px', textAlign: 'justify'}
const text_content_lead_header = {textAlign: 'center'}

const text_content_sub = { color: 'rgb(35, 35, 35)', backgroundColor: 'rgb(202, 228, 255)', textAlign: 'center', padding: '50px 80px', textAlign: 'justify' }
const text_content_sub_pos = { position:'relative' }

class Events extends Component {

  render() {
    return  <div>
              <div className="events-bgimg-1">
          			<div className="caption">
          				<span className="border"></span>
          			</div>
          		</div>
          
          		<div style={ text_content_lead }>
          			<h3 style={ text_content_lead_header }>Coming Soon.</h3>
          		</div>
          		
          	</div>
    }
}

export default Events