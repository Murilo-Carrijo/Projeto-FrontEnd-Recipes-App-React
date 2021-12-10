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
    <form>
      <input
        type="text"
        placeholder="Search Recipe"
        data-testid="search-input"
        onChange={ (e) => setSelectFilter({ ...selectFilter, text: e.target.value }) }
      />

      <label htmlFor="ingredient-search">
        Ingredientes
        <input
          type="radio"
          id="ingredient-search"
          data-testid="ingredient-search-radio"
          value="ingredients"
          onChange={ (e) => setSelectFilter({ ...selectFilter, radio: e.target.value }) }
        />
      </label>

      <label htmlFor="name-search">
        Nome
        <input
          type="radio"
          id="name-search"
          data-testid="name-search-radio"
          value="name"
          onChange={ (e) => setSelectFilter({ ...selectFilter, radio: e.target.value }) }
        />
      </label>

      <label htmlFor="first-letter-search-">
        Primeira letra
        <input
          type="radio"
          id="first-letter-search-"
          data-testid="first-letter-search-radio"
          value="first-letter"
          onChange={ (e) => setSelectFilter({ ...selectFilter, radio: e.target.value }) }
        />
      </label>

      <button
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
