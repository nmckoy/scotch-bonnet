import React, { Component } from 'react'
import { Link } from 'react-router'
import { Button } from 'react-bootstrap'
import { Grid, Row, Col } from 'react-flexbox-grid'
import EventListener, { withOptions } from 'react-event-listener'
import Scroll from 'react-scroll'
const scroll = Scroll.animateScroll

import Footer from '../components/Footer'
import { removeActiveHome } from '../Utils'

// https://facebook.github.io/react/docs/dom-elements.html#style
const text_content_lead = {
  minHeight: '1025px',
  color: 'rgb(35, 35, 35)',
  backgroundColor: 'rgb(243, 243, 243)',
  textAlign: 'center',
  padding: '25px',
  textAlign: 'justify'
}
const text_content_lead_header = {textAlign: 'center'}
const video_overlay_style = {
  width: '100%',
  paddingBottom: '56.25%',
  background: 'rgba(0, 0, 0, 0.29)',
  position: 'relative'
}
const background_video_style = {
  width: '100%',
  zIndex: '-1'
}
const arrow_down_grid_style = {
  zIndex: '2',
  position: 'absolute',
  width: '100%'
}

const bgimg_sub_button = { backgroundColor: 'transparent', fontSize: '25px', color: '#f7f7f7' }

const text_content_sub = {
  minHeight: '400px',
  color: 'rgb(35, 35, 35)',
  backgroundColor: 'white',
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
    // console.log(scrollTop)
    if (scrollTop > 400) {
      document.getElementById('home-row1-box1').setAttribute('style', 'right: 0px; position: relative;')
    }
    if (scrollTop > 450) {
      document.getElementById('home-row1-box2').setAttribute('style', 'left: 0px; position: relative;')
    }
    
    if (scrollTop > 600) {
      document.getElementById('home-row2-box1').setAttribute('style', 'right: 0px; position: relative;')
    }
    if (scrollTop > 670) {
      document.getElementById('home-row2-box2').setAttribute('style', 'left: 0px; position: relative;')
    }
    
    if (scrollTop > 920) {
      document.getElementById('home-row3-box1').setAttribute('style', 'right: 0px; position: relative;')
    }
    if (scrollTop > 970) {
      document.getElementById('home-row3-box2').setAttribute('style', 'left: 0px; position: relative;')
    }
  }
  
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
        <EventListener target="window" onScroll={ this.showBoxes }/>
        <div>
          <Grid style={arrow_down_grid_style}>
            <Row className='arrow_down_row'>
              <Col xs><i onClick={ () => {scroll.scrollTo(720)} } className="fa fa-angle-down home-move-down-arrow" aria-hidden="true"></i></Col>
            </Row>
          </Grid>
          <div className="home-bgimg-1">
          </div>
          <video style={ background_video_style } id="jacy-media-player" preload="auto" loop="true" autoPlay="true">
            <source type="video/mp4" src="/assets/jacy_in_action5.mp4" ></source>
          </video>
        </div>
          
        <div style={ text_content_lead}>
            <div className='col-md-12'>
              <Grid >
                <Row className='home-rows'> {/* Row 1 */}
                  <Col xs={12} md={6} className='home-row-box-wrapper'>
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
        
        <div style={ text_content_sub }>
          <Grid>
            <Row className=''> {/* Row 4 */}
              <Col xs={12} md={6} className='home-row-box-wrapper'>
                <div id='play-vid' className="about-content-img1" >
                  <div className="col-md-4">
                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                  </div>
                  <div className="col-md-4">
                  </div>
                  <div className="col-md-4">
                  </div>
                </div>
              </Col>
              <Col xs={12} md={5} className='home-row-box-wrapper'>
                <div id='home-row4-box2' className='home-box'>
                  <h2>header3</h2>
                  <p>The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children.</p>
                </div>
              </Col>
              <Col md={2}></Col>
            </Row>
          </Grid>
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