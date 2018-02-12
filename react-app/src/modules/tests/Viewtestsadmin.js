import React, { Component } from 'react';
import "../../App.css";
import { connect } from 'react-redux';
import getTests from "../../store/tests/selectors";
import testsActions from '../../store/tests/actions';
import { Link } from "react-router-dom";

class ViewTestsadmin extends Component {

  componentDidMount() {
    console.log("toto");
    this.props.retrieveTestsadmin();
  }

  render() {
    console.log("testa",this.props.tests);
    let listTestsadmin = this.props.tests.map((test, index) => {
      if(this.props.tests.length !== 0) {
        let format_date = new Date(test.date);
        let formated_date = format_date.getDate()+'/'+(format_date.getMonth()+1)+'/'+format_date.getFullYear();

        console.log(this.props.tests);
        return (
          <div className="viewtest_item_bckgrd">
            <div className="viewtest_item_content">
              <div className="product_picture">
                <img src={""+test.picture+""} alt="product_picture" />
              </div>
              <h3>{test.title}</h3>
              <div className="viewtest_item_date">submitted: &nbsp;{formated_date}</div>
              <div className="viewtest_item_date">{test.status}</div>
              <Link to={"/viewtestadmin/"+test.id}>
                <div className="viewtest_item_button">Test Report</div>
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
        <h1>Tests Reports</h1>
        <div className="div_glob_tests">{listTestsadmin}</div>
      </div>
    );
  }
}

export default connect(getTests, testsActions)(ViewTestsadmin);
