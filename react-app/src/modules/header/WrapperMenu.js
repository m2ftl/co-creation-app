import React, { Component } from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { signOut } from '../../store/user/actions';

class WrapperMenu extends Component {

  render(){
    return(
      <div className="wrapper_menu_items">
        <Link to="/dashboard"><div>Dashboard</div></Link>
        <Link to="/createidea"><div>Submit an idea</div></Link>
        <Link to="/viewideas"><div>View ideas</div></Link>
        <Link to="/viewtests"><div>Tests</div></Link>
        <Link to="/viewquestions"><div>Questions</div></Link>
        <Link to="/dashboard"><div>My Profile</div></Link>
        <Link to="/signoutmenu">
          <div><span className="glyphicon glyphicon-log-in"></span>&nbsp;Log out</div>
        </Link>
      </div>
    );
  }
}

export default connect(null, signOut)(WrapperMenu);
