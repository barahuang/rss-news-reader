import React from 'react';
import './index.css';
import Title from '../Title';
import Wrap from '../Wrap';

export default () => (
  <div className="content">
    <Wrap>
      <div className="wrapper">
        <div className="content-title-wrap">
          <Title content="News" />
        </div>
        <div className="content-body" />
      </div>
    </Wrap>
  </div>
);
