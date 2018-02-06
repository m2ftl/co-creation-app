import React, { Component } from 'react';
import '../../App.css';
import Burger_menu from './Burger_menu';
import Header_navBar from './Header_navBar';

export default class Header extends Component {
  render(){
    return(
      <div className="container-header">
        <Burger_menu />
        <Header_navBar />
      </div>
    );
  }
}
