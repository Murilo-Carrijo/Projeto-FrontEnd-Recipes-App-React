import React, { useState, useEffect } from 'react';

import { Link, useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../styles/Header.css';

const Header = () => {
  const [renderHeader, setRenderHeader] = useState(true);
  const history = useHistory();
  const path = history.location.pathname;
  const shouldHeaderRender = () => {
    const DETAILS_PATH_LENGTH = 3;
    if (path.split('/').includes('in-progress')
    || path.split('/').length === DETAILS_PATH_LENGTH) {
      setRenderHeader(false);
    }
  };

  useEffect(() => {
    shouldHeaderRender();
  }, [path]);

  const renderPageTitle = () => path
    .split('/')[1].charAt(0).toUpperCase() + path.split('/')[1].slice(1);

  const renderHeaderComponent = () => (
    <header className="header-container">
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

  return (
    renderHeader && renderHeaderComponent()
  );
};

export default Header;
