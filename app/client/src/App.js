import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NewsBody from './components/NewsBody';
import ReadingBody from './components/ReadingBody';
import { getAll } from './components/LocalStorageService';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isReading: false,
      indexOfFeed: 0,
      feeds: [],
      favoriteFeeds: getAll()
    };
  }

  componentDidMount() {
    fetch('http://ec2-52-15-187-37.us-east-2.compute.amazonaws.com:3001/feed')
      .then(res => res.json())
      .then(feedData => this.setState({ feeds: feedData.feed.entries }))
      .catch(e => console.error('Failed:', e));
  }
  newsBody = () => <NewsBody feeds={this.state.feeds} titleName="News" />;
  favBody = () => (
    <NewsBody feeds={this.state.favoriteFeeds} titleName="Favorite" />
  );
  readingBody1 = () => <ReadingBody feeds={this.state.feeds} />;
  readingBody2 = () => <ReadingBody feeds={this.state.favoriteFeeds} />;
  render() {
    return (
      <div className="App">
        <div className="header-wrapper">
          <Header />
        </div>

        <Route path="/" exact={true} component={this.newsBody} />
        <Route
          path="/reading/:index"
          exact={true}
          component={this.readingBody1}
        />
        <Route path="/favorite" exact={true} component={this.favBody} />
      </div>
    );
  }
}

export default App;
