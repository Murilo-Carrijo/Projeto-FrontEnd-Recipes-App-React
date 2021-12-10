import React, { useContext, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import {
  foodsForIngridients,
  foodsForName,
  foodsForFirstName,
} from '../servises/fetchApi';
import MyContext from '../context/MyContext';

function Foods() {
  const {
    results,
    setResults,
    filterInfo,
  } = useContext(MyContext);

  useEffect(() => {
    foodsForIngridients('').then((recipes) => setResults(recipes));
  }, []);

  useEffect(() => {
    if (filterInfo.radio === 'ingredients') {
      foodsForIngridients(filterInfo.text).then((recipes) => setResults(recipes));
    }

    if (filterInfo.radio === 'name') {
      foodsForName(filterInfo.text).then((recipes) => setResults(recipes));
    }

    if (filterInfo.radio === 'first-letter' && filterInfo.text.length > 1) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    } else {
      foodsForFirstName(filterInfo.text).then((recipes) => setResults(recipes));
    }
  }, [filterInfo.radio, filterInfo.text]);

  function setFoods(food) {
    return (
      <div key={ food.idMeal }>
        <p>{food.strMeal}</p>
        <img src={ food.strMealThumb } alt={ food.strMeal } width="161" />
      </div>
    );
  }

  return (
    <section>
      <SearchBar />
      <div>
        {results ? results.map((result) => (
          setFoods(result)))
          : <div>Não encontramos resultados pra sua pesquisa</div>}
      </div>
    </section>
  );
}

export default Foods;
