import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { drinksForName } from '../servises/fetchApi';
import MyContext from '../context/MyContext';
import Footer from '../components/Footer';
import requestDrinks from '../servises/requestDrinks';

function Drinks() {
  const {
    results,
    setResults,
    filterInfo,
  } = useContext(MyContext);

  const maxlength = 12;

  useEffect(() => {
    drinksForName('').then((recipes) => { if (recipes) { return setResults(recipes); } });
  }, [setResults]);

  function handleResults(i) {
    if (i) {
      setResults(i);
    } else {
      global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  }

  useEffect(() => {
    requestDrinks(filterInfo, results, setResults, handleResults);
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
