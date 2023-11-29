import React from 'react';
import { NavLink } from 'react-router-dom';

import './heder.css';
import Logo from './../Logo/Logo';
import SvgShopping from './Svg/SvgShopping.jsx';
import SvgSwitch from './Svg/SvgSwitch.jsx';

const Heder = () => {
  return (
    <header className="container">
      <nav className="nav-header">
        <ul className="nav-list">
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </ul>

        <Logo />

        <div className="header-btn-box">
          <button className="shopping-link" type="button">
            <SvgShopping className="SvgShopping " />
          </button>

          <button type="button" className="change-theme">
            <SvgSwitch />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Heder;
