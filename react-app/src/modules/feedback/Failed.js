import React, { Component } from 'react';
import "../../App.css";
import { Link } from "react-router-dom";

class Failed extends Component{

  render() {
    return (
        <div>
        <div> Sorry we receive an error please try again later... </div>
        <Link to="/dashboard">
        <button className="btn btn-dash">Dashboard</button>
        </Link>
        </div>
    );
  }
}

export default (Failed);
