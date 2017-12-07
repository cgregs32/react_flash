import React, { Component } from 'react';
import './App.css';
import CardApp from './CardApp'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Flash</h1>
        </header>
        <CardApp/>
      </div>
    );
  }
}

export default App;
