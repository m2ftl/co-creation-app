import React, { Component } from "react";
import "../../App.css";
import { connect } from "react-redux";
import { signOut } from "../../store/user/actions";
import { getUserState } from "../../store/user/selectors";

class User extends Component {




  render() {
    return (
      <div className="navbar">
        {this.props.googleUser.id ? (
        <div>
          <img alt={this.props.googleUser.givenName} src={this.props.googleUser.avatar} width={"70px"}/>
          <span>Welcome {this.props.googleUser.givenName}</span>
        </div>
        ) : null}
        <div>
          {this.props.googleUser.id ? (
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
