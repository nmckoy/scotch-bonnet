import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Footer from '../components/Footer'
import { removeActiveHome } from '../Utils'
// https://facebook.github.io/react/docs/dom-elements.html#style
const text_content_lead = {
  minHeight: '550px',
  color: 'rgb(35, 35, 35)',
  backgroundColor: 'white',
  textAlign: 'center',
  padding: '25px',
  textAlign: 'justify'
}
const text_content_lead_header = {
    borderBottom: '1px solid #b5b5b5'
}

const content_sub_style = {
  paddingTop: '10px',
  fontSize: '20px',
  textAlign: 'center'
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

class Contact extends Component {
  componentDidMount() {
    // hack to clean up the active class on home nav link
    // for some reason it is always active when link_to = /
    removeActiveHome()
  }
  
  render() {
    return  <div>
              <div className="contact-bgimg-1">
          			<div className="caption">
          				<span className="border"></span>
          			</div>
          		</div>

          		<div style={ text_content_lead }>
        		    <Grid>
        		        <Row style={ title_row_style }>
        		            <Col xs style={ title_col_style }>
        		                <h3 style= { title_content_style }>Contact Us</h3>
        		            </Col>
        		        </Row>
        		        <Row style={ content_sub_style }>
        		          <Col xs>
        		            <p>Interested in working with Jacy? For all business inquiries, please contact <a href='mailto:management@thejacymethod.com'>management@thejacymethod.com</a> or call (202) 417-8303.</p>
        		          </Col>
        		        </Row>
        		    </Grid>
        		  </div>
          		
          	</div>
    }
}

export default Contact