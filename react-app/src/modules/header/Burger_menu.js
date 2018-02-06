import React, { Component } from 'react';
import '../../App.css';

export default class Burger_menu extends Component {
  render(){
    return(
        <div className="item-header-block burger-menu">
          <button type="button" data-toggle="collapse" data-target="#menu">
            <span class="glyphicon glyphicon-menu-hamburger"></span>
          </button>
          <div id="menu" class="collapse">
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
              <a><span class="glyphicon glyphicon-log-in"></span>&nbsp;Log out</a>
            </div>
          </div>
        </div>
    );
  }
}
