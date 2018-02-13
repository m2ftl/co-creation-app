import React, { Component } from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import dash_icons_got_idea from '../../images/dash_icons_got_idea.png';
import dash_icons_view_ideas from '../../images/dash_icons_view_ideas.png';
import dash_icons_questions from '../../images/dash_icons_questions.png';
import dash_icons_tests from '../../images/dash_icons_tests.png';
import getDashboard from "../../store/dashboard/selectors";
import dashboardActions from '../../store/dashboard/actions';
import { connect } from 'react-redux';

class Dashboard extends Component {

  componentDidMount() {
    this.props.retrieveQuestionsCounter(this.props.useruuid);
    this.props.retrieveTestsCounter(this.props.useruuid);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.counterquestions) {
      this.props.retrieveQuestionsCounter(this.props.useruuid);
    }
    if (nextProps.countertests) {
      this.props.retrieveTestsCounter(this.props.useruuid);
    }
  }

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
                <p className="btn dashboard_button">I have an idea!</p>
              </Link>
            </div>
          </div>
          <div className="dashboard_item">
            <img src={dash_icons_view_ideas} alt="logo" height={"50px"} />
            <div>
              <h5>View Ideas</h5>
              <p>Lorem Ipsum dolor sit amet</p>
              <Link to="/viewideas">
                <p className="btn dashboard_button">View all</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="dashboard_items_row">
          <div className="dashboard_item">
            <div>
            <img src={dash_icons_questions} alt="logo" height={"50px"} />
            <div className="circle">{this.props.counterquestions}</div>
            </div>
            <div>
              <h5>Questions</h5>
              <p>Lorem Ipsum dolor sit amet</p>
              <Link to="/viewquestions">
                <p className="btn dashboard_button">Questions</p>
              </Link>
            </div>
          </div>
          <div className="dashboard_item">
            <img src={dash_icons_tests} alt="logo" height={"50px"} />
            <div className="circle">{this.props.countertests}</div>
            <div>
              <h5>Tests</h5>
              <p>Lorem Ipsum dolor sit amet</p>
              <Link to="/viewtests">
                <p className="btn dashboard_button">Go!</p>
              </Link>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default connect(getDashboard, dashboardActions)(Dashboard);
