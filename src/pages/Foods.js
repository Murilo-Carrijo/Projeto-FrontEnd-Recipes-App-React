import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import {
  foodsForIngridients,
  foodsForName,
  foodsForFirstLetter,
} from '../servises/fetchApi';
import MyContext from '../context/MyContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Foods() {
  const {
    results,
    setResults,
    filterInfo,
  } = useContext(MyContext);

  const maxlength = 12;

  // ComponetDidMount
  useEffect(() => {
    foodsForIngridients('').then((response) => setResults(response));
  }, [setResults]);

  // ComponetDidUpdate
  useEffect(() => {
    if (filterInfo.radio === 'ingredients') {
      foodsForIngridients(filterInfo.text).then((recipes) => setResults(recipes));
    }

    if (filterInfo.radio === 'name') {
      foodsForName(filterInfo.text).then((recipes) => setResults(recipes));
      console.log('test');
    }

    if (filterInfo.radio === 'first-letter' && filterInfo.text.length === 1) {
      foodsForFirstLetter(filterInfo.text).then((recipes) => setResults(recipes));
    } else if (filterInfo.radio === 'first-letter' && filterInfo.text.length !== 0) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
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
      <Header />
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
