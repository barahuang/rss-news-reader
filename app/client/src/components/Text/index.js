import React from 'react';

import './index.css';

export default ({ content, id }) => (
  <span className="featured-text" id={id}>
    {content.split('').map((ch, i) => (
      <span
        key={i}
        className={`featured-text-letter featured-text-letter-${i + 1}`}
      >
        {ch}
      </span>
    ))}
  </span>
);
