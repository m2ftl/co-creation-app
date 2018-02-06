import React, { Component } from "react";
import "../../App.css";
import { connect } from "react-redux";
import { signOut } from "../../store/user/actions";
import { getUserState } from "../../store/user/selectors";

class User extends Component {
  render() {
    return (
      <div>
        <div>
          toto
        </div>
            <div className="App-title">
            <div
              className="g-signin2"
              data-onsuccess="googleConnectCallback"
              data-theme="dark"
            />
            
        </div>

      </div>
    );
  }
}

export default connect(getUserState, signOut)(User);
