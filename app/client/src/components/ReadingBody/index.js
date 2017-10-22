import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import Article from '../Article';
import ArticleList from '../ArticleList';
import Wrap from '../Wrap';
import * as LSS from '../LocalStorageService';

export default class ReadingBody extends React.Component {
  favoriteListLocalStorageName = 'favoriteList';

  constructor(props) {
    super(props);
    this.state = {
      isCurrentFeedFavorited: LSS.check(
        this.favoriteListLocalStorageName,
        this.getCurrentFeed()
      )
    };
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  getCurrentIndex() {
    const a = window.location.href.split('/');
    return a[a.length - 1];
  }

  getCurrentFeed() {
    return this.props.feeds[this.getCurrentIndex()];
  }

  toggleFavorite() {
    const currentFeed = this.getCurrentFeed();
    const isFavorited = LSS.check(
      this.favoriteListLocalStorageName,
      currentFeed
    );

    if (!isFavorited) {
      LSS.add(currentFeed);
    } else {
      LSS.remove(currentFeed);
    }

    this.setState({
      isCurrentFeedFavorited: !isFavorited
    });
  }

  clickArticleListItem(index) {
    const isFavorited = LSS.check(
      this.favoriteListLocalStorageName,
      this.props.feeds[index]
    );
    this.setState({
      isCurrentFeedFavorited: isFavorited
    });
    window.scrollTo(0, 0);
  }

  render() {
    const currentFeed = this.getCurrentFeed();
    return (
      <div>
        <Wrap>
          <div
            className={`bookmark ${this.state.isCurrentFeedFavorited ||
            LSS.check(this.favoriteListLocalStorageName, currentFeed)
              ? 'active'
              : ''}`}
            onClick={this.toggleFavorite}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="37"
              viewBox="0 0 33 37"
            >
              <path
                fill="#D9D9D9"
                d="M33,3.08091615e-16 L0,3.08091615e-16 L0,35.6227617 L3.99680289e-15,35.6227617 C1.40219093e-16,36.1750464 0.44771525,36.6227617 1,36.6227617 C1.19309805,36.6227617 1.38206631,36.566855 1.54408179,36.4617939 L15.9559182,27.1162432 L15.9559182,27.1162432 C16.2868909,26.9016194 16.7131091,26.9016194 17.0440818,27.1162432 L31.4559182,36.4617939 L31.4559182,36.4617939 C31.9193029,36.7622819 32.5385441,36.6302282 32.8390322,36.1668435 C32.9440933,36.004828 33,35.8158597 33,35.6227617 L33,3.08091615e-16 Z"
              />
            </svg>
          </div>
          <div className="reading-wrapper">
            <div className="reading-left">
              {this.props.feeds.map((feed, index) => (
                <NavLink
                  to={`/reading/${index}`}
                  key={index}
                  activeClassName="active"
                  onClick={() => this.clickArticleListItem(index)}
                >
                  <ArticleList key={index} title={feed.title} />
                </NavLink>
              ))}
            </div>
            {currentFeed && (
              <div className="reading-right">
                <Article
                  tags={currentFeed.categories}
                  title={currentFeed.title}
                  author={currentFeed.author}
                  content={currentFeed.contentHtml}
                  date={currentFeed.pubDate}
                  link={currentFeed.link}
                  index={this.getCurrentIndex()}
                />
              </div>
            )}
          </div>
        </Wrap>
      </div>
    );
  }
}
