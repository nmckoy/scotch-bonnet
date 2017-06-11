import React, { Component } from 'react'
import { Link } from 'react-router'
import { Button } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-flexbox-grid';
import EventListener, { withOptions } from 'react-event-listener'

import Footer from '../components/Footer'

// https://facebook.github.io/react/docs/dom-elements.html#style
const text_content_lead = {
  minHeight: '1000px',
  color: '#777',
  backgroundColor: 'white',
  textAlign: 'center',
  padding: '25px',
  textAlign: 'justify'
}
const text_content_lead_header = {textAlign: 'center'}

const bgimg_sub_button = { backgroundColor: 'transparent', fontSize: '25px', color: '#f7f7f7' }

const text_content_sub = {
  minHeight: '500px',
  color: 'rgb(35, 35, 35)',
  backgroundColor: 'rgb(243, 243, 243)',
  textAlign: 'center',
  padding: '50px 80px',
  textAlign: 'justify'
}

const bgimg_first_logo_style = { padding: '15px' }
const bgimg_first_button_style = { padding: '30px' }
const text_content_sub_pos = { position:'relative' }

class Home extends Component {
  showBoxes() {
    let scrollTop = event.srcElement.body.scrollTop // so i guess .srcElement == target
    console.log(scrollTop)
    if (scrollTop > 420) {
      document.getElementById('home-row1-box1').setAttribute('style', 'right: 0px; position: relative;')
    }
    if (scrollTop > 450) {
      document.getElementById('home-row1-box2').setAttribute('style', 'left: 0px; position: relative;')
    }
    
    if (scrollTop > 620) {
      document.getElementById('home-row2-box1').setAttribute('style', 'right: 0px; position: relative;')
    }
    if (scrollTop > 650) {
      document.getElementById('home-row2-box2').setAttribute('style', 'left: 0px; position: relative;')
    }
    
    if (scrollTop > 820) {
      document.getElementById('home-row3-box1').setAttribute('style', 'right: 0px; position: relative;')
    }
    if (scrollTop > 850) {
      document.getElementById('home-row3-box2').setAttribute('style', 'left: 0px; position: relative;')
    }
  }
  
  render() {
    return(
      <div>
        <EventListener target="window" onScroll={ this.showBoxes }/>
        
        <div className="home-bgimg-1">
          {/*jacy_white_transparent_cropped*/}
          {/* <div className="caption">
          	<div><span className="border">WHERE WORKING OUT MEETS WORKING IN</span></div>
          	<div><span className="border"><img style={ bgimg_first_logo_style } src="http://i.imgur.com/1QTfNv5.png" width="330" height="180"/></span></div>
          	<div><span className="border">by</span></div>
          	<div><span className="border">JACY CUNNINGHAM</span></div>
          	<div style={ bgimg_first_button_style }><Button target="_blank" href="https://vimeo.com/211186589?autoplay=1" bsSize="large">EXPERIENCE</Button></div>
          </div>*/}
        </div>
          
        <div style={ text_content_lead} className='container'>
            <div className='col-md-12'>
              <Grid >
                <Row className='home-rows'> {/* Row 1 */}
                  <Col xs={12} mdOffset={1} md={5} className='home-row-box-wrapper'>
                    <div id='home-row1-box1' className='home-box'>
                    </div>
                  </Col>
                  <Col xs={12} md={5} className='home-row-box-wrapper'>
                    <div id='home-row1-box2' className='home-box'>
                      <h2>header1</h2>
                      <p>The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.</p>
                    </div>
                  </Col>
                </Row>
                <Row className='home-rows'> {/* Row 2 */}
                  <Col xs={12} mdOffset={2} md={5} className='home-row-box-wrapper'>
                    <div id='home-row2-box1' className='home-box'>
                    </div>
                  </Col>
                  <Col xs={12} md={5} className='home-row-box-wrapper'>
                    <div id='home-row2-box2' className='home-box'>
                      <h2>header2</h2>
                      <p>The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. </p>
                    </div>
                  </Col>
                </Row>
                <Row className='home-rows'> {/* Row 3 */}
                  <Col xs={12} md={5} className='home-row-box-wrapper'>
                    <div id='home-row3-box1' className='home-box'>
                    </div>
                  </Col>
                  <Col xs={12} md={5} className='home-row-box-wrapper'>
                    <div id='home-row3-box2' className='home-box'>
                      <h2>header3</h2>
                      <p>The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children.</p>
                    </div>
                  </Col>
                  <Col md={2}></Col>
                </Row>
              </Grid>
            </div>
        </div>
        
        {/* <div style={ text_content_sub }>
            <div className='col-md-12'>
            </div>
        </div> */}
          
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