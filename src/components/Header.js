import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import '../styles/Header.css';

const Header = () => {
  const [renderHeader, setRenderHeader] = useState(false);
  const [renderSearchIcon, setRenderSearchIcon] = useState(false);
  const [renderSearchBar, setRenderSearchBar] = useState(false);

  const location = useLocation();
  const { pathname } = location;
  useEffect(() => {
    const shouldHeaderRender = () => {
      switch (pathname) {
      case '/comidas':
      case '/bebidas':
      case '/explorar/comidas/area':
        setRenderHeader(true);
        setRenderSearchIcon(true);
        break;
      case '/explorar':
      case '/explorar/comidas':
      case '/explorar/bebidas':
      case '/explorar/bebidas/ingredientes':
      case '/explorar/comidas/ingredientes':
      case '/perfil':
      case '/receitas-feitas':
      case '/receitas-favoritas':
        setRenderHeader(true);
        setRenderSearchIcon(false);
        break;
      default:
        setRenderHeader(false);
        setRenderSearchIcon(false);
      }
    };
    shouldHeaderRender();
  }, [location, pathname, renderHeader, renderSearchIcon]);

  const renderPageTitle = () => {
    if (pathname.split('/').includes('area')) {
      return 'Explorar Origem';
    }
    if (pathname.split('/').includes('ingredientes')) {
      return 'Explorar Ingredientes';
    }
    if (pathname.split('/').includes('explorar')) {
      return (
        pathname.split('/')[2] === 'comidas' ? 'Explorar Comidas' : 'Explorar Bebidas'
      );
    }
    if (pathname.split('/').includes('receitas-feitas')) {
      return 'Receitas Feitas';
    }
    if (pathname.split('/').includes('receitas-favoritas')) {
      return 'Receitas Favoritas';
    }
    return (
      pathname
        .split('/')[1].charAt(0).toUpperCase() + pathname.split('/')[1].slice(1));
  };

  const renderHeaderComponent = () => (
    <header className="header-container">
      <h1>
        <Link to="/perfil">
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
      { renderSearchIcon && (
        <button
          onClick={ () => setRenderSearchBar(!renderSearchBar) }
          type="button"
        >
          <img
            data-testid="search-top-btn"
            src={ searchIcon }
            alt=""
          />
        </button>) }

    </header>
  );

  return (
    <header>
      {renderHeader && renderHeaderComponent()}
      {renderSearchBar && <SearchBar />}
    </header>
  );
};

export default Header;
