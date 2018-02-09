import React, { Component } from 'react';
import "../../App.css";
import { connect } from 'react-redux';
import getQuestions from "../../store/questions/selectors";
import questionsActions from '../../store/questions/actions';

class Editquestion extends Component{
    onSubmit = (event) => {
      event.preventDefault();
      console.log(event);
      this.props.history.push('/viewquestionadmin/'+this.props.match.params.id);
    }

  render() {
    return (
      <div>
      <form onSubmit={this.onSubmit}>
      <label  className="topTitle" >Select the level of destination</label>
      <div>
      <label> Beginner </label>
      <input name="topic.Beginner" value="Beginner" type="checkbox" />
      <label className="ml-5"> Advanced </label>
      <input name="topic.Advanced" value="Advanced" type="checkbox" />
      <label className="ml-5"> Expert </label>
      <input name="topic.Expert" value="Expert" type="checkbox" />
      </div>
      <label  className="topTitle" >Select the index of destination</label>
      <div>
      <label> Category 1: to 4.4</label>
      <input name="topic.Category1" value="Category1" type="checkbox"  />
      <label className="ml-5"> Category 2: from 4.4 to 11.4 </label>
      <input name="topic.Category2" value="Category2" type="checkbox"  />
      <label className="ml-5"> Category 3: from 11.4 to 18.4 </label>
      <input name="topic.Category3" value="Category 3" type="checkbox"  />
      <label className="ml-5"> Category 4: from 18.4 to 26.4 </label>
      <input name="topic.Category4" value="Category4" type="checkbox"  />
      <label className="ml-5"> Category 5: from 26.4 to 36 </label>
      <input name="topic.Category5" value="Category5" type="checkbox"  />
      <label className="ml-5"> Category 6: from 36 to 54 </label>
      <input name="topic.Category6" value="Category6" type="checkbox"  />
      </div>
      <label  className="topTitle" >Select the weather of destination</label>
      <div>
      <label> Rain </label>
      <input name="topic.Rain" value="Rain" type="checkbox"  />
      <label className="ml-5"> Cold </label>
      <input name="topic.Cold" value="Cold" type="checkbox"  />
      <label className="ml-5"> Mild </label>
      <input name="topic.Mild" value="Mild" type="checkbox"  />
      <label className="ml-5"> Sunny </label>
      <input name="topic.Sunny" value="Sunny" type="checkbox"  />
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
