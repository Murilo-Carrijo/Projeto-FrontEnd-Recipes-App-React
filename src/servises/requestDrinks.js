import {
  drinksForIngridients,
  drinksForName,
  drinksForFirstName,
} from './fetchApi';

function requestDrinks(filterInfo, results, setResults, handleResults) {
  if (filterInfo.radio === 'ingredients') {
    drinksForIngridients(filterInfo.text).then((recipes) => handleResults(recipes));
  }

  if (filterInfo.radio === 'name') {
    drinksForName(filterInfo.text).then((recipes) => handleResults(recipes));
  }

  if (filterInfo.radio === 'first-letter' && filterInfo.text.length === 1) {
    drinksForFirstName(filterInfo.text).then((recipes) => setResults(recipes));
  }
  if (filterInfo.radio === 'first-letter' && filterInfo.text.length !== 0) {
    global.alert('Sua busca deve conter somente 1 (um) caracter');
  }
  if (!results) {
    global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }
}

export default requestDrinks;
