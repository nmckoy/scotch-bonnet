import React, { Component } from 'react'
import { Link } from 'react-router'
import { ListGroup, ListGroupItem, ButtonGroup, Button } from 'react-bootstrap'

const text_content_sub = { 
  minHeight: '100px',
  color: 'rgb(35, 35, 35)',
  textAlign: 'center',
  padding: '30px 80px',
  // https://uigradients.com/#Passion
  textAlign: 'justify',
  background: '#e53935',  /* fallback for old browsers */
  background: '-webkit-linear-gradient(to right, #e35d5b, #e53935)',  /* Chrome 10-25, Safari 5.1-6 */
  background: 'linear-gradient(to right, #e35d5b, #e53935)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

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
            	  <div className='container'>
                  {/*<div className='col-md-4'>
                    <ListGroup className="footer-group-item-style">
                    ` <ListGroupItem ><a id="footer-links-title" href='#'>Links</a></ListGroupItem>
                      <ListGroupItem ><Link to='/'>Home</Link></ListGroupItem>
                      <ListGroupItem ><Link to='/about'>About Us</Link></ListGroupItem>
                      <ListGroupItem ><Link to='/portfolio'>Portfolio</Link></ListGroupItem>
                      <ListGroupItem ><Link to='/events'>Events</Link></ListGroupItem>
                      <ListGroupItem ><Link to='/contact'>Contact Us</Link></ListGroupItem>
                    </ListGroup>
                  </div> */}
                  <div className='row'>
                    <div className='col-md-12 footer-logo'>
                      {/* <img src='/assets/jacy_black_transparent_trimmed.png' width='300' height='150'/> */}
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-12'>
                      <div className='col-md-4'>
                      </div>
                      <div className='col-md-4'>
                        <div className='footer-social-buttons'>
                          <Button ><a href="https://www.facebook.com/jrhamz"><i className="fa fa-facebook" aria-hidden="true"></i></a></Button>
                          <Button ><a href="mailto:j@thejacymethod.com"><i className="fa fa-envelope" aria-hidden="true"></i></a></Button>
                          <Button ><a href="https://www.instagram.com/jacycunningham/"><i className="fa fa-instagram" aria-hidden="true"></i></a></Button>
                        </div>
                      </div>
                      <div className='col-md-4'>
                      </div>
                    </div>
                  </div>
            	  </div>
          	</div>
        </div>
    )}
}

export default Footer