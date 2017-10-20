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

export default ({ index, tags, title, author, content, date }) => (
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
    <div className="article-title">{title}</div>
    <div className="article-author">{author}</div>
    <div className="article-content">
      <ArticleContent content={content} />
    </div>
  </div>
);
