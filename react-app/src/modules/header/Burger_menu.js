import React, { Component } from 'react';
import '../../App.css';

export default class Burger_menu extends Component {
  render(){
    return(
        <div className="item-header-block burger-menu">
          <button type="button" data-toggle="collapse" data-target="#menu">
            <span className="glyphicon glyphicon-menu-hamburger"></span>
          </button>
          <div id="menu" className="collapse">
            <div>
              <a>Submit an idea</a>
            </div>
            <div>
              <a>View ideas</a>
            </div>
            <div>
              <a>Tests</a>
            </div>
            <div>
              <a>My Profile</a>
            </div>
            <div>
              <a><span className="glyphicon glyphicon-log-in"></span>&nbsp;Log out</a>
            </div>
          </div>
        </div>
    );
  }
}
