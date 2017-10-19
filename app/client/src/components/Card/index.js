import React from 'react';
import './index.css';

const indexNum = () => {
  const minNum = 1;
  const maxNum = 19;
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
};

const imageStyle = url => ({
  backgroundImage: `url("${url}")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
});

const tagstyle = () => ({
  whiteSpace: 'nowrap',
  textTransform: 'capitalize'
});

export default ({
  index,
  tags,
  title,
  author,
  ifnew,
  imgUrl,
  content,
  date
}) => (
  <div
    className={`card-wrapper card-overlay-${indexNum()}`}
    style={imgUrl ? imageStyle(imgUrl) : {}}
  >
    <div className="card-content-wrapper">
      <div className="card-tag">
        {tags.map((tag, i) => (
          <span key={i}>
            {i === 0 ? '' : ' / '} <span style={tagstyle()}>{tag}</span>
          </span>
        ))}
      </div>
      <div className="card-title">{title}</div>
      <div className="card-content-bottom">
        <div className="card-info">
          <span className="card-author">{author} </span>
          &middot;
          <span className="card-date">{date}</span>
        </div>
        <div className="ifnew">{ifnew}</div>
      </div>
    </div>
  </div>
);
