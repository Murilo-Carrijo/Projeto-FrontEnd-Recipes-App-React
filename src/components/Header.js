import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../styles/Header.css';

const Header = () => (
  <header>
    <h1>
      <Link to="/">
        <img
          data-testid="profile-top-btn"
          className="header-logo"
          src={ profileIcon }
          alt="logo"
        />
      </Link>
    </h1>
    <h1
      data-testid="page-title"
    >
      Page Title
    </h1>
    <img
      data-testid="search-top-btn"
      src={ searchIcon }
      alt=""
    />

  </header>
);

export default Header;
