import React, { Component } from 'react';
import '../../App.css';
import inesis_logo2 from '../../images/inesis_logo2.png';
import user_pic from '../../images/user_pic.png';
import {getUserState} from '../../store/user/selectors';
import { connect } from 'react-redux';

class HeaderNavBar extends Component {
  render(){
    console.log();
    return(

        <div className="container-grid-navbar">
          <div className="item-navbar_inesis">
            <img src={inesis_logo2} className="inesis_logo" alt="logo" width={'150px'} />
          </div>
          <div className="item-navbar_user">
            <div><img src={this.props.googleUser.avatar} className="user_pic" /></div>
            <div><span>Welcome {this.props.googleUser.givenName}</span></div>
          </div>
        </div>
    );
  }
}

export default connect(getUserState)(HeaderNavBar);
