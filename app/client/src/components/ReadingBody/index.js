import React from 'react';
import './index.css';
import Article from '../Article';
import ArticleList from '../ArticleList';
import Wrap from '../Wrap';
const getCurrentIndex = () => {
  const url = new URL(window.location.href);
  return url.searchParams.get('i');
};

export default ({ feeds }) => {
  const currentFeed = feeds[getCurrentIndex()];
  return (
    <div>
      <Wrap>
        <div className="bookmark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="37"
            viewBox="0 0 33 37"
          >
            <path
              fill="#D9D9D9"
              fill-rule="evenodd"
              d="M33,3.08091615e-16 L0,3.08091615e-16 L0,35.6227617 L3.99680289e-15,35.6227617 C1.40219093e-16,36.1750464 0.44771525,36.6227617 1,36.6227617 C1.19309805,36.6227617 1.38206631,36.566855 1.54408179,36.4617939 L15.9559182,27.1162432 L15.9559182,27.1162432 C16.2868909,26.9016194 16.7131091,26.9016194 17.0440818,27.1162432 L31.4559182,36.4617939 L31.4559182,36.4617939 C31.9193029,36.7622819 32.5385441,36.6302282 32.8390322,36.1668435 C32.9440933,36.004828 33,35.8158597 33,35.6227617 L33,3.08091615e-16 Z"
            />
          </svg>
        </div>
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
                index={getCurrentIndex()}
              />
            </div>
          )}
        </div>
      </Wrap>
    </div>
  );
};
