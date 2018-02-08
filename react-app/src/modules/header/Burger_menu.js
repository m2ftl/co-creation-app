import React, { Component } from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { signOut } from "../../store/user/actions";


class Burger_menu extends Component {

  render(){
    return(
        <div className="item-header-block burger-menu">
          <button type="button" data-toggle="collapse" data-target="#menu">
            <span className="glyphicon glyphicon-menu-hamburger"></span>
          </button>
          <div id="menu" className="collapse">
            <Link to="/dashboard"><div><a>Dashboard</a></div></Link>
            <Link to="/createidea"><div><a>Submit an idea</a></div></Link>
            <Link to="/viewideas"><div><a>View ideas</a></div></Link>
              <div><a>Tests</a></div>
              <div><a>My Profile</a></div>
              <div><a><span className="glyphicon glyphicon-log-in"></span>&nbsp;Log out</a></div>
          </div>
        </div>
    );
  }
}

export default connect(signOut)(Burger_menu);
