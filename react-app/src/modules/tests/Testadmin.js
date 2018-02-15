import React, { Component } from 'react';
import "../../App.css";
import { connect } from 'react-redux';
import getTests from "../../store/tests/selectors";
import testsActions from '../../store/tests/actions';
import { Link } from "react-router-dom";
import ReactStars from "react-stars";


class Testadmin extends Component {
  componentDidMount() {

    if(this.props.tests.length === 0) {
      // TODO: fetch only this idea
      this.props.retrieveTestsadmin();
    }
    this.props.retrieveAnswerstests(this.props.match.params.id);
  }

  render() {
    const found_test = this.props.testsadmin.find((element) => {
      return element.id===this.props.match.params.id;
    }) || [];
    let listanswers = this.props.answerstests.map((answer, index) => {
      let format_date = new Date(answer.date);
      let formated_date = format_date.getDate()+'/'+(format_date.getMonth()+1)+'/'+format_date.getFullYear();
      return (
        <div key={index} className="comment_description mb-5">
          <div className="answer">{answer.answer}</div>
          <ReactStars count={5} value={answer.rating} size={15} edit={false} color2={"#ffdf00"} />
          <span>{formated_date} {answer.first_name} {answer.last_name}</span>
        </div>
      )
    });
    let total_rating =0;
    total_rating = this.props.answerstests.map((answer, index) => {
      total_rating=total_rating+answer.rating;
      if (this.props.answerstests.length===(index+1)) {
        total_rating=total_rating/this.props.answerstests.length;
      return (
        <ReactStars key={index} count={5} value={total_rating} size={30} edit={false} color2={"#ffdf00"} />)
    }
    else return null})

    return (
      <div>
      <div>
      <div className="div_global_test">
        <div className="test_item">

          <div className="description_test_for_answer">
            <div className="vt_prdct_pict"><img src={""+found_test.picture+""} alt="product_picture" /></div>
            <div className="vt_test_title">{found_test.title}</div>
            <div className="vt_test_title">{found_test.status}</div>
            <div className="vt_test_descr">{found_test.description}</div>
            {total_rating}
            <div className="vt_test_question"> {found_test.question}</div>
          </div>
        </div>
      </div>
      <div>
        <span><form onSubmit={(e)=> {
          e.preventDefault();
          this.props.reOpentest(this.props.match.params.id).then((response) => {
            if(response) {
              window.location.reload()
            } else {
              this.props.history.push('/failed');
            }
          })
        }}>
        {found_test.status === "closed"
          ? <button className="btn dashboard_button" type="submit">Reopen Test</button>
          : null}
        </form></span>
        <span><form onSubmit={(e)=> {
          e.preventDefault();
          this.props.archiveTest(this.props.match.params.id)
          .then((response) => {
            if(response) {
              window.location.reload()
            } else {
              this.props.history.push('/failed');
            }
          })
        }}>
        {found_test.status === "open"
         ? <button className= "btn dashboard_button mt-2" type="submit">Archive Test</button>
         : null}
        </form></span>
        <Link to={'/edittest/'+this.props.match.params.id} style={{ textDecoration: 'none' }}>
        {found_test.status === "open"
         ? <button className="btn dashboard_button mt-2 mb-2">Edit test</button>
         : null}
        </Link>
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
