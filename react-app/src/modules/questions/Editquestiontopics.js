import React, { Component } from 'react';
import "../../App.css";
import { connect } from 'react-redux';
import getQuestions from "../../store/questions/selectors";
import questionsActions from '../../store/questions/actions';

class Editquestion extends Component{
  constructor(props) {
  super(props);
  this.state = {
    rain: true,
    cold: true,
    mild: true,
    sunny: true,
    category1: true,
    category2: true,
    category3: true,
    category4: true,
    category5: true,
    category6: true,
    beginner: true,
    advanced: true,
    expert: true
  };

  this.handleInputChange = this.handleInputChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
     event.preventDefault();
     this.props.Inserteditquestiontopics(this.state, this.props.match.params.id)
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
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <label  className="topTitle" >Select the level of destination</label>
      <div>
        <label className="ml-5">Beginner:<input name="beginner" value="this.state.beginner" type="checkbox" checked={this.state.beginner} onChange={this.handleInputChange}/></label>
        <label className="ml-5">Advanced:<input name="advanced" value="this.state.advanced" type="checkbox" checked={this.state.advanced} onChange={this.handleInputChange}/></label>
        <label className="ml-5">Expert:<input name="expert" value="this.state.expert" type="checkbox" checked={this.state.expert} onChange={this.handleInputChange}/></label>
      </div>
      <label  className="topTitle" >Select the index of destination</label>
      <div>
        <label className="ml-5"> Category 1: to 4.4<input name="category1" value="this.state.category1" type="checkbox" checked={this.state.category1} onChange={this.handleInputChange}/></label>
        <label className="ml-5">Category 2: from 4.4 to 11.4<input name="category2" value="this.state.category2" type="checkbox" checked={this.state.category2} onChange={this.handleInputChange}/></label>
        <label className="ml-5">Category 3: from 11.4 to 18.4<input name="category3" value="this.state.category3" type="checkbox" checked={this.state.category3} onChange={this.handleInputChange}/></label>
        <label className="ml-5">Category 4: from 18.4 to 26.4<input name="category4" value="this.state.category4" type="checkbox" checked={this.state.category4} onChange={this.handleInputChange}/></label>
        <label className="ml-5">Category 5: from 26.4 to 36<input name="category5" value="this.state.category5" type="checkbox" checked={this.state.category5} onChange={this.handleInputChange}/></label>
        <label className="ml-5">Category 6: from 36 to 54<input name="category6" value="this.state.category6" type="checkbox" checked={this.state.category6} onChange={this.handleInputChange}/></label>
      </div>
      <label  className="topTitle" >Select the weather of destination</label>
      <div>
        <label className="ml-5">Rain:<input name="rain" value="this.state.rain" type="checkbox" checked={this.state.rain} onChange={this.handleInputChange}/></label>
        <label className="ml-5">Cold:<input name="cold" value="this.state.cold" type="checkbox" checked={this.state.cold} onChange={this.handleInputChange}/></label>
        <label className="ml-5">Mild:<input name="mild" value="this.state.mild" type="checkbox" checked={this.state.mild} onChange={this.handleInputChange}/></label>
        <label className="ml-5">Sunny:<input name="sunny" value="this.state.sunny" type="checkbox" checked={this.state.sunny} onChange={this.handleInputChange}/></label>
      </div>
      <input className="btn" type="submit" value="Submit" />
    </form>
      </div>
    );
  }
}

export default connect(getQuestions,questionsActions)(Editquestion);
