import React from 'react';
import './index.css';
import ArticleContent from '../ArticleContent';

export default ({ tag, title, author, content }) => (
  <div className="article-wrapper">
    <div className="article-tag">{tag}</div>
    <div className="article-title">{title}</div>
    <div className="article-author">{author}</div>
    <div className="article-content">
      <ArticleContent content={content} />
    </div>
  </div>
);
