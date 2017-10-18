import React from 'react';
import './index.css';

const indexNum = () => {
  const minNum = 1;
  const maxNum = 6;
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
};

const imageStyle = url => ({
  backgroundImage: `url("${url}")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
});
export default ({ tag, title, author, ifnew, imgUrl }) => (
  <div
    className={`card-wrapper card-overlay-${indexNum()}`}
    style={imageStyle(imgUrl)}
  >
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
