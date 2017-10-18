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

export default ({
  index,
  tags,
  title,
  author,
  ifnew,
  imgUrl,
  content,
  goRead
}) => (
  <div
    className={`card-wrapper card-overlay-${indexNum()}`}
    style={imgUrl ? imageStyle(imgUrl) : {}}
    onClick={() => goRead(index)}
  >
    <div className="card-content-wrapper">
      <div className="card-tag">
        {tags.map((tag, i) => (
          <span key={i}>
            {i === 0 ? '' : ' // '}{' '}
            <span style={{ whiteSpace: 'nowrap' }}>{tag}</span>
          </span>
        ))}
      </div>
      <div className="card-title">{title}</div>
      <div className="card-content-bottom">
        <div className="card-author">{author}</div>
        <div className="ifnew">{ifnew}</div>
      </div>
    </div>
  </div>
);
