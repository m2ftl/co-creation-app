import React, { Component } from 'react';
import "../../App.css";
import Createquestionform from "./Createquestion_form";
import Insertquestion from "./actions";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getUser } from "../../store/profile/selectors"

class Createquestion extends Component{
  constructor(props) {
    super(props);
    this.state = {
      questionsub:false,
      questionfirsttime:true
    };
  }

  submit = values => {
    // print the form values to the console

      Insertquestion(values,this.props.user.id_user)
      .then((response) =>
      this.setState({
        questionsub: response,
        questionfirsttime: false
      }));
  }

  render() {
    return (
      <div>
      {this.state.questionfirsttime &&
        <Createquestionform onSubmit={this.submit} />
      }

      {this.state.questionfirsttime === false && this.state.questionsub &&
        <div className="feedbacks">
        <div className="feedback_baseline"> Your question has been successfully created!!!! </div>
        <Link to="/viewquestionsadmin">
        <button className="btn dashboard_button">View Questions</button>
        </Link>
        </div>
      }
      {this.state.questionfirsttime === false && this.state.questionsub === false &&
        <div className="feedbacks">
        <div className="feedback_baseline"> Sorry we receive an error please try again later... </div>
        <Link to="/dashboard">
        <button className="btn dashboard_button">Dashboard</button>
        </Link>
        </div>
      }
    </div>
    );
  }
}

export default connect(getUser)(Createquestion);
