import React from 'react';
import { Link } from 'react-router-dom';
import anime from '../Anime';
import './index.css';
import Title from '../Title';
import Wrap from '../Wrap';
import Card from '../Card';

const getImgUrl = html => {
  // eslint-disable-next-line
  const reg = new RegExp(`<img[^>]+src\s*=\s*['"]([^'"]+)['"][^>]*>`);
  const matches = reg.exec(html);
  return matches && matches.length > 0 ? matches[1] : '';
};

export default class NewsBody extends React.Component {
  render() {
    // if (this.props.feeds && this.props.feeds.length > 0) {
    //   anime('.card', 'appearing');
    // }
    return (
      <div className="content">
        <Wrap>
          <div className="wrapper">
            <div className="content-title-wrap">
              <Title content={`${this.props.titleName}`} />
            </div>
            <div className="content-body">
              {this.props.newFeeds &&
                this.props.newFeeds.map((feed, index) => (
                  <Link to={`/${this.props.forWhat}/${index}`} key={index}>
                    <div
                      className={`card card-${index}`}
                      onMouseEnter={() => anime(`.card-${index}`, 'mi')}
                      onMouseLeave={() => anime(`.card-${index}`, 'mo')}
                    >
                      <Card
                        ifnew={true}
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
              {this.props.oldFeeds &&
                this.props.oldFeeds.map((feed, index) => (
                  <Link to={`/${this.props.forWhat}/${index}`} key={index}>
                    <div
                      className={`card card-${index}`}
                      onMouseEnter={() => anime(`.card-${index}`, 'mi')}
                      onMouseLeave={() => anime(`.card-${index}`, 'mo')}
                    >
                      <Card
                        ifnew={false}
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
  }
}
