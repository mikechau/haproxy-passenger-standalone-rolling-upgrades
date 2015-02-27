'use strict';

import React from 'react';

import { Navbar, Nav, NavItem, ButtonToolbar, Button } from 'react-bootstrap';
import { NavItemLink, MenuItemLink } from 'react-router-bootstrap';

import ColorResponseActions from '../../../actions/ColorResponseActions';

var TopNavBar = React.createClass({
  handleStart(e) {
    e.preventDefault();
    ColorResponseActions.startColorResponsePolling();
  },

  handleStop(e) {
    e.preventDefault();
    ColorResponseActions.stopColorResponsePolling();
  },

  render() {
    return (
      <Navbar brand="HYPERION" fluid={false} staticTop={true} toggleNavKey={1}>
        <Nav>
          <NavItem>
            <Button bsStyle="success" onClick={this.handleStart}>START</Button>
          </NavItem>
          
          <NavItem>
            <Button bsStyle="danger" onClick={this.handleStop}>STOP</Button>
          </NavItem>
        </Nav>
        <Nav right eventKey={1}>
          <NavItem eventKey={1} href="http://localhost:4000/color">
            <span style={{ color: 'blue' }}>TITANIUM:4000</span>
          </NavItem>

          <NavItem eventKey={2} href="http://localhost:4001/color">
            <span style={{ color: 'green' }}>CARBON:4001</span>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
});

export default TopNavBar;
