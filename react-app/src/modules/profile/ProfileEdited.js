import React, { Component } from 'react';
import "../../App.css";
import { Link } from "react-router-dom";

class ProfileEdited extends Component{

  render() {
    return (
        <div className="feedbacks">
          <div className="feedback_baseline">Your profile has been updated</div>
          <Link to="/dashboard" style={{ textDecoration: 'none' }}>
          <button className="btn dashboard_button">Dashboard</button>
          </Link>
        </div>
    );
  }
}

export default (ProfileEdited);
