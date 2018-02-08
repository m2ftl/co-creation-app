import React, { Component } from 'react';
import "../../App.css";
import { connect } from 'react-redux';
import getQuestion from "../../store/questions/selectors";
import ideasActions from '../../store/questions/actions';
import { Link } from "react-router-dom";

class ViewQuestion extends Component {

  componentDidMount() {
    this.props.retrieveQuestions();
  }

  render() {
    let listQuestions = this.props.questions.map((question, index) => {
      console.log(question);
      if(this.props.questions.length !== 0){
        return (
          <Link to={'/viewquestion/'+question.id}>
          <div className="idea_item">
            <h3><a href={"#quest"+index}>+</a> {question.title}</h3>
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
      <div className="ideas_block">
        <h1>Questions submitted</h1>
        <p className="subtitle_listIdeas">Please feel free to like and/or comment any question</p>
        {listQuestions}
      </div>
    );
  }
}

export default connect(getQuestions, questionsActions)(ViewQuestions);
