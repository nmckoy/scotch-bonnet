import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Footer from '../components/Footer'
import { removeActiveHome } from '../Utils'
// this is how you decalre global elements in React 
// so it doesnt complain about you not importing something
// MediaElement is from some cdn library
/* global MediaElement */
const text_content_lead = {
  minHeight: '550px',
  color: 'rgb(35, 35, 35)',
  backgroundColor: 'white',
  textAlign: 'left',
  padding: '25px'
}
const text_content_lead_header = {
    borderBottom: '1px solid #b5b5b5'
}

const content_sub_style = {
  paddingTop: '10px',
  fontSize: '16px',
  textAlign: 'left'
}
const about_divider = {
    padding: '9px',
    borderTop: '1px solid #b5b5b5'
}
const about_text_style = {
  fontSize: '14px'
}
const title_row_style = {
    padding: '7px 7px 6px 7px'
}
const title_col_style = {
  background: '#1F1C2C'

}
const title_content_style = {
    paddingBottom: '7px',
    paddingLeft: '7px',

    color: 'white',
    fontWeight: '600'
}
const content_end_header_style = {
  fontSize: '16px'
}
	        
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
  		    <Grid>
  		        <Row style={ title_row_style }>
  		            <Col xs style={ title_col_style }>
  		                <h3 style= { title_content_style }>About</h3>
  		            </Col>
  		        </Row>
  		        <Row style={ Object.assign({}, content_sub_style, title_row_style) }>
  		          <Col xs={12} md={7} className='about-content-img-1'>
  		          </Col>
  		          <Col xs={12} md={5}>
  		            <div>
  		              <h4><strong><em>The Jacy Method: Where working out meets working in and movement meets meditation.</em></strong></h4>
  		            </div>
  		            <div style={ about_divider }>
  		            </div>
  		            <div>
  		            <h4><strong>MEET JACY CUNNINGHAM:</strong></h4>
  		            <div style={ about_text_style }>
                    Jacy Cunningham, born and raised in Washington, DC, is simply put a "Lover of life". Former collegiate
                    football player and pro trainer, Jacy has used his skill set to gain entry points into the depth of the
                    human spirit and help people of all walks of life acknowledge their divine connection thru movement.
                    Jacy served as the in-house Movement Instructor for Summit Powder Mountain, a start-up based at
                    the foot of Powder Mountain in Eden, Utah. Here he was able to teach his version of movement to a
                    community full of incredible entrepreneurs and social savants.
                  </div>
                  <br></br> {/* lol */}
                  <div style={ about_text_style }>
                    In 2015, after a three year stint in Utah teaching for the Summit Series group Jacy decided to create
                    his own method of training called "The Jacy Method". Which simply put, is the mesh point where
                    working out meets working in.
                  </div>
                  </div>
  		          </Col>
  		        </Row>
  		        <Row style={ title_row_style }>
  		          <Col xs >
  		            <div style={ content_end_header_style }>
  		              <h4><strong>The Jacy Method</strong></h4>
  		            </div>
  		            <div>
  		              <em>
  		                Welcome to "The Jacy Method", "Where working out meets working in".
                      In a world fueled by division & duality, we often separate our human experience into various
                      categories.
                      Good vs Evil.
                      Fat vs Skinny.
                      Black vs White.
                      Rich vs Poor.
                      The Jacy Method was designed with harmony in mind. A union of all.
                      What we must realize is that Life is like a giant river and we're all in it, some of us may be clinging to
                      the shore, some may be swimming upstream, some may even be drowning but nonetheless we are all
                      together.
                      The same goes for our individual journey, our thoughts dictate our actions and our interactions with the
                      world.
                      Each negative thought we have produces a negative feeling which produces a negative action.
                      It's all connected. It's all one.
                      Working out is often a response to some internal need. Some internal drive to take control of our body,
                      to shake up our emotional dialogue.
                      We throw our headphones on, and we GO!
                      And before you know it, we're bobbing our head left and right, and sweating our butts off.
                      We feel good.
                      We feel alive.
                      An hour later we're packing our gym bag and heading home.
                      As we enter the house, our significant other starts to nag us about the dirty dishes in the sink and we
                      lose it.
                      We start yelling, grunting, and tensing our body.
                      We're no longer feeling the high from the workout, now we're back in the saddle and trying to
                      maintain.
                      What if I told you that one hour of peace, can last all day, all week.
                      What if I told you that movement can bring you face to face with God and shift you in such a way that
                      your internal dialogue calms and you can actually SEE straight.
                      Would you believe me?
                      Well I believe in you.
                      I believe in all humans.
                      I believe in our ability to heal and be healed.
                      Are you ready to heal?
                      Are you ready to be healed?
                      Are you ready for The Jacy Method?
  		              </em>
  		            </div>
  		          </Col>
  		        </Row>
  		    </Grid>
  		  </div>
          		
      </div>
    )
  }
}

export default About