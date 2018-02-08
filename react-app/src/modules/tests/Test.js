import React, { Component } from 'react';
import "../../App.css";
import { connect } from 'react-redux';
import getTests from "../../store/tests/selectors";
import testsActions from '../../store/tests/actions';


class Test extends Component {

  componentDidMount() {
    if(this.props.tests.length === 0) {
      // TODO: fetch only this idea
      this.props.retrieveTests();
    }
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
        <form>
          <textarea placeholder="Let us know what you think">
          </textarea>
        </form>
      </div>
    );
  }
}

export default connect(getTests, testsActions)(Test);
