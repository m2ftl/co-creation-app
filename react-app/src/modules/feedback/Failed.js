import React, { Component } from 'react';
import "../../App.css";
import { Link } from "react-router-dom";

class Failed extends Component{

  render() {
    return (
        <div className="feedbacks">
          <div className="feedback_baseline">Sorry we receive an error please try again later...</div>
          <Link to="/dashboard">
          <button className="btn dashboard_button">Dashboard</button>
          </Link>
        </div>
    );
  }
}

export default (Failed);
