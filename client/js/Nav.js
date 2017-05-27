import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
// http://stackoverflow.com/questions/35687353/react-bootstrap-link-item-in-a-navitem
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import EventListener, { withOptions } from 'react-event-listener'

const nav_container_style = { 
    minHeight: '100px',
    backgroundColor: 'rgba(34, 34, 34, 0.70)',
    borderColor: 'rgba(0, 0, 0, 0)'
}
const nav_content_style = {
    padding: '20px'
}

export default React.createClass({
    resizeNav: function(event) {
        let scrollTop = event.srcElement.body.scrollTop // so i guess .srcElement == target
        if (scrollTop > 80) {
            document.getElementById('main-nav').setAttribute('style', 'min-height: 35px; background-color: rgba(0, 0, 0, 1)')
            document.getElementById('main-nav-content').setAttribute('style', 'padding: 0px;')
        } else {
            document.getElementById('main-nav').setAttribute('style', 'min-height: 100px; background-color: rgba(34, 34, 34, 0.70)')
            document.getElementById('main-nav-content').setAttribute('style', 'padding: 20px;')
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
                            <a href="#">LOGO</a>
                          </Navbar.Brand>
                          <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                          <Nav>
                            <NavItem eventKey={1} href="#">About</NavItem>
                            <LinkContainer to="/contact">
                                <NavItem eventKey={2}>Contact Us</NavItem>
                            </LinkContainer>
                          </Nav>
                          <Nav pullRight>
                            <NavItem eventKey={1} href="#">Locations</NavItem>
                            <NavItem eventKey={2} href="#">Purchase</NavItem>
                          </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        );

    }
});