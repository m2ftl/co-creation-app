import React, { Component } from 'react';
import '../../App.css';
import inesis_logo from '../../images/inesis-logo.png';
import { Link } from "react-router-dom";


export default class Dashboard extends Component {
  render() {
    return (
      <div className="container-flex-dashboard">

        <div className="dash_row">
          <div className="item_dash">
            <img src={inesis_logo} alt="logo" width={"50px"} />
            <div>
              <h5>New Idea</h5>
              <p>Lorem Ipsum dolor sit amet</p>
              <Link to="/createidea">
                <a className="btn btn-dash">I have an idea!</a>
              </Link>
            </div>
          </div>
          <div className="item_dash">
            <img src={inesis_logo} alt="logo" width={"50px"} />
            <div>
              <h5>View Ideas</h5>
              <p>Lorem Ipsum dolor sit amet</p>
                <a className="btn btn-dash">View all</a>
            </div>
          </div>
        </div>

        <div className="dash_row">
          <div className="item_dash">
            <img src={inesis_logo} alt="logo" width={"50px"} />
            <div>
              <h5>Questions</h5>
              <p>Lorem Ipsum dolor sit amet</p>
                <a className="btn btn-dash">Answer</a>
            </div>
          </div>
          <div className="item_dash">
            <img src={inesis_logo} alt="logo" width={"50px"} />
            <div>
              <h5>Tests</h5>
              <p>Lorem Ipsum dolor sit amet</p>
                <a className="btn btn-dash">Go!</a>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
