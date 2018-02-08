import React, { Component } from 'react';
import "../../App.css";
import { connect } from 'react-redux';
import getIdeas from "../../store/ideas/selectors";
import ideasActions from '../../store/ideas/actions';


class Idea extends Component {
  constructor(props){
    super(props);
    this.state = {
      current_input: ''
    }
  }

  componentDidMount() {
    if(this.props.ideas.length === 0) {
      // TODO: fetch only this idea
      this.props.retrieveIdeas();
    }
    this.props.retrieveComments(this.props.match.params.id);
  }

  componentWillMount() {
    this.props.resetComments();
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

    let listComments = this.props.comments.map((comment, index) => {
      return (
        <div className="comment_description">
          <div>{comment.comment}</div>
          <span>submitted by {comment.first_name} {comment.last_name}</span>
        </div>
      )
    });


    const found_comment = this.props.ideas.find((element) => {
      return element.id===this.props.match.params.id;
    }) || [];

    return (
      <div className="ideas_block">
        <h1>Idea details</h1>
        <div className="idea_item_display">
          <h3>{found_comment.title}</h3>
          <div className="idea_description">
            <div>{found_comment.description}</div>
            <span>submitted by {found_comment.first_name} {found_comment.last_name}</span>
          </div>
        </div>
        <form onSubmit={this.onSubmit}>
          <label>Write a comment</label>
          <input type="text" onChange={this.handleInput}/>
          <button type="submit">Send</button>
        </form>
        {this.props.comments.length !== 0
          ? listComments
          : null
        }
      </div>
    );
  }
}

export default connect(getIdeas, ideasActions)(Idea);
