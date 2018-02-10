import React, { Component } from 'react';
import "../../App.css";
import { connect } from 'react-redux';
import getQuestions from "../../store/questions/selectors";
import questionsActions from '../../store/questions/actions';

class Editquestion extends Component{
  constructor(props){
    super(props);
    this.state = {
      current_texttitle: '',
      current_textdescription: ''
    }
  }
    componentDidMount() {
      if(this.props.questions.length === 0) {
        // TODO: fetch only this idea
        this.props.retrieveQuestionsAdmin();
      }
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
      this.props.Inserteditquestion(this.state.current_texttitle, this.state.current_textdescription, this.props.match.params.id)
      .then((response) => {
        if(response) {
          this.props.history.push('/viewquestionadmin/'+this.props.match.params.id);
          window.location.reload()
        } else {
          this.props.history.push('/failed');
        }
      });
    }

  render() {
    let found_question = this.props.questions.find((element) => {
      return element.id===this.props.match.params.id;
    }) || [];
    return (
      <div>
      <form onSubmit={this.onSubmit}>
      <div>
        <label className="topTitle">Question Title:</label>
        <input type="text" placeholder={found_question.title} className="form-control formset" onChange={this.handleInputtitle} />
      </div>
      <label className="topTitle">Question:</label>
      <div>
          <textarea className="form-control formset" placeholder={found_question.description} onChange={this.handleInputdescription} />
      </div>
      <button type="submit" className="btn submitset" >
          Update
      </button>
      </form>
      </div>
    );
  }
}

export default connect(getQuestions,questionsActions)(Editquestion);
