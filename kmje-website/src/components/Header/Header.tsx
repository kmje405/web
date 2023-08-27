import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <nav className="nav">
        <ul className="nav__list">
        <li className="nav__item">
            <Link className="nav__link" to="/">Home</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/about">About</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/contact">Contact</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
