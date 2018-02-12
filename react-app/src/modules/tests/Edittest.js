import React, { Component } from 'react';
import "../../App.css";
import { connect } from 'react-redux';
import getTests from "../../store/tests/selectors";
import testsActions from '../../store/tests/actions';

class Edittest extends Component{
  constructor(props){
    super(props);
    this.state = {
      current_texttitle: null,
      current_textdescription: null,
      current_textquestion: null,
      current_textpicture: null
    }
  }
    componentDidMount() {
      if(this.props.tests.length === 0) {
        // TODO: fetch only this idea
        this.props.retrieveTestsadmin();
      }
      let found_test = this.props.tests.find((element) => {
        return element.id===this.props.match.params.id;
      }) || [];
      this.setState({
        current_texttitle: found_test.title,
        current_textdescription: found_test.description,
        current_textquestion: found_test.question,
        current_textpicture: found_test.picture
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

    handleInputpicture = (event) => {
      this.setState({
        current_textpicture: event.target.value
      });
    }

    handleInputquestion = (event) => {
      this.setState({
        current_textquestion: event.target.value
      });
    }

    onSubmit = (event) => {
      event.preventDefault();
      console.log("state",this.state);
      this.props.Insertedittest(this.state.current_texttitle, this.state.current_textdescription,this.state.current_textpicture,this.state.current_textquestion,this.props.match.params.id)
      .then((response) => {
        if(response) {
          window.location.reload()
          this.props.history.push('/viewtestadmin/'+this.props.match.params.id);
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
        <label className="topTitle">Test Title:</label>
        <input type="text" value={this.state.current_texttitle} className="form-control formset" onChange={this.handleInputtitle} />
      </div>
      <div>
          <label className="topTitle">Test Picture:</label>
          <input type="text" className="form-control formset" value={this.state.current_textpicture} onChange={this.handleInputpicture} />
      </div>
      <div>
          <label className="topTitle">Test Description:</label>
          <textarea className="form-control formset" value={this.state.current_textdescription} onChange={this.handleInputdescription} />
      </div>
      <div>
          <label className="topTitle">Test waiting feedback:</label>
          <textarea className="form-control formset" value={this.state.current_textquestion} onChange={this.handleInputquestion} />
      </div>
      <button type="submit" className="btn submitset" >
          Update
      </button>
      </form>
      </div>
    );
  }
}

export default connect(getTests,testsActions)(Edittest);
