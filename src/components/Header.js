import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../styles/Header.css';

const Header = () => {
  const history = useHistory();

  const renderPageTitle = () => {
    const path = history.location.pathname;
    return path.split('/')[1].charAt(0).toUpperCase() + path.split('/')[1].slice(1);
  };

  return (

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
        { renderPageTitle() }
      </h1>
      <img
        data-testid="search-top-btn"
        src={ searchIcon }
        alt=""
      />

    </header>
  );
};

export default Header;
