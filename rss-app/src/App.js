import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <div>
          {window.location.pathname === '/favorite'
            ? 'Favorite here'
            : 'News here'}
        </div>
      </div>
    );
  }
}

export default App;
