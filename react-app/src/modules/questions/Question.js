import React, { Component } from 'react';
import "../../App.css";
import { connect } from 'react-redux';
import getQuestions from "../../store/questions/selectors";
import questionsActions from '../../store/questions/actions';

class Question extends Component {
  constructor(props){
    super(props);
    this.state = {
      current_input: ''
    }
  }

  componentDidMount() {
    if(this.props.questions.length === 0) {
      // TODO: fetch only this idea
      this.props.retrieveQuestions(this.props.useruuid);
    }
  }

  handleInput = (event) => {
    this.setState({
      current_input: event.target.value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addanswerquestion(this.state.current_input, this.props.useruuid, this.props.match.params.id)
    .then((response) => {
      if(response) {
        this.props.history.push('/success');
      } else {
        this.props.history.push('/failed');
      }
    });
  }

  render() {

    const found_question = this.props.questions.find((element) => {
      return element.id===this.props.match.params.id;
    }) || [];

    return (
        <div>
        <div className="idea_page_global">
          <div className="div_global_idea">
            <h1>Question details</h1>
            <div className="idea_item">
              <h3 className="mt-5">{found_question.title}</h3>
                <div className="idea_description">
                <div>{found_question.description}</div>
                <img src={found_question.avatar} className="user_pic_idea" alt="logo"/>
                <div className="mt-5">submitted by {found_question.first_name} {found_question.last_name}</div>
                </div>
              </div>
            </div>
        </div>
        <form onSubmit={this.onSubmit}>
          <div> Write your answer</div>
          <div className="question_answer">
            <textarea className="form-control formset" onChange={this.handleInput}/>
          </div>
          <button type="submit" className="btn btn-send mt-2">Send</button>
        </form>
      </div>
    );
  }
}

export default connect(getQuestions, questionsActions)(Question);
