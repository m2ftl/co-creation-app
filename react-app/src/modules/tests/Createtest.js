import React, { Component } from 'react';
import "../../App.css";
import Createtestform from "./Createtest_form";
import Inserttest from "./actions";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import getUseruuid from "../../store/ideas/selectors"

class Createtest extends Component{
  constructor(props) {
    super(props);
    this.state = {
      testsub:false,
      testfirsttime:true
    };
  }

  submit = values => {
    // print the form values to the console

      Inserttest(values,this.props.useruuid)
      .then((response) =>
      this.setState({
        testsub: response,
        testfirsttime: false
      }));
  }

  render() {
    console.log(this.state.testfirsttime);
    return (
      <div>
      {this.state.testfirsttime &&
        <Createtestform onSubmit={this.submit} />
      }

      {this.state.testfirsttime === false && this.state.testsub &&
        <div>
        <div> Your test has been successfully created!!!! </div>
        <Link to="/dashboard">
        <button className="btn btn-dash">Dashboard</button>
        </Link>
        </div>
      }
      {this.state.testfirsttime === false && this.state.testsub === false &&
        <div>
        <div> Sorry we receive an error please try again later... </div>
        <Link to="/dashboard">
        <button className="btn btn-dash">Dashboard</button>
        </Link>
        </div>
      }
    </div>
    );
  }
}

export default connect(getUseruuid)(Createtest);
