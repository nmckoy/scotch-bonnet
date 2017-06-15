import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
// http://stackoverflow.com/questions/35687353/react-bootstrap-link-item-in-a-navitem
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import EventListener, { withOptions } from 'react-event-listener'
/* global $ */ // i fucking need jquery here. such a shame

import { removeActiveHome } from '../Utils'

const nav_container_style = { 
    minHeight: '100px',
    backgroundColor: 'rgba(34, 34, 34, 0.00)',
    borderColor: 'rgba(0, 0, 0, 0)'
}
const nav_content_style = {
    padding: '22px'
}
const logo_link_style = {
    padding: '0px'
}

class AppNav extends Component {
    
    resizeNav(event) {
        let scrollTop = event.srcElement.body.scrollTop // so i guess .srcElement == target
        let main_nav_style_props = 'min-height: 35px;'
        
        if (scrollTop > 80) {
                main_nav_style_props = main_nav_style_props + 'background-color: rgba(0, 0, 0, 1)'
            document.getElementById('main-nav').setAttribute('style', main_nav_style_props)
            document.getElementById('main-nav-content').setAttribute('style', 'padding: 7px;')
        } else {
            if (window.width > 767) {
                main_nav_style_props = main_nav_style_props + 'background-color: rgba(34, 34, 34, 0.00)'
            }
            document.getElementById('main-nav').setAttribute('style', main_nav_style_props)
            document.getElementById('main-nav-content').setAttribute('style', 'padding: 22px;')
        }
    }
    
    collapseNav() {
        $('.navbar-collapse').collapse('hide') // :/
    }

    render() {
        return (
            <div>
                <EventListener target="window" onScroll={ this.resizeNav }/>
            
                <Navbar id="main-nav" inverse fixedTop>
                    <div id="main-nav-content" style={ nav_content_style } className="container-fluid">
                        <Navbar.Header>
                          <Navbar.Brand>
                            <a href="/" style={ logo_link_style } >
                                <img src="http://i.imgur.com/1QTfNv5.png" width="100" height="50"/>
                                {/* jacy_logo_white_transparent_cropped */}
                            </a>
                          </Navbar.Brand>
                          <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse id='nav-content' data-toggle="collapse" data-target=".nav-collapse.show">
                          <Nav pullRight>
                            <LinkContainer to="/">
                                <NavItem id='home-link' onClick={ this.collapseNav } eventKey={1}>HOME</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <NavItem onClick={ this.collapseNav } eventKey={2}>ABOUT</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/portfolio">
                                <NavItem onClick={ this.collapseNav } eventKey={3}>PORTFOLIO</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/events">
                                <NavItem onClick={ this.collapseNav } eventKey={3}>EVENTS</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/contact">
                                <NavItem onClick={ this.collapseNav } eventKey={3}>CONTACT US</NavItem>
                            </LinkContainer>
                          </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        );

    }
}

export default AppNav