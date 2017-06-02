import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
// http://stackoverflow.com/questions/35687353/react-bootstrap-link-item-in-a-navitem
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import EventListener, { withOptions } from 'react-event-listener'

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

export default React.createClass({
    resizeNav: function(event) {
        let scrollTop = event.srcElement.body.scrollTop // so i guess .srcElement == target
        if (scrollTop > 80) {
            document.getElementById('main-nav').setAttribute('style', 'min-height: 35px; background-color: rgba(0, 0, 0, 1)')
            document.getElementById('main-nav-content').setAttribute('style', 'padding: 7px;')
        } else {
            document.getElementById('main-nav').setAttribute('style', 'min-height: 70px; background-color: rgba(34, 34, 34, 0.00)')
            document.getElementById('main-nav-content').setAttribute('style', 'padding: 22px;')
        }
    },

    render: function() {

        return (
            <div>
                <EventListener target="window" onScroll={ this.resizeNav }/>
            
                <Navbar id="main-nav" style={ nav_container_style } inverse fixedTop>
                    <div id="main-nav-content" style={ nav_content_style } className="container-fluid">
                        <Navbar.Header>
                          <Navbar.Brand>
                            <a href="/" style={ logo_link_style } ><img src="/assets/imgs/jacy_logo_white_transparent_cropped.png" width="100" height="50"/></a>
                          </Navbar.Brand>
                          <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                          <Nav pullRight>
                            <LinkContainer to="/">
                                <NavItem eventKey={1}>HOME</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <NavItem eventKey={2}>ABOUT US</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/portfolio">
                                <NavItem eventKey={3}>PORTFOLIO</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/events">
                                <NavItem eventKey={3}>EVENTS</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/contact">
                                <NavItem eventKey={3}>CONTACT US</NavItem>
                            </LinkContainer>
                          </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        );

    }
});