import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import MyContext from '../context/MyContext';
// FUNCTIONS HELPERS
import conditionsForRequestsDrinks from '../helpers/conditionsForRequestsDrinks';
import generateBtnCategory from '../helpers/generateBtnCategory';
// COMPONENTS
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import CategoriesButtons from '../components/CategoriesButtons';
import {
  requestDrinksByName,
  requestDrinksFilterCategories,
  requestDrinksListCategories,
} from '../servises/fetchDrinks';

const MAX_LENGTH = 12;
const MAX_CATEGORIES = 5;
const PHRASE = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

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

  const isDrinks = drinksRecipes.length === 1;

  useEffect(() => {
    requestDrinksByName('').then((response) => {
      if (response) {
        setResults(response);
        setDrinksRecipes(response);
      }
    });
  }, [setResults, setDrinksRecipes]);

  useEffect(() => {
    conditionsForRequestsDrinks(filterInfo, drinksRecipes, setResults);
  }, [filterInfo.radio, filterInfo.text, setDrinksRecipes]);

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

  useEffect(() => {
    generateBtnCategory(requestDrinksListCategories, setCategoriesDrinks, MAX_CATEGORIES);
  }, [setCategoriesDrinks]);

  return (
    <section>
      {categoriesDrinks && (
        <CategoriesButtons listCategories={ categoriesDrinks } recipeType="drink" />
      )}
      <div>
        {drinksRecipes ? drinksRecipes.map((food, index) => (
          index < MAX_LENGTH && <RecipeCard
            type="bebidas"
            id={ food.idDrink }
            index={ index }
            key={ food.idDrink }
            name={ food.strDrink }
            thumb={ food.strDrinkThumb }
          />)) : global.alert(PHRASE)}
        {resultsCategories && resultsCategories.map((category, index) => (
          index < MAX_LENGTH && <RecipeCard
            type="bebidas"
            id={ category.idDrink }
            index={ index }
            key={ category.idDrink }
            name={ category.strDrink }
            thumb={ category.strDrinkThumb }
          />))}
        {isDrinks && <Redirect to={ `/bebidas/${drinksRecipes[0].idDrink}` } />}
      </div>
      <Footer />
    </section>
  );
}

export default Drinks;
