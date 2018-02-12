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
      // TODO: fetch only this test
      this.props.retrieveTests();
    }
  }

  handleInput = (event) => {
    this.setState({
      current_textarea: event.target.value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addAnswerTest(this.state.current_textarea, this.props.useruuid, this.props.match.params.id)
    .then((response) => {
      if(response) {
        this.props.history.push('/success');
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
      <div className="div_global_test">
        <div className="test_item">

          <div className="description_test_for_answer">
            <div className="vt_prdct_pict"><img src={""+found_test.image_path+""} alt="product_picture" /></div>
            <div className="vt_test_title">{found_test.title}</div>
            <div className="vt_test_descr">{found_test.description}</div>
            <div className="vt_test_question">> {found_test.question}</div>
          </div>

          <div className="answer_test">
            <form onSubmit={this.onSubmit}>
              <div className="label_test_answer">Write your answer:</div>
              <div><textarea onChange={this.handleInput}></textarea></div>
              <div><button type="submit" className="btn">Send</button></div>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default connect(getTests, testsActions)(Test);
