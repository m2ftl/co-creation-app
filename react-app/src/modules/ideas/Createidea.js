import React, { Component } from 'react';
import "../../App.css";
import Createideaform from "./Createidea_form";
import Insertidea from "./actions";

class Createidea extends Component{

  submit = values => {
    // print the form values to the console
      Insertidea(values);
  }

  render() {
    return (
    <div>
      <Createideaform onSubmit={this.submit} />
    </div>
    )
  }
}

export default Createidea;
