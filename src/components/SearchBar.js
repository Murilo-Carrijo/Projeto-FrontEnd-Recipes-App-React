import '../styles/SearchBar.css';
import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function SearchBar() {
  const {
    selectFilter,
    setSelectFilter,
    setFilterInfor,
  } = useContext(MyContext);

  function handleClick() {
    setFilterInfor(selectFilter);
  }

  return (
    <form className="search-bar-container">
      <input
        className="search-input-text"
        type="text"
        placeholder="Search Recipe"
        data-testid="search-input"
        onChange={ (e) => setSelectFilter({ ...selectFilter, text: e.target.value }) }
        name="input"
      />

      <label
        htmlFor="ingredient-search"
        className="search-bar-label"
      >
        <input
          type="radio"
          id="ingredient-search"
          data-testid="ingredient-search-radio"
          value="ingredients"
          onChange={ (e) => setSelectFilter({ ...selectFilter, radio: e.target.value }) }
          name="input"
        />
        Ingredientes
      </label>

      <label
        htmlFor="name-search"
        className="search-bar-label"
      >
        <input
          type="radio"
          id="name-search"
          data-testid="name-search-radio"
          value="name"
          onChange={ (e) => setSelectFilter({ ...selectFilter, radio: e.target.value }) }
          name="input"
        />
        Nome
      </label>

      <label
        htmlFor="first-letter-search-"
        className="search-bar-label"
      >
        <input
          type="radio"
          id="first-letter-search-"
          data-testid="first-letter-search-radio"
          value="first-letter"
          onChange={ (e) => setSelectFilter({ ...selectFilter, radio: e.target.value }) }
          name="input"
        />
        Primeira letra
      </label>

      <button
        className="search-bar-button"
        type="button"
        data-testid="exec-search-btn"
        onClick={ () => handleClick() }
      >
        Buscar
      </button>

    </form>
  );
}

export default SearchBar;
