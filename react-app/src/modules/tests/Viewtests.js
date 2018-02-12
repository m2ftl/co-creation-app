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
        let format_date = new Date(test.date);
        let formated_date = format_date.getDate()+'/'+(format_date.getMonth())+1+'/'+format_date.getFullYear();

        console.log(this.props.tests);
        return (
          <div className="viewtest_item_bckgrd">
            <div className="viewtest_item_content">
              <div className="product_picture">
                <img src={""+test.image_path+""} alt="product_picture" />
              </div>
              <h3>{test.title}</h3>
              <div className="viewtest_item_date">submitted: &nbsp;{formated_date}</div>
              <Link to={"/viewtest/"+test.id}>
                <div className="viewtest_item_button">Answer Test</div>
              </Link>
              <form onSubmit={(e)=> {
                e.preventDefault();
                this.props.archiveTest(test.id)}}>
              <button type="submit">Archive Test</button>
              </form>
            </div>
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
        <div className="div_glob_tests">{listTests}</div>
      </div>
    );
  }
}

export default connect(getTests, testsActions)(ViewTests);
