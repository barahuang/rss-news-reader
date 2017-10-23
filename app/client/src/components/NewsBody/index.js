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
            {!this.props.oldFeeds && (
              <div className="empty">
                <div className="heart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="109"
                    height="168"
                    viewBox="0 0 109 168"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path
                        fill="#D8D8D8"
                        d="M49.2828671,30.4859033 C59.5581827,9.92891768 72.0570412,-0.231713902 86.7794425,0.00400850033 C109.790515,0.372441966 115.490312,33.9945441 100.226536,54.2299877 C90.7218409,66.8305209 77.8562594,81.2802616 61.6297912,97.57921 L61.6297952,97.5792141 C60.4608338,98.753397 58.5613399,98.7576299 57.387157,97.5886684 C57.0464482,97.2494748 56.7922489,96.8333653 56.6459731,96.3753935 L48.7049825,71.5131207 L48.7049825,71.5131207 C48.257834,70.1131533 48.4492391,68.5873592 49.2283318,67.3412191 L59.7389018,50.5298143 L49.61045,35.5179136 L49.6104497,35.5179138 C48.6014941,34.0224887 48.4763092,32.0995178 49.2828671,30.4859033 Z"
                      />
                      <path
                        fill="#D8D8D8"
                        d="M48.9667817,13.8105706 C32.4947943,-3.38179571 18.0190211,-4.52246503 5.53946206,10.3885626 C-9.11532999,27.8986372 5.30710527,57.0012125 48.8067679,97.6962885 L48.806742,97.6963161 C49.2100665,98.0736367 49.8429044,98.0525564 50.2202251,97.649232 C50.4706607,97.381537 50.5545609,96.9982763 50.4388738,96.6504328 L42.3538346,72.3406655 L42.3538346,72.3406655 C41.9156854,71.0232564 42.0450259,69.5829832 42.7108857,68.3647171 L50.4143022,54.2704425 L50.4143022,54.2704425 C51.2010164,52.8310596 51.2316746,51.0973421 50.496343,49.6310441 L42.9573845,34.5978812 L42.9573845,34.5978812 C42.1584884,33.0048315 42.2679071,31.1069778 43.2445923,29.6162974 L49.538678,20.0098549 L49.5386823,20.0098577 C50.8146955,18.0623234 50.5775571,15.4917911 48.9667817,13.8105706 Z"
                      />
                      <g transform="translate(46 103)">
                        <polygon
                          fill="#118EF1"
                          points="10 0 4 3.666 5.201 11 10 5.5"
                        />
                        <polygon
                          fill="#2C32FF"
                          points="7 15 0 17.79 2.665 25 7 22.38"
                        />
                        <polygon
                          fill="#6C00F4"
                          points="9 20.645 17.249 31 18 23.307 15.561 19"
                        />
                        <polygon
                          fill="#A700FF"
                          points="4 29 5.048 35 10 30.032"
                        />
                        <polygon
                          fill="#D40063"
                          points="7.381 41 6 47 12 47 12 42.657"
                        />
                        <polygon
                          fill="#E60004"
                          points="0 51 2.409 56.123 7 57 5.451 51"
                        />
                        <polygon
                          fill="#FD5A06"
                          points="14.592 54 13 60.215 16.953 65 21 59.5"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="emptyText">Nothing yet.</div>
              </div>
            )}
          </div>
        </Wrap>
      </div>
    );
  }
}
