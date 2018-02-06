import React, { Component } from 'react';
import './App.css';
import Profile from "./modules/profile/profile.js";
import Header from './modules/header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile />
        <Header />
      </div>
    );
  }
}

export default App;
