import React, { Component } from 'react'
import { Link } from 'react-router'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const text_content_sub = { 
  minHeight: '300px',
  color: 'rgb(35, 35, 35)',
  textAlign: 'center',
  padding: '70px 80px',
  // https://uigradients.com/#Venice
  textAlign: 'justify',
  background: '#6190E8',  /* fallback for old browsers */
  background: '-webkit-linear-gradient(to bottom, #A7BFE8, #6190E8)',  /* Chrome 10-25, Safari 5.1-6 */
  background: 'linear-gradient(to bottom, #A7BFE8, #6190E8)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
const text_content_sub_pos = {
  position:'relative',
  color: 'black',
  fontSize: '12px'
}

const social_group_item_style = {
  padding: '5px 15px',
  textAlign: 'right',
  backgroundColor: 'rgb(0, 0, 0, 0)',
  border: '0px solid rgb(0, 0, 0, 0)'
}
const link_group_item_style = {
  padding: '5px 15px',
  textAlign: 'left',
  backgroundColor: 'rgb(0, 0, 0, 0)',
  border: '0px solid rgb(0, 0, 0, 0)'
}

class Footer extends Component {
   
  render() {
    return (
        <div style={ text_content_sub_pos }>
          	<div style={ text_content_sub }>
            	  <div className='container'>
                  <div className='col-md-4'>
                    <ListGroup >
                      <ListGroupItem style={ link_group_item_style }><Link to='/'>Home</Link></ListGroupItem>
                      <ListGroupItem style={ link_group_item_style }><Link to='/about'>About Us</Link></ListGroupItem>
                      <ListGroupItem style={ link_group_item_style }><Link to='/portfolio'>Portfolio</Link></ListGroupItem>
                      <ListGroupItem style={ link_group_item_style }><Link to='/events'>Events</Link></ListGroupItem>
                      <ListGroupItem style={ link_group_item_style }><Link to='/contact'>Contact Us</Link></ListGroupItem>
                    </ListGroup>
                  </div>  	  
                  <div className='col-md-4'>
                    <img src='/imgs/jacy_black_transparent_trimmed.png' width='300' height='150'/>
                  </div>  	  
                  <div className='col-md-4'>
                    <ListGroup >
                      <ListGroupItem style={ social_group_item_style }><Link to="https://www.facebook.com/jrhamz"><i className="fa fa-facebook" aria-hidden="true"></i></Link></ListGroupItem>
                      <ListGroupItem style={ social_group_item_style }><Link to="mailto:j@thejacymethod.com"><i className="fa fa-envelope" aria-hidden="true"></i></Link></ListGroupItem>
                      <ListGroupItem style={ social_group_item_style }><Link to="https://www.instagram.com/jacycunningham/"><i className="fa fa-instagram" aria-hidden="true"></i></Link></ListGroupItem>
                    </ListGroup>
                  </div>
            	  </div>
          	</div>
        </div>
    )}
}

export default Footer