import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Newsbody from './components/Newsbody';
import Readingbody from './components/Readingbody';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <div>
          {window.location.pathname === '/favorite' ? (
            <Readingbody />
          ) : (
            <Newsbody />
          )}
        </div>
      </div>
    );
  }
}

export default App;
