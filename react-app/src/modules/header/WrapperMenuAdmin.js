import React, { Component } from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { signOut } from '../../store/user/actions';
import { getUser} from '../../store/profile/selectors';

class WrapperMenu extends Component {
  render(){
    if (this.props.user.isAdmin)
    {
    return(
      <div className="wrapper_menu_items_admin">
        <div className="sep_admin_menu">Admin Menu</div>
        <Link to="/createtest" style={{ textDecoration: 'none' }}><div onClick={this.props.disable_menu} className="burgerLink">Create a test</div></Link>
        <Link to="/viewtestsadmin" style={{ textDecoration: 'none' }}><div onClick={this.props.disable_menu} className="burgerLink">Admin tests</div></Link>
        <Link to="/createquestion" style={{ textDecoration: 'none' }}><div onClick={this.props.disable_menu} className="burgerLink">Create a question</div></Link>
        <Link to="/viewquestionsadmin" style={{ textDecoration: 'none' }}><div onClick={this.props.disable_menu} className="burgerLink">Admin questions</div></Link>
        <Link to="/viewusers" style={{ textDecoration: 'none' }}><div onClick={this.props.disable_menu} className="burgerLink">View users</div></Link>
      </div>
    );
    }
    else {
      return <div />
    }
  }
}

export default connect(getUser, signOut)(WrapperMenu);
