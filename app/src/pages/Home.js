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
  minHeight: '850px',
  color: 'rgb(35, 35, 35)',
  background: '#ECE9E6',  /* fallback for old browsers */
  background: '-webkit-linear-gradient(to right, #FFFFFF, #ECE9E6)',  /* Chrome 10-25, Safari 5.1-6 */
  background: 'linear-gradient(to right, #FFFFFF, #ECE9E6)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  textAlign: 'center',
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
  background: '#2193b0',
  background: '-webkit-linear-gradient(to right, #6dd5ed, #2193b0)',
  background: 'linear-gradient(to right, #6dd5ed, #2193b0)',

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
    if (scrollTop > 200) {
      document.getElementById('home-move-down-arrow').setAttribute('style', 'color: transparent; cursor: default;')
    }
    if (scrollTop < 200) {
      document.getElementById('home-move-down-arrow').setAttribute('style', 'color: white; cursor: pointer;')
    }
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
          });`;7
        
    script.type = 'text/javascript';
    script.text = magnific_code;

    document.body.appendChild(script);
  }
  
  scrolDown() {
    let elem_top = document.getElementById('home-rows').scrollHeight
    console.log(elem_top)
    scroll.scrollTo(680)
  }
  
  render() {
    return(
      <div>
        <EventListener target="window" onScroll={ this.showBoxes }/>
        <div>
          <Grid style={arrow_down_grid_style}>
            <Row className='arrow-down-row'>
              <Col xs><i onClick={ this.scrolDown } id='home-move-down-arrow' className="fa fa-angle-down home-move-down-arrow" aria-hidden="true"></i></Col>
            </Row>
          </Grid>
          <div className="home-bgimg-1">
          </div>
          <video style={ background_video_style } id="jacy-media-player" preload="auto" loop="true" autoPlay="true">
            <source type="video/mp4" src="/assets/jacy_in_action5.mp4" ></source>
          </video>
        </div>
          
        <div style={ text_content_lead}>
              <Grid >
                <Row id='home-rows' className='home-rows'> {/* Row 1 */}
                  <Col xs={12} md={6} className='home-row-box-wrapper'>
                    <Link to='/about'>
                      <div id='home-row1-box1' className='home-box'>
                          <Row>
                            <Col xs={6} className='inner-text'>
                              Learn More
                            </Col>
                          </Row>
                      </div>
                    </Link>
                  </Col>
                  <Col xs={12} md={5} className='home-row-box-wrapper'>
                    <div id='home-row1-box2' className='home-box'>
                      <h2>About</h2>
                      <p>Jacy Cunningham, born and raised in Washington, DC, is simply put a "Lover of life". Former collegiate
                        football player and Pro trainer, Jacy has used his skill set to gain entry points into the depth of the
                        human spirit and help people of all walks of life acknowledge their divine connection thru movement.
                        For the past 3 years Jacy has served as the in-house Movement Instructor for Summit Powder
                        Mountain, a start-up based at the foot of Powder Mountain in Eden, Utah. Here he was able to teach
                        his version of movement to a community full of incredible entrepreneurs and social savants.
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row className='home-rows'> {/* Row 2 */}
                  <Col xs={12} mdOffset={2} md={5} className='home-row-box-wrapper'>
                    <Link to='/portfolio'>
                      <div id='home-row2-box1' className='home-box'>
                          <Row>
                            <Col xs={6} className='inner-text'>
                              Explore
                            </Col>
                          </Row>
                      </div>
                    </Link>
                  </Col>
                  <Col xs={12} md={5} className='home-row-box-wrapper'>
                    <div id='home-row2-box2' className='home-box'>
                      <h2>Portfolio</h2>
                      <p>Check out pictures and videos of the man behind the method, Jacy Cunningham.</p>
                    </div>
                  </Col>
                </Row>
                <Row className='home-rows'> {/* Row 3 */}
                  <Col xs={12} md={5} className='home-row-box-wrapper'>
                    <Link to='/events'>
                      <div id='home-row3-box1' className='home-box'>
                          <Row>
                            <Col xs={8} className='inner-text'>
                              Stay Connected
                            </Col>
                          </Row>
                      </div>
                    </Link>
                  </Col>
                  <Col xs={12} md={5} className='home-row-box-wrapper'>
                    <div id='home-row3-box2' className='home-box'>
                      <h2>Events</h2>
                      <p>Jacy Cunningham may be heading to a city near you to teach The Jacy Method. Stay connected to learn more about upcoming events for your chance to experience The Jacy Method.</p>
                    </div>
                  </Col>
                  <Col md={2}></Col>
                </Row>
              </Grid>
        </div>
        
        <div style={ text_content_sub }>
          <Grid>
            <Row className=''> {/* Row 4 */}
              <Col xs={12} md={8} className='home-row-box-wrapper'>
                <div id='play-vid' className="home-vid-1" >
                  <div className="col-md-4">
                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                  </div>
                  <div className="col-md-4">
                  </div>
                  <div className="col-md-4">
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4} className='home-row-box-wrapper home-row-box-wrapper-content'>
                <div id='home-row4-box2' className='home-box'>
                  <h2>Watch</h2>
                  <p>The Jacy Method is a movement-based experience designed to facilitate harmonious community.
                      Created by elite trainer and fitness model Jacy Cunningham, he believes he has found a unique
                      mesh point where working out meets working in, where movement meets meditation.</p>
                  <p>Each guided experience is different and when you leave, you will never be the same. Now, the
                      question is; Are you ready to experience what it means to connect to another human being? Are
                      you ready for The Jacy Method?</p>
                  <p>Press play to learn more about The Jacy Method from founder and creator Jacy Cunningham.</p>
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