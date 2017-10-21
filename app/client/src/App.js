import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NewsBody from './components/NewsBody';
import ReadingBody from './components/ReadingBody';

class App extends Component {
  constructor() {
    super();

    this.state = { isReading: false, indexOfFeed: 0, feeds: [] };
  }

  componentDidMount() {
    fetch('http://ec2-52-15-187-37.us-east-2.compute.amazonaws.com:3001/feed')
      // fetch('http://localhost:3001/feed')
      .then(res => res.json())
      .then(feedData => this.setState({ feeds: feedData.feed.entries }))
      .catch(e => console.error('Failed:', e));
  }
  newsBody = () => <NewsBody feeds={this.state.feeds} goRead={this.goRead} />;
  favorite = () => <div>Here is the favorite. Coming soon...</div>;
  readingBody = () => <ReadingBody feeds={this.state.feeds} />;
  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <Route path="/" exact={true} component={this.newsBody} />
        <Route path="/reading" exact={true} component={this.readingBody} />
        <Route path="/favorite" exact={true} component={this.favorite} />
      </div>
    );
  }
}

export default App;
