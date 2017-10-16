import React from 'react';
import './index.css';

export default ({ tag, title, author, ifnew, imgUrl }) => (
  <div className="card-wrapper">
    <div className="card-content-wrapper">
      <div className="card-tag">{tag}</div>
      <div className="card-title">{title}</div>
      <div className="card-content-bottom">
        <div className="card-author">{author}</div>
        <div className="ifnew">{ifnew}</div>
      </div>
    </div>
  </div>
);
