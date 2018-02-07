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
          <div>{idea.title}</div>
        )
      } else {
        return (
          <li>Sorry, no idea for the moment</li>
        )
      }
    });


    return (
      <div>
        {listIdeas}
      </div>
    );
  }
}

export default connect(getUseruuid)(ViewIdeas);
