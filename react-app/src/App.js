import React, { Component } from 'react';
import './App.css';
import Profile from "./modules/profile/profile.js";
import Header from './modules/header/Header';
import Dashboard from './modules/dashboard/Dashboard';
import CreateIdea from "./modules/ideas/Createidea";
import { Route, Switch, withRouter } from "react-router-dom";
import Insertidea from "./modules/ideas/actions";
import { connect } from 'react-redux';

class App extends Component {

  submit = values => {
    // print the form values to the console
      Insertidea(values);
  }

  render() {
    return (
      <div className="App">
      <Switch>
      <Route path="/profile" render={() => <Profile />} />
      <Route path="/dashboard" render={() => <Dashboard />} />
      <Route path="/createidea" render={() => <CreateIdea onSubmit={this.submit}/>} />
      <Route render={() =>
          <div>
          <Header />
          </div>
      } />
      </Switch>
      </div>
    );
  }
}

export default withRouter(App);
