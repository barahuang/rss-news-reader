import React from 'react';
import './index.css';

const removeWidth = html => html.replace(/width:/gi, 'escaped-width:');
export default ({ content }) => (
  <div
    className="article-content-wrapper"
    dangerouslySetInnerHTML={{ __html: removeWidth(content) }}
  />
  // <div className="article-content-wrapper" />
);
