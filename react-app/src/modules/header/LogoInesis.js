import React, { Component } from 'react';
import '../../App.css';
import inesis_logo2 from '../../images/inesis_logo2.png';
import {getUserState} from '../../store/user/selectors';
import { connect } from 'react-redux';

class LogoInesis extends Component {
  render(){
    console.log();
    return(
        <div className="container-grid-navbar">
          <div className="item-navbar_inesis">
            <img src={inesis_logo2} className="inesis_logo" alt="logo" width={'150px'} />
          </div>
        </div>
    );
  }
}

export default connect(getUserState)(LogoInesis);
