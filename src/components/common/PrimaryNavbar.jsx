import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import '../../styles/primaryNavbar.css'



export default class PrimaryNavbar extends Component {
  /* constructor(props) {
    super(props);        
    this.state = {
        activeKey: 1
    };
  }

  componentDidMount() {
    console.log('ewew')
    this.setState({
      activeKey: window.location.href
    })
  }

  handleSelect = (selectedKey) => {
    this.setState({
      activeKey: selectedKey
    })
  } */

  render() {
    return (
      <div > 
          <Navbar inverse collapseOnSelect className="customized-navbar">
            <Navbar.Header>
              <Navbar.Brand>
                <Link to = "/"  onClick={window.scrollTo(0, 0)}>
                  <img
                    src="res/Anugraha logo.png"
                    alt=""
                    className="img-fluid rounded"
                    />
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight activeHref={window.location.pathname} id="example-one"/*  onSelect={this.handleSelect} */>
                <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                  HOME
                </NavItem> 
                <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
                 ABOUT
                </NavItem> 
                <NavItem eventKey={3} componentClass={Link} href="/courses" to="/courses">
                  COURSES
                </NavItem> 
                <NavItem eventKey={4} componentClass={Link} href="/gallery" to="/gallery">
                  GALLERY
                </NavItem> 
                <NavItem eventKey={5} componentClass={Link} href="/events" to="/events">
                  EVENTS
                </NavItem> 
                <NavItem eventKey={6} componentClass={Link} href="/news"  to="/news">
                  NEWS
                </NavItem> 
                <NavItem eventKey={7} componentClass={Link} href="/contact"  to="/contact">
                  CONTACT
                </NavItem> 
              </Nav>
            </Navbar.Collapse>
          </Navbar>        
      </div>
    );
  }
}


