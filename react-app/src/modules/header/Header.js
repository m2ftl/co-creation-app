import React, { Component } from 'react';
import '../../App.css';
import BurgerMenuButton from './BurgerMenuButton';
import HeaderNavBar from './HeaderNavBar';
import WrapperMenu from './WrapperMenu';
import WrapperMenuAdmin from './WrapperMenuAdmin';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideClass: "",
      buttonpush: 0
    };
  }

  changeClass = (event) => {
      event.preventDefault();
      if (this.state.buttonpush === 0) {
        this.setState({
          wrapperClass:"display_menu",
          buttonpush:1
        });
        this.forceUpdate();
      }
      else {
        this.setState({
          wrapperClass:"",
          buttonpush:0
        });
        this.forceUpdate();
      }
  };

  render(){
    return(
      <div>
        <div className="container-header">
          <BurgerMenuButton changeClass={this.changeClass}/>
          <HeaderNavBar />
        </div>
        <div className={"wrapper_menu "+this.state.wrapperClass}>
          <WrapperMenu />
          
          <WrapperMenuAdmin />
        </div>
      </div>
    );
  }
}
