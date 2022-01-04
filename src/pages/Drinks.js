import React, { useContext, useEffect } from 'react';
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
      console.log('test2');
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
  }, [filterInfo.radio, filterInfo.text, setResults]);

  function setDrinks(food) {
    return (
      <div key={ food.idDrink }>
        <p>{food.strDrink}</p>
        <img src={ food.strDrinkThumb } alt={ food.strDrink } width="161" />
      </div>
    );
  }
  return (
    <section>
      <Header />
      <div>
        {results ? results.map((result) => (
          setDrinks(result)))
          : <div>Não encontramos resultados pra sua pesquisa</div>}
      </div>
      <Footer />
    </section>
  );
}

export default Drinks;
