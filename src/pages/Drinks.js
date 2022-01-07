import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import requestCategories from '../servises/requestCategories';
import MyContext from '../context/MyContext';
import Footer from '../components/Footer';
import requestDrinks from '../servises/requestDrinks';
import CategoriesButtons from '../components/CategoriesButtons';
import {
  requestDrinksByName,
  requestDrinksFilterCategories,
  requestDrinksListCategories,
} from '../servises/fetchDrinks';

function Drinks() {
  const {
    results,
    setResults,
    filterInfo,
    categoriesDrinks,
    setCategoriesDrinks,
    selectCategories,
    resultsCategories,
    setResultsCategories,
    drinksRecipes,
    setDrinksRecipes,
  } = useContext(MyContext);

  const maxlength = 12;
  const MAX_CATEGORIES = 5;

  useEffect(() => {
    requestDrinksByName('').then((recipes) => {
      if (recipes) {
        setResults(recipes);
        setDrinksRecipes(recipes);
      }
    });
  }, [setResults, setDrinksRecipes]);

  function handleResults(i) {
    if (i) {
      setDrinksRecipes(i);
    } else {
      global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  }

  useEffect(() => {
    requestDrinks(filterInfo, drinksRecipes, setResults, handleResults);
  }, [filterInfo.radio, filterInfo.text, setDrinksRecipes]);

  function handleRecipeDrinks(drink) {
    return (
      <div
        key={ drink.idDrink }
        data-testid={ `${drinksRecipes.indexOf(drink)}-recipe-card` }
      >
        <p
          data-testid={ `${drinksRecipes.indexOf(drink)}-card-name` }
        >
          {drink.strDrink}
        </p>
        <img
          src={ drink.strDrinkThumb }
          alt={ drink.strDrink }
          width="161"
          data-testid={ `${drinksRecipes.indexOf(drink)}-card-img` }
        />
      </div>
    );
  }

  function handleCategories(drink) {
    return (
      <div
        key={ drink.idDrink }
        data-testid={ `${resultsCategories.indexOf(drink)}-recipe-card` }
      >
        <p
          data-testid={ `${resultsCategories.indexOf(drink)}-card-name` }
        >
          {drink.strDrink}
        </p>
        <img
          src={ drink.strDrinkThumb }
          alt={ drink.strDrink }
          width="161"
          data-testid={ `${resultsCategories.indexOf(drink)}-card-img` }
        />
      </div>
    );
  }

  function renderResultsCategories() {
    return resultsCategories.map((result) => (
      resultsCategories.indexOf(result) < maxlength && handleCategories(result)));
  }

  useEffect(() => {
    requestCategories(requestDrinksListCategories, setCategoriesDrinks, MAX_CATEGORIES);
  }, []);

  useEffect(() => {
    if (selectCategories !== '') {
      requestDrinksFilterCategories(selectCategories).then((response) => {
        setResultsCategories(response);
        setDrinksRecipes([]);
      });
    } else {
      setDrinksRecipes(results);
    }
  }, [setResultsCategories, selectCategories]);

  function validate() {
    if (drinksRecipes.length === 1) {
      return selectCategories ? setResultsCategories(results)
        : <Redirect to={ `/bebidas/${drinksRecipes[0].idDrink}` } />;
    }
  }

  return (
    <section>
      {categoriesDrinks && <CategoriesButtons listCategories={ categoriesDrinks } />}
      <div>
        {drinksRecipes ? drinksRecipes.map((result) => (
          drinksRecipes.indexOf(result) < maxlength && handleRecipeDrinks(result)))
          : global.alert(
            'Sinto muito, não encontramos nenhuma receita para esses filtros.',
          )}
        {resultsCategories && renderResultsCategories()}
        {validate()}
      </div>
      <Footer />
    </section>
  );
}

export default Drinks;
