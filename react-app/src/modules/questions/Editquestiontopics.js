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
      <input name="topic.beginner" value="beginner" type="checkbox" />
      <label className="ml-5"> Advanced </label>
      <input name="topic.advanced" value="advanced" type="checkbox" />
      <label className="ml-5"> Expert </label>
      <input name="topic.expert" value="expert" type="checkbox" />
      </div>
      <label  className="topTitle" >Select the index of destination</label>
      <div>
      <label> Category 1: to 4.4</label>
      <input name="topic.category1" value="category1" type="checkbox"  />
      <label className="ml-5"> Category 2: from 4.4 to 11.4 </label>
      <input name="topic.category2" value="category2" type="checkbox"  />
      <label className="ml-5"> Category 3: from 11.4 to 18.4 </label>
      <input name="topic.category3" value="category 3" type="checkbox"  />
      <label className="ml-5"> Category 4: from 18.4 to 26.4 </label>
      <input name="topic.category4" value="category4" type="checkbox"  />
      <label className="ml-5"> Category 5: from 26.4 to 36 </label>
      <input name="topic.category5" value="category5" type="checkbox"  />
      <label className="ml-5"> Category 6: from 36 to 54 </label>
      <input name="topic.category6" value="category6" type="checkbox"  />
      </div>
      <label  className="topTitle" >Select the weather of destination</label>
      <div>
      <label> Rain </label>
      <input name="topic.rain" value="rain" type="checkbox"  />
      <label className="ml-5"> Cold </label>
      <input name="topic.cold" value="cold" type="checkbox"  />
      <label className="ml-5"> Mild </label>
      <input name="topic.mild" value="mild" type="checkbox"  />
      <label className="ml-5"> Sunny </label>
      <input name="topic.sunny" value="sunny" type="checkbox"  />
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
