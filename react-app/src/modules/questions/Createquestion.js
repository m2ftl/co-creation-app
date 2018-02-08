import React, { Component } from 'react';
import "../../App.css";
import Createquestionform from "./Createquestion_form";
import Insertquestion from "./actions";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import getUser from "../../store/profile/selectors"

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
    console.log(this.state.questionfirsttime);
    return (
      <div>
      {this.state.questionfirsttime &&
        <Createquestionform onSubmit={this.submit} />
      }

      {this.state.questionfirsttime === false && this.state.questionsub &&
        <div>
        <div> Your question has been successfully created!!!! </div>
        <Link to="/dashboard">
        <button className="btn btn-dash">Dashboard</button>
        </Link>
        </div>
      }
      {this.state.questionfirsttime === false && this.state.questionsub === false &&
        <div>
        <div> Sorry we receive an error please try again later... </div>
        <Link to="/dashboard">
        <button className="btn btn-dash">Dashboard</button>
        </Link>
        </div>
      }
    </div>
    );
  }
}

export default connect(getUser)(Createquestion);
