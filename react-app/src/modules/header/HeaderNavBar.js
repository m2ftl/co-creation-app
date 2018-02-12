import React, { Component } from 'react';
import '../../App.css';
import inesis_logo2 from '../../images/inesis_logo2.png';
import user_pic from '../../images/user_pic.png';

export default class HeaderNavBar extends Component {
  render(){
    return(
        <div className="container-grid-navbar">
          <div className="item-navbar_inesis">
            <img src={inesis_logo2} className="inesis_logo" alt="logo" width={'150px'} />
          </div>
          <div className="item-navbar">
            <img src={user_pic} className="user_pic" alt="logo" width={'50px'} />
            <span>Welcome User</span>
          </div>
        </div>
    );
  }
}