import React, { Component } from 'react';
import "../../App.css";
import { connect } from 'react-redux';
import getUser from "../../store/profile/selectors"
import { retrieveIdeas } from './actions';


class ViewIdeas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas:[]
    };
  }

  componentDidMount() {
    retrieveIdeas()
    .then((response) => {
      this.setState({
        ideas: response
      });
    }
    );
  }

  render() {

    let listIdeas = this.state.ideas.map((idea, index) => {
      if(this.state.ideas.length !== 0){
        return (
          <div className="idea_item">
            <h3><a href={"#quest"+index}>+</a> {idea.title}</h3>
            <div id={"quest"+index} className="idea_description">
              <div>{idea.description}</div>
              <span>submitted by {idea.first_name} {idea.last_name}</span>
            </div>
          </div>
        )
      } else {
        return (
          <div>Sorry, there is no idea for the moment</div>
        )
      }
    });


    return (
      <div className="ideas_block">
        <h1>Ideas submitted</h1>
        <p className="subtitle_listIdeas">Please feel free to like and/or comment any idea</p>
        {listIdeas}
      </div>
    );
  }
}

export default connect(getUser)(ViewIdeas);
