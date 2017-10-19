import React from 'react';
import './index.css';

export default ({ content }) => (
  <div
    className="article-content-wrapper"
    dangerouslySetInnerHTML={{ __html: content }}
  />
  // <div className="article-content-wrapper" />
);
