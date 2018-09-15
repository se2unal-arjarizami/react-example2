import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import {Link} from 'react-router-dom';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Link to = '/dogsList'>Dogs List</Link>
          <Link to = '/authorsCreation'>Author Creation</Link>
        </header>
      </div>
    );
  }
}

export default App;
