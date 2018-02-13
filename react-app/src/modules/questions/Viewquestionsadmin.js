import React, { Component } from 'react';
import "../../App.css";
import { connect } from 'react-redux';
import getQuestions from "../../store/questions/selectors";
import questionsActions from '../../store/questions/actions';
import { Link } from "react-router-dom";

class ViewQuestionsadmin extends Component {

  componentDidMount() {
    this.props.retrieveQuestionsAdmin();
  }

  render() {


    let listQuestions = this.props.questions.map((question, index) => {
      let format_date = new Date(question.date);
      let formated_date = format_date.getDate()+'/'+(format_date.getMonth()+1)+'/'+format_date.getFullYear();

      if(this.props.questions.length !== 0){
        return (
          <Link key={index} to={'/viewquestionadmin/'+question.id}>
          <div className="question_item">
            <h3> {question.title}</h3>
            <div>{formated_date} {question.status}</div>
            <div className="idea_description">
              <div>{question.description}</div>
              <span>submitted by {question.first_name} {question.last_name}</span>
            </div>
          </div>
          </Link>
        )
      } else {
        return (
          <div>Sorry, there is no question for the moment</div>
        )
      }
    });


    return (
      <div className="list_ideas_block">
        <h1>Questions submitted</h1>
        <p className="subtitle_listIdeas">We need your answer to develop better products</p>
        {listQuestions}
      </div>
    );
  }
}

export default connect(getQuestions, questionsActions)(ViewQuestionsadmin);
