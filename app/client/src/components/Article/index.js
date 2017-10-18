import React from 'react';
import './index.css';
import ArticleContent from '../ArticleContent';

const tagstyle = () => ({
  whiteSpace: 'nowrap',
  textTransform: 'capitalize'
});

export default ({ tags, title, author, content }) => (
  <div className="article-wrapper">
    <div className="article-tag">
      {tags.map((tag, i) => (
        <span key={i}>
          {i === 0 ? '' : ' // '} <span style={tagstyle()}>{tag}</span>
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
