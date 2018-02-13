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
        <Link to="/createtest"><div onClick={this.props.disable_menu}>Create a test</div></Link>
        <Link to="/viewtestsadmin"><div onClick={this.props.disable_menu}>Admin tests</div></Link>
        <Link to="/createquestion"><div onClick={this.props.disable_menu}>Create a question</div></Link>
        <Link to="/viewquestionsadmin"><div onClick={this.props.disable_menu}>Admin questions</div></Link>
        <Link to="/viewusers"><div onClick={this.props.disable_menu}>View users</div></Link>
      </div>
    );
    }
    else {
      return <div />
    }
  }
}

export default connect(getUser, signOut)(WrapperMenu);
