import React, { Component } from 'react'

import Footer from '../components/Footer'
// https://facebook.github.io/react/docs/dom-elements.html#style
const text_content_lead = {boxShadow: 'inset 0px 1px 20px 6px rgba(0,0,0,.22)', color: 'rgb(58, 58, 58)', background: 'linear-gradient(#e0e0e0, white)', textAlign: 'center', padding: '75px 50px', textAlign: 'justify'}
const text_content_lead_header = {textAlign: 'center'}

const text_content_sub = { color: 'rgb(35, 35, 35)', backgroundColor: 'rgb(202, 228, 255)', textAlign: 'center', padding: '50px 80px', textAlign: 'justify' }
const text_content_sub_pos = { position:'relative' }

const page_paragraph_style = { fontSize: '16px' }

class Contact extends Component {
  
  render() {
    return  <div>
              <div className="contact-bgimg-1">
          			<div className="caption">
          				<span className="border"></span>
          			</div>
          		</div>

          		<div style={ text_content_lead }>
          		  <div className='container'>
            			<h3 style={ text_content_lead_header }>Contact</h3>
            			<p style={ page_paragraph_style }>For all business inquiries, please contact <a href='mailto:management@thejacymethod.com'>management@thejacymethod.com</a></p>
          		  </div>
          		</div>
          		
          	</div>
    }
}

export default Contact