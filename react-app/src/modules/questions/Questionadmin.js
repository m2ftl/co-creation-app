import React, { Component } from 'react';
import "../../App.css";
import { connect } from 'react-redux';
import getQuestions from "../../store/questions/selectors";
import questionsActions from '../../store/questions/actions';

class Questionadmin extends Component {

  componentDidMount() {
    if(this.props.questions.length === 0) {
      // TODO: fetch only this idea
      this.props.retrieveQuestions();
    }
    this.props.retrieveAnswers(this.props.match.params.id);
  }

  componentWillMount() {
    this.props.resetAnswers();
  }


  render() {

    let listComments = this.props.answers.map((answer, index) => {
      return (
        <div className="comment_description">
          <div>{answer.answer}</div>
          <span>submitted by {answer.first_name} {answer.last_name}</span>
        </div>
      )
    });

    const found_question = this.props.questions.find((element) => {
      return element.id===this.props.match.params.id;
    }) || [];

    return (
      <div className="ideas_block">
        <h1>Question details</h1>
        <div className="idea_item_display">
          <h3>{found_question.title}</h3>
          <div className="idea_description">
            <div>{found_question.description}</div>
            <span>submitted by {found_question.first_name} {found_question.last_name}</span>
          </div>
        </div>
        {this.props.answers.length !== 0
          ? listComments
          : null
        }
      </div>
    );
  }
}

export default connect(getQuestions, questionsActions)(Questionadmin);
