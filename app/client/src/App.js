import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import NewsBody from './components/NewsBody';
import ReadingBody from './components/ReadingBody';

class App extends Component {
  constructor() {
    super();

    this.state = { isReading: false, indexOfFeed: -1, feeds: [] };

    this.goRead = this.goRead.bind(this);
  }

  goRead(index) {
    this.setState({ isReading: true, indexOfFeed: index });
  }

  componentDidMount() {
    fetch('http://localhost:3001/feed')
      .then(res => res.json())
      .then(feedData => this.setState({ feeds: feedData.feed.entries }))
      .catch(e => console.error('Failed:', e));
  }

  render() {
    console.dir(this.state.feeds);
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        {this.state.isReading ? (
          <ReadingBody
            feeds={this.state.feeds}
            index={this.state.indexOfFeed}
          />
        ) : (
          <NewsBody feeds={this.state.feeds} goRead={this.goRead} />
        )}
        {/* <div>
          <NewsBody feeds={this.state.feeds} />
          {window.location.pathname === '/favorite' ? (
            <NewsBody />
          ) : (
            {
              this: state.users.map(user => (
                <div key={user.id}>{user.username}</div>
              ))
            }
          )}
        </div> */}
      </div>
    );
  }
}

export default App;
