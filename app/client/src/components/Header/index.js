import React from 'react';
import './index.css';
import Navbar from '../Navbar';
import Searchbar from '../Searchbar';
import Wrap from '../Wrap';

export default () => (
  <div className="header">
    <Wrap>
      <div className="header-wrap">
        <div className="navbar-wrap">
          <Navbar />
        </div>
        <div className="searchbar-wrap">
          <Searchbar />
        </div>
      </div>
    </Wrap>
  </div>
);
