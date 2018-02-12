import React, { Component } from 'react';
import '../../App.css';
import BurgerMenuButton from './BurgerMenuButton';
import LogoInesis from './LogoInesis';
import UserWelcoming from './UserWelcoming';
import WrapperMenu from './WrapperMenu';
import WrapperMenuAdmin from './WrapperMenuAdmin';
import {getUser} from '../../store/profile/selectors';
import { connect } from 'react-redux';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideClass: "",
      buttonpush: 0,
      active: ""
    };
  }

  changeClass = (event) => {
      event.preventDefault();
      if (this.state.buttonpush === 0) {
        this.setState({
          wrapperClass:"display_menu",
          buttonpush:1,
          active: "overlay_active"
        });
        this.forceUpdate();
      }
      else {
        this.setState({
          wrapperClass:"",
          buttonpush:0,
          active: ""
        });
        this.forceUpdate();
      }
  }

  disable_menu = (event) => {
    this.setState({
      wrapperClass:"",
      buttonpush:0,
      active: ""
    });
  }

  render(){
    return(
      <div>
        <div className="container-header">
          {this.props.user.loggedIn
            ?
            <BurgerMenuButton changeClass={this.changeClass}/>
            : <div className="item-navbar_empty"></div>
          }
          <div className={"wrapper_overlay "+this.state.active} onClick={this.disable_menu}></div>
          <LogoInesis />
          {this.props.user.loggedIn
            ?
            <UserWelcoming />
            : <div className="item-navbar_empty"></div>
          }
        </div>
        <div className={"wrapper_menu "+this.state.wrapperClass}>
          <WrapperMenu disable_menu={this.disable_menu}/>
          <WrapperMenuAdmin disable_menu={this.disable_menu}/>
        </div>
      </div>
    );
  }
}

export default connect(getUser)(Header);
