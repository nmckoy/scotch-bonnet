import React, { Component } from 'react'

import Footer from '../components/Footer'
import { removeActiveHome } from '../Utils'
// this is how you decalre global elements in React 
// so it doesnt complain about you not importing something
// MediaElement is from some cdn library
/* global MediaElement */

const text_content_lead = {color: '#777', backgroundColor: 'white', textAlign: 'center', padding: '150px 80px', textAlign: 'justify'}
const text_content_lead_header = {textAlign: 'center'}

const text_content_sub = { color: 'rgb(35, 35, 35)', backgroundColor: 'rgb(202, 228, 255)', textAlign: 'center', padding: '50px 80px', textAlign: 'justify' }
const text_content_sub_pos = { position:'relative' }

const content_container = { padding: '0px 50px 0px 50px' }
const page_paragraph_style = { fontSize: '16px' }
	        
class About extends Component {
  componentDidMount() {
    // hack to clean up the active class on home nav link
    // for some reason it is always active when link_to = /
    removeActiveHome()
    
    const script = document.createElement("script");

    const magnific_code = `
      $('#play-vid')
        .magnificPopup({
            items: [{
              src: 'vimeo.com/211186589'
            }],
            type:'iframe'
          });`;
        
    script.type = 'text/javascript';
    script.text = magnific_code;

    document.body.appendChild(script);
  }
  
  render() {
    return(
      <div>
        
        <div className="about-bgimg-1">
          <div className="caption">
            <span className="border"></span>
          </div>
        </div>
          
        <div style={ text_content_lead }>
    			<h3 style={ text_content_lead_header }>Coming Soon.</h3>
    		</div>
          		
      </div>
    )
  }
}

export default About