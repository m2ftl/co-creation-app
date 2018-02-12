import React, { Component } from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import dash_icons_got_idea from '../../images/dash_icons_got_idea.png';
import dash_icons_view_ideas from '../../images/dash_icons_view_ideas.png';
import dash_icons_questions from '../../images/dash_icons_questions.png';
import dash_icons_tests from '../../images/dash_icons_tests.png';
import getQuestions from "../../store/questions/selectors";
import questionsActions from '../../store/questions/actions';
import getTests from "../../store/tests/selectors";
import testsActions from '../../store/tests/actions';
import { connect } from 'react-redux';

class Dashboard extends Component {

  componentDidMount() {
    this.props.retrieveQuestions(this.props.useruuid);
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
            <div>
            <img src={dash_icons_questions} alt="logo" height={"50px"} />
            <div class="circle">{this.props.counterquestions}</div>
            </div>
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

export default connect(getQuestions, questionsActions)(Dashboard);
