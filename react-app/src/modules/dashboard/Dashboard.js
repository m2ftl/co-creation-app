import React, { Component } from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import dash_icons_got_idea from '../../images/dash_icons_got_idea.png';
import dash_icons_view_ideas from '../../images/dash_icons_view_ideas.png';
import dash_icons_questions from '../../images/dash_icons_questions.png';
import dash_icons_tests from '../../images/dash_icons_tests.png';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="container-global-dashboard">

        <div className="dashboard_items_row">
          <div className="dashboard_item">
            <img src={dash_icons_got_idea} alt="logo" height={"50px"} />
            <div>
              <h5>New Idea</h5>
              <p>Lorem Ipsum dolor sit amet</p>
              <Link to="/createidea">
                <a className="btn dashboard_button">I have an idea!</a>
              </Link>
            </div>
          </div>
          <div className="dashboard_item">
            <img src={dash_icons_view_ideas} alt="logo" height={"50px"} />
            <div>
              <h5>View Ideas</h5>
              <p>Lorem Ipsum dolor sit amet</p>
              <Link to="/viewideas">
                <a className="btn dashboard_button">View all</a>
              </Link>
            </div>
          </div>
        </div>

        <div className="dashboard_items_row">
          <div className="dashboard_item">
            <img src={dash_icons_questions} alt="logo" height={"50px"} />
            <div>
              <h5>Questions</h5>
              <p>Lorem Ipsum dolor sit amet</p>
              <Link to="/viewquestions">
                <a className="btn dashboard_button">Questions</a>
              </Link>
            </div>
          </div>
          <div className="dashboard_item">
            <img src={dash_icons_tests} alt="logo" height={"50px"} />
            <div>
              <h5>Tests</h5>
              <p>Lorem Ipsum dolor sit amet</p>
              <Link to="/viewtests">
                <a className="btn dashboard_button">Go!</a>
              </Link>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
