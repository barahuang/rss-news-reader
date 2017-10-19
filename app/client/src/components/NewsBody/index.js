import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Title from '../Title';
import Wrap from '../Wrap';
import Card from '../Card';

export default ({ feeds }) => (
  <div className="content">
    <Wrap>
      <div className="wrapper">
        <div className="content-title-wrap">
          <Title content="News" />
        </div>
        <div className="content-body">
          {feeds.map((feed, index) => (
            <Link to={`/reading?i=${index}`} key={index}>
              <Card
                index={index}
                tags={feed.categories}
                title={feed.title}
                author={feed.author}
                content={feed.contentHtml}
                date={feed.pubDate}
              />
            </Link>
          ))}
        </div>
      </div>
    </Wrap>
  </div>
);
