import React from 'react';
import { NavLink } from 'react-router-dom';
import anime from '../Anime';
import './index.css';

import Text from '../Text';

const animateNews = () => {
  anime('#news .featured-text-letter', 'lettering');
};
const animateFavorite = () => {
  anime('#favorite .featured-text-letter', 'lettering');
};

export default () => (
  <nav className="navbar">
    <NavLink exact={true} to="/" activeClassName="active">
      <span onMouseEnter={animateNews}>
        <Text id="news" content="News" />
      </span>
    </NavLink>
    <div className="navbar-gap-sm" />
    <NavLink exact={true} to="/#">
      <div className="tag-update">5</div>
    </NavLink>
    <div className="navbar-gap-md" />
    <NavLink exact={true} to="/favorite" activeClassName="active">
      <span onMouseEnter={animateFavorite}>
        <Text id="favorite" content="Favorite" />
      </span>
    </NavLink>
  </nav>
);
