import React, { Component } from 'react';
import "../../App.css";
import { connect } from 'react-redux';
import getTests from "../../store/tests/selectors";
import testsActions from '../../store/tests/actions';
import { Link } from "react-router-dom";

class ViewTests extends Component {

  componentDidMount() {
    this.props.retrieveTests();
    console.log(this.props.tests);
  }

  render() {
    console.log(this.props.tests);
    let listTests = this.props.tests.map((test, index) => {
      console.log(test);
      if(this.props.tests.length !== 0) {
        return (
          <div>
            <h3>{test.title}</h3>
            <div>{test.description}</div>
            <div>{test.question}</div>
            <span>submitted {test.date}</span>
          </div>
        )
      } else {
      return (<div>Sorry, there is no test for the moment</div>)
    }
  });


    return (
      <div className="ideas_block">
        <h1>Tests</h1>
        <p className="subtitle_listIdeas">Test our products and let us know your opinion about it</p>
        {listTests}
      </div>
    );
  }
}

export default connect(getTests, testsActions)(ViewTests);
