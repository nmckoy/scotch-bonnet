import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Footer from '../components/Footer'
import { removeActiveHome } from '../Utils'

const text_content_lead = {
  minHeight: '500px',
  color: 'rgb(35, 35, 35)',
  backgroundColor: 'white',
  textAlign: 'center',
  padding: '25px',
  textAlign: 'justify'
}
const text_content_lead_header = {
    borderBottom: '1px solid #b5b5b5'
}

const content_start_style = {
  fontWeight: '600'
}
const content_sub_style = {
  paddingTop: '10px',
  fontSize: '20px',
  textAlign: 'center'
}

class Events extends Component {
  componentDidMount() {
    // hack to clean up the active class on home nav link
    // for some reason it is always active when link_to = /
    removeActiveHome()
    
    const script = document.createElement("script");
    const magnific_code = `
      $('#play-vid')
        .magnificPopup({
            items: [{
              src: 'https://vimeo.com/220839749'
            }],
            type:'iframe'
          });`;
        
    script.type = 'text/javascript';
    script.text = magnific_code;

    document.body.appendChild(script);
  }

  render() {
    return  <div>
              <div className="events-bgimg-1">
          			<div className="caption">
          				<span className="border"></span>
          			</div>
          		</div>
          
          		<div style={ text_content_lead }>
        		    <Grid>
        		        <Row >
        		            <Col xs>
        		                <h3 style= { text_content_lead_header }>Events</h3>
        		            </Col>
        		        </Row>
        		        <Row>
        		          <Col xs>
        		            <h2 style={ content_start_style }>Coming Summer 2017...</h2>
        		          </Col>
        		        </Row>
        		        <Row>
        		          <Col id='play-vid' className='events-vid-1'>
        		            <div className="col-md-4">
                            <i className="fa fa-play-circle" aria-hidden="true"></i>
                        </div>
                        <div className="col-md-4">
                        </div>
                        <div className="col-md-4">
                        </div>
        		          </Col>
        		        </Row>
        		        <Row style={ content_sub_style }>
        		          <Col xsOffset={3} xs={6}>
        		            Click <a id="iframe-popup" href="https://www.dropbox.com/s/xh988g51ux837b4/TrapJumpin%20Summer%202017%20Info%20Deck.pdf?raw=1" target="_blank">here</a> to learn more about participating.
        		          </Col>
        		        </Row>
        		    </Grid>
              </div>
          		
          	</div>
    }
}

export default Events