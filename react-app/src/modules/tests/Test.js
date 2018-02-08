import React, { Component } from 'react';
import "../../App.css";
import { connect } from 'react-redux';
import getTests from "../../store/tests/selectors";
import testsActions from '../../store/tests/actions';


class Test extends Component {
  constructor(props){
    super(props);
    this.state = {
      current_textarea: ''
    }
  }

  componentDidMount() {
    if(this.props.tests.length === 0) {
      // TODO: fetch only this idea
      this.props.retrieveTests();
    }
  }

  handleInput = (event) => {
    this.setState({
      current_textarea: event.target.value
    });
    console.log(this.state.current_textarea);
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addAnswer(this.state.current_textarea, this.props.useruuid, this.props.match.params.id)
    .then((response) => {
      if(response) {
        window.location.reload()
      } else {
        this.props.history.push('/failed');
      }
    });
  }

  render() {

    const found_test = this.props.tests.find((element) => {
      return element.id===this.props.match.params.id;
    }) || [];

    return (
      <div className="test_item">
        <h1>Test our product!</h1>
        <h3>{found_test.title}</h3>
        <div>{found_test.description}</div>
        <div>{found_test.question}</div>
        <form onSubmit={this.onSubmit}>
          <textarea placeholder="Your answer" onChange={this.handleInput}>
          </textarea>
          <button type="submit">Send Answer</button>
        </form>
      </div>
    );
  }
}

export default connect(getTests, testsActions)(Test);
