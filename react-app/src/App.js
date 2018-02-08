import React, { Component } from 'react';
import './App.css';
import Profile from "./modules/profile/profile.js";
import Header from './modules/header/Header';
import Dashboard from './modules/dashboard/Dashboard';
import CreateIdea from "./modules/ideas/Createidea";
import Createtest from "./modules/tests/Createtest";
import Createquestion from "./modules/questions/Createquestion";
import { Route, Switch, withRouter, Redirect} from "react-router-dom";
import { connect } from 'react-redux';
import User from "./modules/user/User";
import SignOut from "./modules/user/SignOut";
import { getUserState } from "./store/user/selectors";
import ViewIdeas from "./modules/ideas/Viewideas";

class App extends Component {

  render() {
    let profile;
    if (this.props.googleUser.loggedIn
      // && !this.props.googleUser.completedProfile
      ) {
      profile = <Redirect to = "/complete-profile" />
    } else {
      profile = <div><User /></div>
    }

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/complete-profile" render={(routerProps) => <Profile {...routerProps} />} />
          <Route path="/dashboard" render={() => <Dashboard />} />
          <Route path="/createidea" render={() => <CreateIdea />} />
          <Route path="/createquestion" render={() => <Createquestion />} />
          <Route path="/createtest" render={() => <Createtest />} />
          <Route path="/viewideas" render={() => <ViewIdeas />} />
          <Route path="/sign-out" render={() => (
            this.props.googleUser.loggedIn
              ? <SignOut />
              : <Redirect to = "/" />
          )} />
          <Route render={() => profile} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(getUserState)(App));
