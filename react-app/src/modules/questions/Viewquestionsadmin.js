import React, { Component } from 'react';
import "../../App.css";
import { connect } from 'react-redux';
import getQuestions from "../../store/questions/selectors";
import questionsActions from '../../store/questions/actions';
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class ViewQuestionsadmin extends Component {

  componentDidMount() {
    this.props.retrieveQuestionsAdmin();
  }

  render() {


    let listQuestionsOpened = this.props.questions.map((question, index) => {
      let format_date = new Date(question.date);
      let formated_date = format_date.getDate()+'/'+(format_date.getMonth()+1)+'/'+format_date.getFullYear();

      if(this.props.questions.length !== 0 && question.status === "open"){
        return (
          <Link className="link" key={index} to={'/viewquestionadmin/'+question.id} style={{ textDecoration: 'none' }}>
          <div className="question_item">
            <h3> {question.title}</h3>
            <div>{formated_date}</div>
            <div className="idea_description">
              <div>{question.description}</div>
              <span>submitted by {question.first_name} {question.last_name}</span>
            </div>
          </div>
          </Link>
        )
      } else {return <div/>}
    });

    let listQuestionsClosed = this.props.questions.map((question, index) => {
      let format_date = new Date(question.date);
      let formated_date = format_date.getDate()+'/'+(format_date.getMonth()+1)+'/'+format_date.getFullYear();

      if(this.props.questions.length !== 0 && question.status === "closed"){
        return (
          <Link className="link" key={index} to={'/viewquestionadmin/'+question.id} style={{ textDecoration: 'none' }}>
          <div className="question_item">
            <h3> {question.title}</h3>
            <div>{formated_date}</div>
            <div className="idea_description">
              <div>{question.description}</div>
              <span>submitted by {question.first_name} {question.last_name}</span>
            </div>
          </div>
          </Link>
        )
      } else {return <div/>}
    });

    return (
      <div className="list_ideas_block">
        <h1>Questions submitted</h1>
        <p className="subtitle_listIdeas">We need your answer to develop better products</p>
          <Tabs>
            <TabList>
              <Tab>Opened Questions</Tab>
              <Tab>Closed Questions</Tab>
            </TabList>
            <TabPanel>{listQuestionsOpened}</TabPanel>
            <TabPanel>{listQuestionsClosed}</TabPanel>
          </Tabs>

      </div>
    );
  }
}

export default connect(getQuestions, questionsActions)(ViewQuestionsadmin);
