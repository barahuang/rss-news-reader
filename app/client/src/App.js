import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Newsbody from './components/Newsbody';
// import Readingbody from './components/Readingbody';

class App extends Component {
  state = { users: [] };

  componentDidMount() {
    fetch('https://localhost:3001/users')
      // fetch('https://baconipsum.com/api/?type=meat-and-filler')
      .then(users => console.log(users.json()))
      .catch(e => console.log(e));
  }

  render() {
    return (
      <div className="App">
        {/* {this.state.users.map(user => (
          <div key={user.id}>{user.username}</div>
        ))}{' '} */}

        <div>
          <Header />
        </div>
        <div>
          <Newsbody />
          {/* {window.location.pathname === '/favorite' ? (
            <Newsbody />
          ) : (
            {
              this: state.users.map(user => (
                <div key={user.id}>{user.username}</div>
              ))
            }
          )} */}
        </div>
      </div>
    );
  }
}

export default App;
