import React, { Component } from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { signOut } from "../../store/user/actions";


class Burger_menu extends Component {

  render(){
    return(
      <div>
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
            <Link to="/signoutmenu">
              <div><a><span className="glyphicon glyphicon-log-in"></span>&nbsp;Log out</a></div>
            </Link>
          </div>
        </div>
        <div className="item-header-block burger-menuadmin">
          <button type="button" data-toggle="collapse" data-target="#menuadmin">
            <span className="glyphicon glyphicon-menu-hamburger"></span>
          </button>
          <div id="menuadmin" className="collapse">
            <Link to="/dashboard"><div><a>Dashboard</a></div></Link>
            <Link to="/createtest"><div><a>Create a test</a></div></Link>
            <Link to="/createquestion"><div><a>Create a question</a></div></Link>
            <Link to="/viewquestionsadmin"><div><a>Admin questions</a></div></Link>
            <Link to="/signoutmenu">
              <div><a><span className="glyphicon glyphicon-log-in"></span>&nbsp;Log out</a></div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(signOut)(Burger_menu);
