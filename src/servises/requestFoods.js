import {
  foodsForIngridients,
  foodsForName,
  foodsForFirstLetter,
} from './fetchApi';

function requestFoods(filterInfo, results, setResults, handleResults) {
  if (filterInfo.radio === 'ingredients') {
    foodsForIngridients(filterInfo.text).then((recipes) => handleResults(recipes));
  }

  if (filterInfo.radio === 'name') {
    foodsForName(filterInfo.text).then((recipes) => handleResults(recipes));
  }

  if (filterInfo.radio === 'first-letter' && filterInfo.text.length === 1) {
    foodsForFirstLetter(filterInfo.text).then((recipes) => setResults(recipes));
  } if (filterInfo.radio === 'first-letter' && filterInfo.text.length !== 0) {
    global.alert('Sua busca deve conter somente 1 (um) caracter');
  } if (!results) {
    global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }
}

export default requestFoods;
