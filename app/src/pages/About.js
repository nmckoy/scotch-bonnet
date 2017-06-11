import React, { Component } from 'react'

import Footer from '../components/Footer'
// this is how you decalre global elements in React 
// so it doesnt complain about you not importing something
// MediaElement is from some cdn library
/* global MediaElement */

const text_content_lead = {boxShadow: 'inset 0px 1px 20px 6px rgba(0,0,0,.22)', color: 'rgb(58, 58, 58)', background: 'linear-gradient(#e0e0e0, white)', textAlign: 'center', padding: '75px 50px', textAlign: 'justify'}
const text_content_lead_header = { fontWeight: '700'}

const text_content_sub = { color: 'rgb(35, 35, 35)', backgroundColor: 'rgb(202, 228, 255)', textAlign: 'center', padding: '50px 80px', textAlign: 'justify' }
const text_content_sub_pos = { position:'relative' }

const content_container = { padding: '0px 50px 0px 50px' }
const page_paragraph_style = { fontSize: '16px' }
	        
class About extends Component {
  componentDidMount() {
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
          <div className="container">
            <div className="row">
                <div id='play-vid' className="col-md-6 about-content-img1" >
                  <div className="col-md-4">
                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                  </div>
                  <div className="col-md-4">
                  </div>
                  <div className="col-md-4">
                  </div>
                </div>
              <div className="col-md-6" style={ content_container }>
                <div className="row">
                  <h3 style={ text_content_lead_header }>Who is Jacy Cunningham and What is The Jacy Method?</h3>
                </div>
                <div className="row">
                  <h3>About Us</h3>
                  <p style={ page_paragraph_style } >The Jacy Method is a movement based experience designed to facilitate harmonious community. Created by elite trainer and fitness model Jacy Cunningham, he believes he has found a unique mesh point where working out meets working in, where movement meets meditation.</p>
                  <p style={ page_paragraph_style } >Each guided experience is different and when you leave, you will never be the same. Now, the question is; Are you ready to experience what it means to connect to another human being? Are you ready for The Jacy Method? </p>
                </div>
              </div>
            </div>
          </div>
        </div>
          		
      </div>
    )
  }
}

export default About