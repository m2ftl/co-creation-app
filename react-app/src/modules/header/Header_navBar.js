import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from "react-bootstrap";
import '../../App.css';
import inesis_logo from '../../images/inesis-logo.png';
import user_pic from '../../images/user_pic.png';

export default class Header_navBar extends Component {
  render(){
    return(
        <div className="container-grid-navbar">
          <div className="item-navbar">
            <img src={inesis_logo} className="inesis_logo" alt="logo" width={'50px'} />
          </div>
          <div className="item-navbar">
            <img src={user_pic} className="user_pic" alt="logo" width={'50px'} />
            <span>Welcome User</span>
          </div>
        </div>
    );
  }
}
