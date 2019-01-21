import React, { Component } from 'react';
import './App.css';
import Login from './components/login';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-container">
          <Login />
        </div>
      </div>
    );
  }
}

export default App;
