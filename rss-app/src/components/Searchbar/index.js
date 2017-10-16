import React from 'react';
import './index.css';
const icon = require('../../images/search-icon.svg');

export default () => (
  <div className="searchbar">
    <input placeholder="Search" />
    <img src={icon} alt="search" />
  </div>
);
