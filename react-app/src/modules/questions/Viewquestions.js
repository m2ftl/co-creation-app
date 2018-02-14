import React, { Component } from 'react';
import "../../App.css";
import { connect } from 'react-redux';
import getQuestions from "../../store/questions/selectors";
import questionsActions from '../../store/questions/actions';
import { Link } from "react-router-dom";

class ViewQuestions extends Component {

  componentDidMount() {
    this.props.retrieveQuestions(this.props.useruuid);
  }

  render() {
    let listQuestions = this.props.questions.map((question, index) => {

      let format_date = new Date(question.date);
      let formated_date = format_date.getDate()+'/'+(format_date.getMonth()+1)+'/'+format_date.getFullYear();

      if(this.props.questions.length !== 0){
        return (
          <Link className="link" key={index} to={'/viewquestion/'+question.id}>
          <div className="question_item">
            <h3>{question.title}</h3>
            <div>{formated_date}</div>
            <div id={"quest"+index} className="idea_description">
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
      <div className="list_questions_block">
        <h1>Questions submitted</h1>
        <p className="subtitle_listIdeas">We need your answer to develop <Link to={"/c25a5bc5-dd78-4820-9a03-c71bbd4a7690"}>better</Link> products</p>
        {listQuestions}
      </div>
    );
  }
}

export default connect(getQuestions, questionsActions)(ViewQuestions);
