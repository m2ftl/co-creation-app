import React, { Component } from 'react';
import "../../App.css";
import { connect } from 'react-redux';
import getIdeas from "../../store/ideas/selectors";
import ideasActions from '../../store/ideas/actions';
import { Link } from "react-router-dom";

class ViewIdeas extends Component {

  componentDidMount() {
    this.props.retrieveIdeas();
  }

  render() {
    let listIdeas = this.props.ideas.map((idea, index) => {
      console.log(idea);
      if(this.props.ideas.length !== 0){
        return (
          <Link key={index} to={'/viewidea/'+idea.id}>
            <div className="list_ideas_item">
              <h3>+ {idea.title}</h3>
              <div className="idea_description">
                <div>{idea.description}</div>
                <span>submitted by {idea.first_name} {idea.last_name}</span>
              </div>
            </div>
          </Link>
        )
      } else {
        return (
          <div>Sorry, there is no idea for the moment</div>
        )
      }
    });


    return (
      <div className="list_ideas_block">
        <h1>Ideas submitted</h1>
        <p className="subtitle_listIdeas">Please feel free to like and/or comment any idea</p>
        {listIdeas}
      </div>
    );
  }
}

export default connect(getIdeas, ideasActions)(ViewIdeas);
