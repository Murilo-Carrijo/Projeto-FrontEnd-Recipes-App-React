import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import MyContext from '../context/MyContext';
import Footer from '../components/Footer';
import requestFoods from '../servises/requestFoods';
import requestCategories from '../servises/requestCategories';
import CategoriesButtons from '../components/CategoriesButtons';
import {
  requestFoodsIngredients,
  requestFoodsFilterCategories,
  requestFoodsListCategories,
} from '../servises/fetchFoods';

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

  const maxlength = 12;
  const MAX_CATEGORIES = 5;

  useEffect(() => {
    requestFoodsIngredients('').then((response) => {
      if (response) {
        setResults(response);
        setFoodsRecipes(response);
      }
    });
  }, [setResults, setFoodsRecipes]);

  function handleResults(i) {
    if (i) {
      setFoodsRecipes(i);
    } else {
      global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  }

  // ComponetDidUpdate
  useEffect(() => {
    requestFoods(filterInfo, foodsRecipes, setFoodsRecipes, handleResults);
  }, [filterInfo.text, filterInfo.radio, setFoodsRecipes]);

  function handleRecipeFoods(food) {
    return (
      <div
        key={ food.idMeal }
        data-testid={ `${foodsRecipes.indexOf(food)}-recipe-card` }
      >
        <p data-testid={ `${foodsRecipes.indexOf(food)}-card-name` }>{food.strMeal}</p>
        <img
          src={ food.strMealThumb }
          alt={ food.strMeal }
          data-testid={ `${foodsRecipes.indexOf(food)}-card-img` }
          width="161"
        />

      </div>
    );
  }

  function handleCategories(food) {
    return (
      <div
        key={ food.idMeal }
        data-testid={ `${resultsCategories.indexOf(food)}-recipe-card` }
      >
        <p
          data-testid={ `${resultsCategories.indexOf(food)}-card-name` }
        >
          {food.strMeal}
        </p>
        <img
          src={ food.strMealThumb }
          alt={ food.strMeal }
          data-testid={ `${resultsCategories.indexOf(food)}-card-img` }
          width="161"
        />
      </div>
    );
  }

  function renderResultsCategories() {
    return resultsCategories.map((result) => (
      resultsCategories.indexOf(result) < maxlength && handleCategories(result)));
  }

  useEffect(() => {
    requestCategories(requestFoodsListCategories, setCategoriesMeals, MAX_CATEGORIES);
  }, []);

  useEffect(() => {
    if (selectCategories !== '') {
      requestFoodsFilterCategories(selectCategories).then((response) => {
        setResultsCategories(response);
        setFoodsRecipes([]);
      });
    } else {
      setFoodsRecipes(results);
    }
  }, [setResultsCategories, selectCategories]);

  function validate() {
    if (foodsRecipes.length === 1) {
      return selectCategories ? setResultsCategories(results)
        : <Redirect to={ `/comidas/${foodsRecipes[0].idMeal}` } />;
    }
  }

  return (
    <section>
      {categoriesMeals && <CategoriesButtons listCategories={ categoriesMeals } />}
      <div>
        {foodsRecipes ? foodsRecipes.map((result) => (
          foodsRecipes.indexOf(result) < maxlength && handleRecipeFoods(result)))
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

export default Foods;
