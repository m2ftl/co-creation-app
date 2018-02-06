import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, NavItem, MenuItem } from "react-bootstrap";
import '../../App.css';
import inesis_logo from '../../images/inesis-logo.png';
import user_pic from '../../images/user_pic.png';

class Header extends Component {
  render() {
    return (

      <div>
      <div>
      <Navbar collapseOnSelect>
        <Navbar.Collapse>

          <Nav pullLeft>
            <button type="button" class="btn" data-toggle="collapse" data-target="#menu">
              <span class="glyphicon glyphicon-menu-hamburger"></span>
            </button>

            <div id="menu" class="collapse">
              <ul>
                <li><a>Submit an idea</a></li>
                <li><a>View ideas</a></li>
                <li><a>Questions</a></li>
                <li><a>Tests</a></li>
                <li><a>My Profile</a></li>
                <li><a><span class="glyphicon glyphicon-log-in"></span>&nbsp;Log out</a></li>
              </ul>
            </div>
          </Nav>

          <Nav>
            <NavDropdown eventKey={3} title="Menu" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Submit an idea</MenuItem>
              <MenuItem eventKey={3.2}>View Ideas</MenuItem>
              <MenuItem eventKey={3.3}>Questions</MenuItem>
              <MenuItem eventKey={3.4}>Tests</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.5}>My Profile</MenuItem>
              <MenuItem eventKey={3.6}><span class="glyphicon glyphicon-log-in"></span>&nbsp;Log out</MenuItem>
            </NavDropdown>
          </Nav>

          <Nav>
            <NavItem>
              <img src={inesis_logo} className="inesis_logo" alt="logo" width={'50px'} />
            </NavItem>
          </Nav>

          <Nav pullRight>
          <img src={user_pic} className="user_pic" alt="logo" width={'50px'} />
            <NavItem eventKey={2} href="#">
              Welcome User
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>


    </div>

    );
  }
}

export default Header;
