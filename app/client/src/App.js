import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NewsBody from './components/NewsBody';
import ReadingBody from './components/ReadingBody';
import * as LSS from './components/LocalStorageService';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isReading: false,
      indexOfFeed: 0,
      feeds: [],
      oldFeeds: [], // shown in last session; saved in local storage
      newFeeds: [],
      favoriteFeeds: LSS.getAll('favoriteList')
    };

    this.updateFavoritedFeeds = this.updateFavoritedFeeds.bind(this);
  }

  componentDidMount() {
    fetch('http://ec2-52-15-187-37.us-east-2.compute.amazonaws.com:3001/feed')
      .then(res => res.json())
      // .then(feedData => feedData.feed.entries)
      .then(feedData => this.setState({ feeds: feedData.feed.entries }))
      .then(() => {
        const newFeeds = this.state.feeds.filter(
          feed => !LSS.check('previousList', feed)
        );
        const oldFeeds = LSS.getAll('previousList');
        this.setState({ newFeeds, oldFeeds: oldFeeds ? oldFeeds : [] });
      })
      .then(() => {
        console.dir(this.getFeeds());
        LSS.dump('previousList', this.getFeeds());
      })
      .catch(e => console.error('Failed:', e));
  }

  getFeeds() {
    return [...this.state.newFeeds, ...this.state.oldFeeds];
  }

  updateFavoritedFeeds() {
    this.setState({
      favoriteFeeds: LSS.getAll('favoriteList')
    });
  }

  newsBody = () => (
    <NewsBody
      newFeeds={this.state.newFeeds}
      oldFeeds={this.state.oldFeeds}
      forWhat="reading"
      titleName="News"
    />
  );
  favBody = () => (
    <NewsBody
      /* newFeeds={this.state.newFeeds} */
      oldFeeds={this.state.favoriteFeeds}
      forWhat="favorite"
      titleName="Favorite"
    />
  );
  readingBody1 = () => (
    <ReadingBody
      feeds={this.getFeeds()}
      forWhat="reading"
      updateFavoritedFeeds={this.updateFavoritedFeeds}
    />
  );
  readingBody2 = () => (
    <ReadingBody
      feeds={this.state.favoriteFeeds}
      forWhat="favorite"
      updateFavoritedFeeds={this.updateFavoritedFeeds}
    />
  );
  render() {
    return (
      <div className="App">
        <div className="header-wrapper">
          <Header newCount={this.state.newFeeds.length} />
        </div>

        <Route path="/" exact={true} component={this.newsBody} />
        <Route
          path="/reading/:index"
          exact={true}
          component={this.readingBody1}
        />
        <Route path="/favorite" exact={true} component={this.favBody} />
        <Route
          path="/favorite/:index"
          exact={true}
          component={this.readingBody2}
        />
      </div>
    );
  }
}

export default App;
