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

  // ComponetDidMount
  useEffect(() => {
    foodsForIngridients('').then((response) => setResults(response));
  }, [setResults]);

  // function redirectPage(food) {
  //   if (food.length === 1) {
  //     history.push(`/comidas/${food[0].idMeal}`);
  //   }
  // }

  // ComponetDidUpdate
  useEffect(() => {
    if (filterInfo.radio === 'ingredients') {
      console.log('test');
      foodsForIngridients(filterInfo.text).then((recipes) => setResults(recipes));
    }

    if (filterInfo.radio === 'name') {
      console.log('test1');
      foodsForName(filterInfo.text).then((recipes) => setResults(recipes));
    }

    if (filterInfo.radio === 'first-letter' && filterInfo.text.length === 1) {
      foodsForFirstLetter(filterInfo.text).then((recipes) => setResults(recipes));
    } else if (filterInfo.radio === 'first-letter' && filterInfo.text.length !== 0) {
      console.log('test2');
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
  }, [filterInfo.text, filterInfo.radio, setResults]);

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
        {/* {results && redirectPage(results)} */}
        {results ? results.map((result) => (
          setFoods(result)))
          : <div>Não encontramos resultados pra sua pesquisa</div>}
      </div>
      <Footer />
    </section>
  );
}

export default Foods;
