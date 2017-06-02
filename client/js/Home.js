import React from 'react'
import { Button } from 'react-bootstrap';

import Footer from './Footer'
// https://facebook.github.io/react/docs/dom-elements.html#style
const text_content_lead = {color: '#777', backgroundColor: 'white', textAlign: 'center', padding: '50px 80px', textAlign: 'justify'}
const text_content_lead_header = {textAlign: 'center'}

const bgimg_sub_button = { backgroundColor: 'transparent', fontSize: '25px', color: '#f7f7f7' }

const text_content_sub = { minHeight: '300px', color: 'rgb(35, 35, 35)', backgroundColor: 'rgb(202, 228, 255)', textAlign: 'center', padding: '50px 80px', textAlign: 'justify' }
const text_content_sub_pos = { position:'relative' }

const bgimg_first_logo_style = { padding: '15px' }
const bgimg_first_button_style = { padding: '30px' }

export default React.createClass({
  
  render() {
    return  <div>
              <div className="home-bgimg-1">
          			<div className="caption">
          				<div><span className="border">WHERE WORKING OUT MEETS WORKING IN</span></div>
          				<div><span className="border"><img style={ bgimg_first_logo_style } src="/assets/imgs/jacy_logo_white_transparent_cropped.png" width="330" height="180"/></span></div>
          				<div><span className="border">by</span></div>
          				<div><span className="border">JACY CUNNINGHAM</span></div>
          				<div style={ bgimg_first_button_style }><Button target="_blank" href="https://vimeo.com/211186589?autoplay=1" bsSize="large">EXPERIENCE</Button></div>
          			</div>
          		</div>
          
          		<div style={ text_content_lead }>
          			<h3 style={ text_content_lead_header }>Stub Content</h3>
          			<p>My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?</p>
          		</div>
          
          		<div className="home-bgimg-2">
          		  <div>
                 {/* <video width="100%" height="auto" id="jacy-media-player" preload="auto" loop="true" autoPlay="true">
                    <source type="video/mp4" src="/assets/imgs/jacy_in_action.mp4" />
                  </video> */}
                </div>
          		</div>
          
              <Footer />
        		</div>
    }
})