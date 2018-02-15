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

    let found_question_date= new Date(found_question.date);
    let question_date = found_question_date.getDate()+'/'+(found_question_date.getMonth()+1)+'/'+found_question_date.getFullYear();

    return (
        <div className="idea_page_global">
        <h1>Question details</h1>
        <div className="div_global_idea">
          <div className="idea_item">
            <div className="idea_item_details">
              <div className="idea_item_title">{found_question.title}</div>
              <div className="idea_item_description">{found_question.description}</div>
              <img src={found_question.avatar} className="user_pic_idea" alt="logo"/>
              <div className="idea_description_owner"> {question_date} - {found_question.first_name} {found_question.last_name}</div>
            </div>
            <div className="question_background_picture">
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
