import React, { useContext, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
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

  // const history = useHistory();

  // function getId() {
  //   if (results.length === 1) {
  //     history.push(`/comidas/${results[0].idMeal}`);
  //   }
  // }

  useEffect(() => {
    foodsForIngridients('').then((response) => setResults(response));
  }, [setResults]);

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
      foodsForFirstLetter(filterInfo.text).then((recipes) => setResults(recipes));
    }
  }, [filterInfo.radio, filterInfo.text, setResults]);

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
      <Header />
      <div>
        {results ? results.map((result) => (
          setFoods(result)))
          : <div>Não encontramos resultados pra sua pesquisa</div>}
      </div>
      <Footer />
    </section>
  );
}

export default Foods;
