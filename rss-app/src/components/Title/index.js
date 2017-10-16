import React from 'react';
import './index.css';
import Text from '../Text';

export default ({ content }) => (
  <div className="title-wrap">
    <div class="title">
      <Text content={content} />
    </div>
  </div>
);
