import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MyContext from './MyContext';

function Provider({ children }) {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [selectFilter, setSelectFilter] = useState({ radio: '', text: '' });
  const [results, setResults] = useState([]);
  const [filterInfo, setFilterInfor] = useState({});
  const [categoriesMeals, setCategoriesMeals] = useState([]);
  const [categoriesDrinks, setCategoriesDrinks] = useState([]);
  const [resultsCategories, setResultsCategories] = useState([]);
  const [selectCategories, setSelectCategories] = useState('');
  const [foodsRecipes, setFoodsRecipes] = useState([]);
  const [drinksRecipes, setDrinksRecipes] = useState([]);
  const [details, setDetails] = useState([]);

  const context = {
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    selectFilter,
    setSelectFilter,
    results,
    setResults,
    filterInfo,
    setFilterInfor,
    categoriesMeals,
    setCategoriesMeals,
    categoriesDrinks,
    setCategoriesDrinks,
    resultsCategories,
    setResultsCategories,
    selectCategories,
    setSelectCategories,
    foodsRecipes,
    setFoodsRecipes,
    drinksRecipes,
    setDrinksRecipes,
    details,
    setDetails,
  };

  return (
    <MyContext.Provider value={ context }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
