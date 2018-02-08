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
      if(this.props.tests.length !== 0) {
        return (
          <div className="test_item">
            <div className="product_picture">PRODUCT PICTURE</div>
            <h3>{test.title}</h3>
            <span>submitted {test.date}</span>
            <Link to={"/viewtest/"+test.id}>
              <div>Answer Test</div>
            </Link>
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
