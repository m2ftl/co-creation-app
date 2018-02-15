import React, { Component } from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { signOut } from '../../store/user/actions';

class WrapperMenu extends Component {

  render(){
    return(
      <div className="wrapper_menu_items">
        <Link to="/dashboard" style={{ textDecoration: 'none' }}><div onClick={this.props.disable_menu} className="burgerLink">Dashboard</div></Link>
        <Link to="/createidea" style={{ textDecoration: 'none' }}><div onClick={this.props.disable_menu} className="burgerLink">Submit an idea</div></Link>
        <Link to="/viewideas" style={{ textDecoration: 'none' }}><div onClick={this.props.disable_menu} className="burgerLink">View ideas</div></Link>
        <Link to="/viewtests" style={{ textDecoration: 'none' }}><div onClick={this.props.disable_menu} className="burgerLink">Tests</div></Link>
        <Link to="/viewquestions" style={{ textDecoration: 'none' }}><div onClick={this.props.disable_menu} className="burgerLink">Questions</div></Link>
        <Link to="/edit-profile" style={{ textDecoration: 'none' }}><div onClick={this.props.disable_menu} className="burgerLink">My Profile</div></Link>
        <Link to="/signoutmenu" style={{ textDecoration: 'none' }}>
          <div onClick={this.props.disable_menu} className="burgerLink"><span className="glyphicon glyphicon-log-in"></span>&nbsp;Log out</div>
        </Link>
      </div>
    );
  }
}

export default connect(null, signOut)(WrapperMenu);
