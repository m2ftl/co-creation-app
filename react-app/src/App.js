import React, { Component } from 'react';
import './App.css';
import Profile from "./modules/profile/profile.js";
import Header from './modules/header/Header';
import Dashboard from './modules/dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Profile />
        <Dashboard />
      </div>
    );
  }
}

export default App;
