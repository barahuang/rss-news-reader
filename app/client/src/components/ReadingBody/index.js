import React from 'react';
import './index.css';
import Article from '../Article';
import ArticleList from '../ArticleList';
const getCurrentIndex = () => {
  const url = new URL(window.location.href);
  return url.searchParams.get('i');
};

export default ({ feeds }) => {
  const currentFeed = feeds[getCurrentIndex()];
  console.log(currentFeed);
  return (
    <div className="reading-wrapper">
      <div className="reading-left">
        {feeds.map((feed, index) => (
          <ArticleList key={index} title={feed.title} />
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
          />
        </div>
      )}
    </div>
  );
};
