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
import SignOut from "./modules/user/SignOut"
import ViewIdeas from "./modules/ideas/Viewideas";
import Idea from "./modules/ideas/Idea";
import ViewQuestions from "./modules/questions/Viewquestions";
import Question from "./modules/questions/Question";
import ViewTests from "./modules/tests/Viewtests";
import {getUser} from "./store/profile/selectors";
import Success from './modules/feedback/Success';
import Failed from './modules/feedback/Failed';


class App extends Component {

  render() {
    let profile;
    if (this.props.user.loggedIn
      && !this.props.user.completedProfile
      ) {
      profile = <Redirect to = "/complete-profile" />
    } else if (this.props.user.loggedIn
      && this.props.user.completedProfile
      ){
      profile = <Redirect to = "/dashboard" />
    }
      else{
        profile= <User />
      }

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/complete-profile" render={(routerProps) => <Profile {...routerProps} completedProfile={this.props.user.completedProfile}/>} />
          <Route path="/dashboard" render={() => <Dashboard />} />
          <Route path="/createidea" render={() => <CreateIdea />} />
          <Route path="/createquestion" render={() => <Createquestion />} />
          <Route path="/createtest" render={() => <Createtest />} />
          <Route path="/viewideas" render={() => <ViewIdeas />} />
          <Route path="/viewidea/:id" render={(routerProps) => <Idea {...routerProps}/>} />
          <Route path="/viewquestions" render={() => <ViewQuestions />} />
          <Route path="/viewquestion/:id" render={(routerProps) => <Question {...routerProps}/>} />
          <Route path="/success" render={() => <Success />} />
          <Route path="/failed" render={() => <Failed />} />
          <Route path="/viewtests" render={() => <ViewTests />} />
          <Route path="/sign-out" render={() => (
            this.props.user.loggedIn && !this.props.user.completedProfile
              ? <SignOut />
              : <Redirect to = "/" />
          )} />
          <Route render={() => profile} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(getUser)(App));
