import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

export default () => (
  <nav className="navbar">
    <NavLink exact={true} to="/" activeClassName="selected">
      News
    </NavLink>

    <NavLink exact={true} to="/favorite" activeClassName="selected">
      Favorite
    </NavLink>
  </nav>
);
