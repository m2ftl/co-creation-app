import React, { Component } from 'react';
import "../../App.css";
import { connect } from 'react-redux';
import getUseruuid from "../../store/ideas/selectors"
import { retrieveIdeas } from './actions';

class ViewIdeas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas:[]
    };
  }

  componentDidMount() {
    console.log("Kikoo")
    retrieveIdeas()
    .then((response) => {
      console.log(response);
      this.setState({
        ideas: response
      });
      console.log(this.state.ideas);
    }
    );
  }

  render() {

    let listIdeas = this.state.ideas.map((idea) => {
      if(this.state.ideas.length !== 0){
        return (
          <div className="idea_item">
            <h3>{idea.title}</h3>
            <p>{idea.description}</p>
            <span>submitted by {idea.first_name} {idea.last_name}</span>
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
        <p className="italic">Please feel free to like and/or comment any idea</p>
        {listIdeas}
      </div>
    );
  }
}

export default connect(getUseruuid)(ViewIdeas);
