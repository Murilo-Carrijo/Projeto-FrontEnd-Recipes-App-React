import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import {
  foodsForIngridients,
} from '../servises/fetchApi';
import MyContext from '../context/MyContext';
import Footer from '../components/Footer';
import requestFoods from '../servises/requestFoods';

function Foods() {
  const {
    results,
    setResults,
    filterInfo,
  } = useContext(MyContext);

  const maxlength = 12;

  // ComponetDidMount
  useEffect(() => {
    foodsForIngridients('').then((response) => {
      if (response) { return setResults(response); }
    });
  }, [setResults]);

  function handleResults(i) {
    if (i) {
      setResults(i);
    } else {
      global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  }

  // ComponetDidUpdate
  useEffect(() => {
    requestFoods(filterInfo, results, setResults, handleResults);
  }, [filterInfo.text, filterInfo.radio, setResults]);

  function setFoods(food) {
    return (
      <div key={ food.idMeal } data-testid={ `${results.indexOf(food)}-recipe-card` }>
        <p data-testid={ `${results.indexOf(food)}-card-name` }>{food.strMeal}</p>
        <img
          src={ food.strMealThumb }
          alt={ food.strMeal }
          data-testid={ `${results.indexOf(food)}-card-img` }
          width="161"
        />

      </div>
    );
  }

  if (results.length === 1) {
    console.log('test1');
    return <Redirect to={ `/comidas/${results[0].idMeal}` } />;
  }

  return (
    <section>
      <div>
        {results ? results.map((result) => (
          results.indexOf(result) < maxlength && setFoods(result)))
          : global.alert(
            'Sinto muito, não encontramos nenhuma receita para esses filtros.',
          )}
      </div>
      <Footer />
    </section>
  );
}

export default Foods;
