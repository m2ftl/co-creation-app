import React, { Component } from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { signOut } from '../../store/user/actions';

class WrapperMenu extends Component {

  render(){
    return(
      <div className="wrapper_menu_items">
        <Link to="/dashboard"><div onClick={this.props.disable_menu}>Dashboard</div></Link>
        <Link to="/createidea"><div onClick={this.props.disable_menu}>Submit an idea</div></Link>
        <Link to="/viewideas"><div onClick={this.props.disable_menu}>View ideas</div></Link>
        <Link to="/viewtests"><div onClick={this.props.disable_menu}>Tests</div></Link>
        <Link to="/viewquestions"><div onClick={this.props.disable_menu}>Questions</div></Link>
        <Link to="/edit-profile"><div onClick={this.props.disable_menu}>My Profile</div></Link>
        <Link to="/signoutmenu">
          <div onClick={this.props.disable_menu}><span className="glyphicon glyphicon-log-in"></span>&nbsp;Log out</div>
        </Link>
      </div>
    );
  }
}

export default connect(null, signOut)(WrapperMenu);
