import React from 'react';
import { Link } from 'react-router-dom';
import anime from '../Anime';

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
                  imgUrl="https://blogs.esri.com/esri/arcgis/files/2017/10/01-fig-1-7-v2.jpg"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Wrap>
  </div>
);
