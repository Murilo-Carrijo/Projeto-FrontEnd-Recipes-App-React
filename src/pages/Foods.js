import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import MyContext from '../context/MyContext';
// FUNCTIONS HELPERS
import conditionsForRequestsFoods from '../helpers/conditionsForRequestsFoods';
import generateBtnCategory from '../helpers/generateBtnCategory';
// COMPONENTS
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import CategoriesButtons from '../components/CategoriesButtons';
import {
  requestFoodsIngredients,
  requestFoodsFilterCategories,
  requestFoodsListCategories,
} from '../servises/fetchFoods';

const MAX_LENGTH = 12;
const MAX_CATEGORIES = 5;
const PHRASE = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

function Foods() {
  const {
    results,
    setResults,
    filterInfo,
    categoriesMeals,
    setCategoriesMeals,
    selectCategories,
    resultsCategories,
    setResultsCategories,
    foodsRecipes,
    setFoodsRecipes,
  } = useContext(MyContext);

  useEffect(() => {
    requestFoodsIngredients('').then((response) => {
      if (response) {
        setResults(response);
        setFoodsRecipes(response);
      }
    });
  }, [setResults, setFoodsRecipes]);

  useEffect(() => {
    conditionsForRequestsFoods(filterInfo, foodsRecipes, setFoodsRecipes);
  }, [filterInfo.text, filterInfo.radio, setFoodsRecipes]);

  useEffect(() => {
    if (selectCategories && selectCategories !== '') {
      requestFoodsFilterCategories(selectCategories).then((response) => {
        setResultsCategories(response);
        setFoodsRecipes([]);
      });
    } else {
      setFoodsRecipes(results);
    }
  }, [setResultsCategories, selectCategories]);

  useEffect(() => {
    generateBtnCategory(requestFoodsListCategories, setCategoriesMeals, MAX_CATEGORIES);
  }, [setCategoriesMeals]);

  function verifyLength() {
    if (foodsRecipes && foodsRecipes.length === 1) {
      return <Redirect to={ `/comidas/${foodsRecipes[0].idMeal}` } />;
    }
  }
  return (
    <section>
      {categoriesMeals && (
        <CategoriesButtons listCategories={ categoriesMeals } recipeType="food" />
      )}
      <div>
        {foodsRecipes ? foodsRecipes.map((food, index) => (
          index < MAX_LENGTH && <RecipeCard
            type="comidas"
            id={ food.idMeal }
            index={ index }
            key={ food.idMeal }
            name={ food.strMeal }
            thumb={ food.strMealThumb }
          />)) : global.alert(PHRASE)}
        {resultsCategories && resultsCategories.map((category, index) => (
          index < MAX_LENGTH && <RecipeCard
            type="comidas"
            id={ category.idMeal }
            index={ index }
            key={ category.idMeal }
            name={ category.strMeal }
            thumb={ category.strMealThumb }
          />))}
        {verifyLength()}
      </div>
      <Footer />
    </section>
  );
}

export default Foods;
