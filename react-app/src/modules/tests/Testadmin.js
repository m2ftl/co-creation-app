import React, { Component } from 'react';
import "../../App.css";
import { connect } from 'react-redux';
import getTests from "../../store/tests/selectors";
import testsActions from '../../store/tests/actions';


class Testadmin extends Component {
  componentDidMount() {
    if(this.props.tests.length === 0) {
      // TODO: fetch only this test
      this.props.retrieveTests();
    }
    this.props.retrieveAnswerstests(this.props.match.params.id);
  }

  render() {

    const found_test = this.props.tests.find((element) => {
      return element.id===this.props.match.params.id;
    }) || [];

    let listanswers = this.props.answerstests.map((answer, index) => {
      let format_date = new Date(answer.date);
      let formated_date = format_date.getDate()+'/'+(format_date.getMonth()+1)+'/'+format_date.getFullYear();

      return (
        <div className="comment_description mb-5">
          <div>{answer.answer}</div>
          <div>{formated_date}</div>
          <span>submitted by {answer.first_name} {answer.last_name}</span>
        </div>
      )
    });

    return (
      <div>
      <div className="div_global_test">
        <div className="test_item">

          <div className="description_test_for_answer">
            <div className="vt_prdct_pict"><img src={""+found_test.image_path+""} alt="product_picture" /></div>
            <div className="vt_test_title">{found_test.title}</div>
            <div className="vt_test_descr">{found_test.description}</div>
            <div className="vt_test_question">> {found_test.question}</div>
          </div>
        </div>
      </div>

          {this.props.answerstests.length !== 0
            ? listanswers
            : null
          }

      </div>
    );
  }
}

export default connect(getTests, testsActions)(Testadmin);
