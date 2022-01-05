import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import {
  drinksForIngridients,
  drinksForName,
  drinksForFirstName,
} from '../servises/fetchApi';
import MyContext from '../context/MyContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Drinks() {
  const {
    results,
    setResults,
    filterInfo,
  } = useContext(MyContext);

  const maxlength = 12;

  useEffect(() => {
    drinksForName('').then((recipes) => setResults(recipes));
  }, [setResults]);

  useEffect(() => {
    if (filterInfo.radio === 'ingredients') {
      drinksForIngridients(filterInfo.text).then((recipes) => setResults(recipes));
    }

    if (filterInfo.radio === 'name') {
      drinksForName(filterInfo.text).then((recipes) => setResults(recipes));
    }

    if (filterInfo.radio === 'first-letter' && filterInfo.text.length === 1) {
      drinksForFirstName(filterInfo.text).then((recipes) => setResults(recipes));
    } else if (filterInfo.radio === 'first-letter' && filterInfo.text.length !== 0) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
  }, [filterInfo.radio, filterInfo.text, setResults]);

  function setDrinks(food) {
    return (
      <div key={ food.idDrink } data-testid={ `${results.indexOf(food)}-recipe-card` }>
        <p data-testid={ `${results.indexOf(food)}-card-name` }>{food.strDrink}</p>
        <img
          src={ food.strDrinkThumb }
          alt={ food.strDrink }
          width="161"
          data-testid={ `${results.indexOf(food)}-card-img` }
        />
      </div>
    );
  }

  if (results.length !== null && results.length === 1) {
    return <Redirect to={ `/bebidas/${results[0].idDrink}` } />;
  }

  return (
    <section>
      <Header />
      <div>
        {results ? results.map((result) => (
          results.indexOf(result) < maxlength && setDrinks(result)))
          : global.alert(
            'Sinto muito, não encontramos nenhuma receita para esses filtros.',
          )}
        ;
      </div>
      <Footer />
    </section>
  );
}

export default Drinks;
