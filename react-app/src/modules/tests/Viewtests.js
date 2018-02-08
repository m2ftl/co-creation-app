import React, { Component } from 'react';
import "../../App.css";
import { connect } from 'react-redux';
import getTests from "../../store/tests/selectors";
import testsActions from '../../store/tests/actions';
import { Link } from "react-router-dom";

class ViewTests extends Component {

  componentDidMount() {
    this.props.retrieveTests();
  }

  render() {
    let listTests = this.props.tests.map((test, index) => {
      console.log(test);
      if(this.props.tests.length !== 0){
        return (
          <Link to={'/viewtest/'+test.id}>
          <div className="idea_item">
            <h3><a href={"#quest"+index}>+</a> {test.title}</h3>
            <div id={"quest"+index} className="idea_description">
              <div>{test.description}</div>
              <span>submitted by {test.first_name} {test.last_name}</span>
            </div>
          </div>
          </Link>
        )
      } else {
        return (
          <div>Sorry, there is no test for the moment</div>
        )
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
