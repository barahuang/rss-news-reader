import React from 'react';
import './index.css';
import Articlecontent from '../Articlecontent';

export default ({ tag, title, author, content }) => (
  <div className="article-wrapper">
    <div className="article-tag">{tag}</div>
    <div className="article-title">{title}</div>
    <div className="article-author">{author}</div>
    <div className="article-content">
      <Articlecontent content={content} />
    </div>
  </div>
);
