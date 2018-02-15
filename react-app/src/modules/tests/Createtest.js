import React, { Component } from 'react';
import "../../App.css";
import Createtestform from "./Createtest_form";
import Inserttest from "./actions";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getUser } from "../../store/profile/selectors"

class Createtest extends Component{
  constructor(props) {
    super(props);
    this.state = {
      testsub:false,
      testfirsttime:true
    };
  }

  submit = values => {
    // print the form values to the console

      Inserttest(values,this.props.user.id_user)
      .then((response) =>
      this.setState({
        testsub: response,
        testfirsttime: false
      }));
  }

  render() {
    return (
      <div>
      {this.state.testfirsttime &&
        <Createtestform onSubmit={this.submit} />
      }

      {this.state.testfirsttime === false && this.state.testsub &&
        <div className="feedbacks">
        <div className="feedback_baseline"> Your test has been successfully created!!!! </div>
        <Link to="/viewtests" style={{ textDecoration: 'none' }}>
        <button className="btn dashboard_button">View Tests</button>
        </Link>
        </div>
      }
      {this.state.testfirsttime === false && this.state.testsub === false &&
        <div className="feedbacks">
        <div className="feedback_baseline"> Sorry we receive an error please try again later... </div>
        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
        <button className="btn dashboard_button">Dashboard</button>
        </Link>
        </div>
      }
    </div>
    );
  }
}

export default connect(getUser)(Createtest);
