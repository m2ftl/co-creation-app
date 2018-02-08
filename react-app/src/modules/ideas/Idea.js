import React, { Component } from 'react';
import "../../App.css";
import { connect } from 'react-redux';
import getIdeas from "../../store/ideas/selectors";
import ideasActions from '../../store/ideas/actions';


class Idea extends Component {

  render() {
    const found = this.props.ideas.find( (element) => {
      return element.id===this.props.match.params.id;
    });
    console.log(found);
    return (
      <div className="ideas_block">
        <h1>Idea details</h1>
        <div className="idea_item_display">
          <h3>{found.title}</h3>
          <div className="idea_description">
            <div>{found.description}</div>
            <span>submitted by {found.first_name} {found.last_name}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(getIdeas, ideasActions)(Idea);
