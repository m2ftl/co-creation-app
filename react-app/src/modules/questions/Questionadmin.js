import React, { Component } from 'react';
import "../../App.css";
import { connect } from 'react-redux';
import getQuestions from "../../store/questions/selectors";
import questionsActions from '../../store/questions/actions';
import { Link } from "react-router-dom";


class Questionadmin extends Component {

  componentDidMount() {
    if(this.props.questions.length === 0) {
      // TODO: fetch only this idea
      this.props.retrieveQuestionsAdmin();
    }
    this.props.retrieveAnswers(this.props.match.params.id);
    this.props.retrieveTopics(this.props.match.params.id);
  }

  componentWillMount() {
    this.props.resetAnswers();
    this.props.resetTopics();
  }

  retrieveDate(date) {
    let format_date = new Date(date);
    if (typeof date !== "undefined")  {
      return format_date.getDate()+'/'+(format_date.getMonth()+1)+'/'+format_date.getFullYear();}
    else {
      return ""}
  }

  render() {

    let listComments = this.props.answers.map((answer, index) => {
      let format_date = new Date(answer.date);
      let formated_date = format_date.getDate()+'/'+(format_date.getMonth()+1)+'/'+format_date.getFullYear();

      return (
        <div className="comment_description">
          <div className="answer">{answer.answer}</div>
          <span>{formated_date} {answer.first_name} {answer.last_name}</span>
        </div>
      )
    });

    let listTopics = this.props.topics.map((topic, index) => {
      return (
          <div key={index} >{topic.topic}</div>
      )
    });

    let found_question = this.props.questions.find((element) => {
      return element.id===this.props.match.params.id;
    }) || [];

    let formated_date =this.retrieveDate(found_question.date);
    return (
      <div className="list_ideas_block">
        <h1>Question details</h1>
        <div className="question_item_display">
          <h3>{found_question.title}</h3>
          <div>{formated_date} {found_question.status}</div>
          <div className="idea_description">
            <div>{found_question.description}</div>
            <span>submitted by {found_question.first_name} {found_question.last_name}</span>
          </div>
        </div>
        <span><form onSubmit={(e)=> {
          e.preventDefault();
          this.props.reOpenQuestion(this.props.match.params.id).then((response) => {
            if(response) {
              window.location.reload()
            } else {
              this.props.history.push('/failed');
            }
          })
        }}>
        {found_question.status === "closed"
        ? <button className="btn dashboard_button" type="submit">reopen Question</button>
        : null
      }
        </form></span>
        <span><form onSubmit={(e)=> {
          e.preventDefault();
          this.props.archiveQuestion(this.props.match.params.id)
          .then((response) => {
            if(response) {
              window.location.reload()
            } else {
              this.props.history.push('/failed');
            }
          })
        }}>
        {found_question.status === "open"
        ? <button className= "btn dashboard_button mt-2" type="submit">Archive Question</button>
        : null
      }
        </form></span>
        {found_question.status === "open"
        ? <Link to={'/editquestionadmin/'+this.props.match.params.id} style={{ textDecoration: 'none' }}>
        <button className="btn dashboard_button mt-2 mb-2">Edit question</button>
        </Link>
        : null
      }
        {this.props.topics.length !== 0
          ?
          <div className="list_ideas_block">
          <div className="topic_item">
          {listTopics}
          </div>
          </div>
          : null
        }
        {found_question.status === "open"
        ? <Link to={'/editquestiontopicsadmin/'+this.props.match.params.id} style={{ textDecoration: 'none' }}>
          <button className="btn dashboard_button mt-2 mb-2">Edit question topics</button>
          </Link>
        : null
      }
        {this.props.answers.length !== 0
          ? listComments
          : null
        }
      </div>
    );
  }
}

export default connect(getQuestions, questionsActions)(Questionadmin);
