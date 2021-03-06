import React from 'react';
import './index.css';
import ArticleContent from '../ArticleContent';

const tagstyle = () => ({
  whiteSpace: 'nowrap',
  textTransform: 'capitalize'
});

const colorNum = colornum => {
  const colorcount = 13;
  return colornum <= colorcount ? colornum : colorcount - colornum % colorcount;
};

export default class Article extends React.Component {
  render() {
    const { index, tags, title, author, content, link, date } = this.props;
    return (
      <div className="article-wrapper">
        <div
          className="article-tag"
          id={`tag-${index}`}
          /* onMouseEnter={() => anime(`#tag-${index}`, 'tagon')}
          onMouseLeave={() => anime(`#tag-${index}`, 'tagoff')} */
        >
          {tags.map((tag, i) => (
            <span key={i} className={`tag-colors-${colorNum(i + 1)}`}>
              {i === 0 ? '' : ' / '} <span style={tagstyle()}>{tag}</span>
            </span>
          ))}
        </div>
        <div className="article-title">
          <a href={`${link}`} target="_blank">
            {title}
          </a>
        </div>
        <div className="article-info">
          <span className="article-author">{author}</span>
          &middot;
          <span className="article-date">
            {date
              .split(' ')
              .slice(0, 4)
              .join(' ')}
          </span>
        </div>
        <div className="article-content">
          <ArticleContent content={content} />
          <div className="article-content-footer">
            <div
              className="backtotop"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Back to top
            </div>
          </div>
        </div>
      </div>
    );
  }
}
