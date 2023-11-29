import React from 'react';
import { NavLink } from 'react-router-dom';
import { Conteainer } from '../../style/container.style';
import { Nav } from './Header.style';

const Header = () => {
  return (
    <Conteainer>
      <header>
        <nav>
          <Nav>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalog">Catalog</NavLink>
            </li>
            <li>
              <NavLink to="/favorites">Favorites</NavLink>
            </li>
          </Nav>
        </nav>
        <div></div>
      </header>
    </Conteainer>
  );
};

export default Header;
