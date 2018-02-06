import React, { Component } from "react";
import "../../App.css";
import { connect } from "react-redux";
import { signOut } from "../../store/user/actions";
import { getUserState } from "../../store/user/selectors";

class User extends Component {
  render() {
    return (
      <div className="navbar">
        {this.props.user.id ? (
        <div>
          <img alt={this.props.user.givenName} src={this.props.user.avatar} width={"70px"}/>
          <span>Welcome {this.props.user.givenName}</span>
        </div>
        ) : null}
        <div>
          {this.props.user.id ? (
            <div className="signout" onClick={this.props.signOut}>
              Sign out
            </div>
          ) : (
            <div className="App-title">
            <div
              className="g-signin2"
              data-onsuccess="googleConnectCallback"
              data-theme="dark"
            />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default connect(getUserState, signOut)(User);
