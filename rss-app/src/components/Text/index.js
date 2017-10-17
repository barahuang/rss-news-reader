import React from 'react';
import './index.css';

export default ({ content }) => (
  <span className="featured-text">
    {content.split('').map((ch, i) => (
      <span key={i} className={`featured-text-letter-${i + 1}`}>
        {ch}
      </span>
    ))}
  </span>
);
