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
          {this.props.user.loggedIn
            ?
            <BurgerMenuButton changeClass={this.changeClass}/>
            : <div className="item-navbar_empty"></div>
          }
          <LogoInesis />
          {this.props.user.loggedIn
            ?
            <UserWelcoming />
            : <div className="item-navbar_empty"></div>
          }
        </div>
        <div className={"wrapper_menu "+this.state.wrapperClass}>
          <WrapperMenu changeClass={this.changeClass}/>

          <WrapperMenuAdmin changeClass={this.changeClass}/>
        </div>
      </div>
    );
  }
}

export default connect(getUser)(Header);
