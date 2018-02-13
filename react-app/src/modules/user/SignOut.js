import React, { Component } from "react";
import { connect } from "react-redux";
import { signOut } from "../../store/user/actions";

class SignOut extends React.Component {
  componentDidMount() {
    this.props.signOut()
  }

  render() {
    return (null)
  }
}



export default connect(null, signOut)(SignOut);
