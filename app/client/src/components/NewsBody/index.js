import React from 'react';
import { Link } from 'react-router-dom';
import anime from '../Anime';

import './index.css';
import Title from '../Title';
import Wrap from '../Wrap';
import Card from '../Card';

const getImgUrl = html => {
  const reg = new RegExp(`<img[^>]+src\s*=\s*['"]([^'"]+)['"][^>]*>`);
  const matches = reg.exec(html);
  return matches && matches.length > 0 ? matches[1] : '';
};

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
              <div
                className={`card-${index}`}
                onMouseEnter={() => anime(`.card-${index}`, 'mi')}
                onMouseLeave={() => anime(`.card-${index}`, 'mo')}
              >
                <Card
                  index={index}
                  tags={feed.categories}
                  title={feed.title}
                  author={feed.author}
                  content={feed.contentHtml}
                  date={feed.pubDate}
                  imgUrl={getImgUrl(feed.contentHtml)}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Wrap>
  </div>
);
