import React, { Component } from 'react';
import '../../App.css';
import burger_menu_icon from "../../images/burger_menu_icon.png";


export default class BurgerMenuButton extends Component {

  render(){
    return(
      <div className="div_burger_menu">

        <button type="button" className="button_burger_menu" onClick={this.props.changeClass}>
          <img src={""+burger_menu_icon+""} width={"40px"} alt="burger_menu_button"/>
        </button>

      </div>
    );
  }
}
