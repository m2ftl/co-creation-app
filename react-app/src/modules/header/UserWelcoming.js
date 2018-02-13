import React, { Component } from 'react';
import '../../App.css';
import {getUserState} from '../../store/user/selectors';
import { connect } from 'react-redux';

class UserWelcoming extends Component {
  render(){
    return(
        <div className="container-grid-navbar">
          <div className="item-navbar_user">
            <div><img src={this.props.googleUser.avatar} className="user_pic" alt="logo" /></div>
            <div><span>Welcome {this.props.googleUser.givenName}</span></div>
          </div>
        </div>
    );
  }
}

export default connect(getUserState)(UserWelcoming);
