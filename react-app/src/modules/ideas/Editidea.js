import React, { Component } from 'react';
import "../../App.css";
import { connect } from 'react-redux';
import getIdeas from "../../store/ideas/selectors";
import ideasActions from '../../store/ideas/actions';

class Editidea extends Component{
  constructor(props){
    super(props);
    this.state = {
      current_texttitle: null,
      current_textdescription: null
    }
  }
    componentDidMount() {
      if(this.props.ideas.length === 0) {
        // TODO: fetch only this idea
        this.props.retrieveideas();
      }
      let found_test = this.props.ideas.find((element) => {
        return element.id===this.props.match.params.id;
      }) || [];
      this.setState({
        current_texttitle: found_test.title,
        current_textdescription: found_test.description
      });
    }

    handleInputtitle = (event) => {
      this.setState({
        current_texttitle: event.target.value
      });
    }

    handleInputdescription = (event) => {
      this.setState({
        current_textdescription: event.target.value
      });
    }

    onSubmit = (event) => {
      event.preventDefault();
      this.props.Inserteditidea(this.state.current_texttitle, this.state.current_textdescription,this.props.match.params.id)
      .then((response) => {
        if(response) {
          window.location.reload()
          this.props.history.push('/viewidea/'+this.props.match.params.id);
        } else {
          this.props.history.push('/failed');
        }
      });
    }

  render() {

    return (
      <div>
      <form onSubmit={this.onSubmit}>
      <div>
        <label className="topTitle">Idea Title:</label>
        <input type="text" value={this.state.current_texttitle} className="form-control formset" onChange={this.handleInputtitle} />
      </div>
      <div>
          <label className="topTitle">Idea Description:</label>
          <textarea className="form-control formset" value={this.state.current_textdescription} onChange={this.handleInputdescription} />
      </div>
      <button type="submit" className="btn submitset dashboard_button" >
          Update
      </button>
      </form>
      </div>
    );
  }
}

export default connect(getIdeas,ideasActions)(Editidea);
