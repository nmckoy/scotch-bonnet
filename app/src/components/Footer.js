import React, { Component } from 'react'
import { Link } from 'react-router'
import { ListGroup, ListGroupItem, ButtonGroup, Button } from 'react-bootstrap'
import { Grid, Row, Col } from 'react-flexbox-grid';

const text_content_sub = { 
  minHeight: '100px',
  color: 'rgb(35, 35, 35)',
  textAlign: 'center',
  padding: '30px 80px',
  // https://uigradients.com/#Passion
  textAlign: 'justify',
  background: '#ECE9E6',  /* fallback for old browsers */
  background: '-webkit-linear-gradient(to right, #FFFFFF, #ECE9E6)',  /* Chrome 10-25, Safari 5.1-6 */
  background: 'linear-gradient(to right, #FFFFFF, #ECE9E6)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
const text_content_sub_pos = {
  position:'relative',
  color: 'black',
  fontSize: '12px'
}

class Footer extends Component {
   
  render() {
    return (
        <div style={ text_content_sub_pos }>
          	<div style={ text_content_sub }>
              <Grid>
                <Row>
                  <Col xs>
                    <div className='col-md-12 footer-logo'>
                      {/* <img src='/assets/jacy_black_transparent_trimmed.png' width='300' height='150'/> */}
                    </div>
                  </Col>
                </Row>
                  <Col xsOffset={6} xs className='footer-social-buttons'>
                    <Row>
                      <Col xsOffset={4} xs>
                        <Button ><a href="https://www.facebook.com/jrhamz"><i className="fa fa-facebook" aria-hidden="true"></i></a></Button>
                        <Button ><a href="mailto:j@thejacymethod.com"><i className="fa fa-envelope" aria-hidden="true"></i></a></Button>
                        <Button ><a href="https://www.instagram.com/jacycunningham/"><i className="fa fa-instagram" aria-hidden="true"></i></a></Button>
                      </Col>
                    </Row>
                  </Col>
                <Row>
                </Row>
              </Grid>
          	</div>
        </div>
    )}
}

export default Footer