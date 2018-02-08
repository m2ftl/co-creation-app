import React, { Component } from 'react';
import "../../App.css";
import { Link } from "react-router-dom";

class Success extends Component{

  render() {
    return (
        <div>
        <div> Thank you for your input!!!! </div>
        <Link to="/dashboard">
        <button className="btn btn-dash">Dashboard</button>
        </Link>
        </div>
    );
  }
}

export default (Success);
