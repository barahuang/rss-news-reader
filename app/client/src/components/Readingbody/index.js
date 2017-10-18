import React from 'react';
import './index.css';
import Article from '../Article';
import ArticleList from '../ArticleList';

export default ({ feeds, index }) => (
  <div className="reading-wrapper">
    <div className="reading-left">
      {feeds.map((feed, index) => <ArticleList title={feed.title} />)}
    </div>
    <div className="reading-right">
      {feeds.map((feed, index) => (
        <Article
          key={index}
          index={index}
          tags={feed.categories}
          title={feed.title}
          author={feed.author}
          content={feed.contentHtml}
          date={feed.pubDate}
        />
      ))}
    </div>
  </div>
);
