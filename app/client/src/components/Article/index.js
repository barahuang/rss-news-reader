import React from 'react';
import './index.css';
import ArticleContent from '../ArticleContent';

export default ({ tags, title, author, content }) => (
  <div className="article-wrapper">
    <div className="article-tag">
      {tags.map((tag, i) => (
        <span key={i}>
          {i === 0 ? '' : ' // '}{' '}
          <span style={{ whiteSpace: 'nowrap' }}>{tag}</span>
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
