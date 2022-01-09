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
    recipeIngredients,
    setRecipeIngredients,
  } = useContext(MyContext);

  useEffect(() => {
    requestDrinksByName('').then((response) => {
      if (response) {
        setResults(response);
        setDrinksRecipes(response);
      }
    });
  }, [setResults, setDrinksRecipes]);

  useEffect(() => {
    conditionsForRequestsDrinks(filterInfo, drinksRecipes, setDrinksRecipes);
  }, [filterInfo.radio, filterInfo.text, setDrinksRecipes]);

  useEffect(() => {
    if (selectCategories && selectCategories !== '') {
      requestDrinksFilterCategories(selectCategories).then((response) => {
        setResultsCategories(response);
        setDrinksRecipes([]);
        setRecipeIngredients([]);
      });
    } else {
      setDrinksRecipes(results);
    }
  }, [setResultsCategories, selectCategories, setRecipeIngredients]);

  useEffect(() => {
    generateBtnCategory(requestDrinksListCategories, setCategoriesDrinks, MAX_CATEGORIES);
  }, [setCategoriesDrinks]);

  function verifyLength() {
    if (drinksRecipes && drinksRecipes.length === 1) {
      return <Redirect to={ `/bebidas/${drinksRecipes[0].idDrink}` } />;
    }
  }

  function verifyRenderFoods() {
    let list = [];
    if (recipeIngredients.length > 0) {
      list = recipeIngredients.slice(0, MAX_LENGTH);
    } else if (drinksRecipes) {
      list = drinksRecipes.slice(0, MAX_LENGTH);
    }
    return (
      list ? list.map((drink, index) => (
        index < MAX_LENGTH && <RecipeCard
          type="bebidas"
          id={ drink.idDrink }
          index={ index }
          key={ drink.idDrink }
          name={ drink.strDrink }
          thumb={ drink.strDrinkThumb }
        />)) : global.alert(PHRASE)
    );
  }

  return (
    <section>
      {categoriesDrinks && (
        <CategoriesButtons listCategories={ categoriesDrinks } recipeType="drink" />
      )}
      <div>
        {verifyRenderFoods()}
        {resultsCategories && resultsCategories.map((category, index) => (
          index < MAX_LENGTH && <RecipeCard
            type="bebidas"
            id={ category.idDrink }
            index={ index }
            key={ category.idDrink }
            name={ category.strDrink }
            thumb={ category.strDrinkThumb }
          />))}
        {verifyLength()}
      </div>
      <Footer />
    </section>
  );
}

export default Drinks;
