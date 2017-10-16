import React from 'react';
import './index.css';
import Navbar from '../Navbar';
import Searchbar from '../Searchbar';

export default () => (
  <div className="header">
    <div className="wrap">
      <div className="navbar-wrap">
        <Navbar />
      </div>
      <div className="searchbar-wrap">
        <Searchbar />
      </div>
      {/* <div className="navbar-wrap"><Navbar /></div> */}
    </div>
  </div>
);
