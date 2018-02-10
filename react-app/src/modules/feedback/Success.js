import React, { Component } from 'react';
import "../../App.css";
import { Link } from "react-router-dom";

class Success extends Component{

  render() {
    return (
        <div className="feedbacks">
          <div className="feedback_baseline">Thank you for your feedback</div>
          <Link to="/dashboard">
          <button className="btn btn-dash">Dashboard</button>
          </Link>
        </div>
    );
  }
}

export default (Success);
