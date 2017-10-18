import React from 'react';
import './index.css';
import Title from '../Title';
import Wrap from '../Wrap';
import Card from '../Card';

export default ({ feeds, goRead }) => (
  <div className="content">
    <Wrap>
      <div className="wrapper">
        <div className="content-title-wrap">
          <Title content="News" />
        </div>
        <div className="content-body">
          {feeds.map((feed, index) => (
            <Card
              key={index}
              index={index}
              tags={feed.categories}
              title={feed.title}
              author={feed.author}
              content={feed.contentHtml}
              goRead={goRead}
            />
          ))}
        </div>
      </div>
    </Wrap>
  </div>
);
