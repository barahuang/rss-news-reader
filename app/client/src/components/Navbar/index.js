import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

import Text from '../Text';

export default () => (
  <nav className="navbar">
    <NavLink exact={true} to="/" activeClassName="active">
      <Text content="News" />
    </NavLink>
    <div className="navbar-gap-sm" />
    <NavLink exact={true} to="/#">
      <div className="tag-update">5</div>
    </NavLink>
    <div className="navbar-gap-md" />
    <NavLink exact={true} to="/favorite" activeClassName="active">
      <Text content="Favorite" />
    </NavLink>
  </nav>
);
