import React, { Component } from 'react'
import { Link } from 'react-router'
import { Button } from 'react-bootstrap';

import Footer from '../components/Footer'
// https://facebook.github.io/react/docs/dom-elements.html#style
const text_content_lead = {minHeight: '250px', color: '#777', backgroundColor: 'white', textAlign: 'center', padding: '25px', textAlign: 'justify'}
const text_content_lead_header = {textAlign: 'center'}

const bgimg_sub_button = { backgroundColor: 'transparent', fontSize: '25px', color: '#f7f7f7' }

const text_content_sub = { minHeight: '500px', color: 'rgb(35, 35, 35)', backgroundColor: 'rgb(243, 243, 243)', textAlign: 'center', padding: '50px 80px', textAlign: 'justify' }
const text_content_sub_pos = { position:'relative' }

const bgimg_first_logo_style = { padding: '15px' }
const bgimg_first_button_style = { padding: '30px' }

class Home extends Component {
  render() {
    return(
      <div>
        <div className="home-bgimg-1">
          <div className="caption">
          	<div><span className="border">WHERE WORKING OUT MEETS WORKING IN</span></div>
          	<div><span className="border"><img style={ bgimg_first_logo_style } src="http://i.imgur.com/1QTfNv5.png" width="330" height="180"/>{/*jacy_white_transparent_cropped*/}</span></div>
          	<div><span className="border">by</span></div>
          	<div><span className="border">JACY CUNNINGHAM</span></div>
          	<div style={ bgimg_first_button_style }><Button target="_blank" href="https://vimeo.com/211186589?autoplay=1" bsSize="large">EXPERIENCE</Button></div>
          </div>
        </div>
          
        <div style={ text_content_lead} className='container'>
            <div className='col-md-12'>
              <div className='col-md-4 home-sub-box-container'>
                <Link to='/portfolio'>
                  <div className='home-sub-box1'>
                    <div className='home-sub-link-banner'>
                      Portfolio
                    </div>
                  </div>
                </Link>
              </div>
              <div className='col-md-4 home-sub-box-container'>
                <Link to='/events'>
                  <div className='home-sub-box2'>
                    <div className='home-sub-link-banner'>
                      Past Events
                    </div>
                  </div>
                </Link>
              </div>
              <div className='col-md-4 home-sub-box-container'>
                <Link to='/about'>
                  <div className='home-sub-box3'>
                    <div className='home-sub-link-banner'>
                      Learn More
                    </div>
                  </div>
                </Link>
              </div>
            </div>
        </div>
        
        <div style={ text_content_sub }>
            <div className='col-md-12'>
              <div className='col-md-12 home-sub-box-container'>
                 <video height="400px" id="jacy-media-player" controls='controls' preload="auto">
                    <source type="video/mp4" src="/assets/jacy_in_action.mp4" />
                </video>
                {/* <div className='home-vid-box1'>
                </div>*/}
              </div>
            </div>
        </div>
          
        {/*<div className="home-bgimg-2">
          	<div>
               <video width="100%" height="auto" id="jacy-media-player" preload="auto" loop="true" autoPlay="true">
                  <source type="video/mp4" src="/assets/jacy_in_action.mp4" />
              </video> 
            </div>
        </div>*/}
          
      </div>
    )
  }
}

export default Home