import React, { useState, useEffect } from 'react';

import { Link, useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../styles/Header.css';

const Header = () => {
  const [renderHeader, setRenderHeader] = useState(true);
  const [renderSearch, setRenderSearch] = useState(false);

  const history = useHistory();
  const path = history.location.pathname;
  const shouldHeaderRender = () => {
    // path.split('/').includes === DETAILS_PATH_LENGTH
    // const DETAILS_PATH_LENGTH = 3;
    const pathWords = path.split('/');
    const x = pathWords.filter((word) => word !== '');
    console.log(x);

    if (path.split('/').includes('in-progress')
    ) {
      setRenderHeader(false);
    }
  };

  const shouldSearchRender = () => {
    if (path.split('/').includes('comidas')
    || path.split('/').includes('area')
    || path.split('/').includes('bebidas')) {
      return setRenderSearch(true);
    }
  };

  useEffect(() => {
    shouldHeaderRender();
    shouldSearchRender();
  }, [path]);

  const renderPageTitle = () => {
    if (path.split('/').includes('explorar')) {
      return 'Explorar';
    }
    return (
      path
        .split('/')[1].charAt(0).toUpperCase() + path.split('/')[1].slice(1));
  };

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
      { renderSearch && <img
        data-testid="search-top-btn"
        src={ searchIcon }
        alt=""
      /> }

    </header>
  );

  return (
    renderHeader && renderHeaderComponent()
  );
};

export default Header;
