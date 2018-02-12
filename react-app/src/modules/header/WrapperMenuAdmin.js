import React, { Component } from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { signOut } from '../../store/user/actions';

class WrapperMenu extends Component {

  render(){
    return(
      <div className="wrapper_menu_items_admin">
        <div className="sep_admin_menu">Admin Menu</div>
        <Link to="/createtest"><div>Create a test</div></Link>
        <Link to="/viewtestsadmin"><div>Admin tests</div></Link>
        <Link to="/createquestion"><div>Create a question</div></Link>
        <Link to="/viewquestionsadmin"><div>Admin questions</div></Link>
        <Link to="/viewusers"><div>View users</div></Link>
      </div>
    );
  }
}

export default connect(null, signOut)(WrapperMenu);
