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
      this.props.retrieveQuestions();
    }
  }

  handleInput = (event) => {
    this.setState({
      current_input: event.target.value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addComment(this.state.current_input, this.props.useruuid, this.props.match.params.id)
    .then((response) => {
      if(response) {
        window.location.reload()
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
      <div className="ideas_block">
        <h1>Idea details</h1>
        <div className="idea_item_display">
          <h3>{found_question.title}</h3>
          <div className="idea_description">
            <div>{found_question.description}</div>
            <span>submitted by {found_question.first_name} {found_question.last_name}</span>
          </div>
        </div>
        <form onSubmit={this.onSubmit}>
          <label>Write a comment</label>
          <input type="text" onChange={this.handleInput}/>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default connect(getQuestions, questionsActions)(Question);
