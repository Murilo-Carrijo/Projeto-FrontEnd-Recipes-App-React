import {
  requestDrinksIngredients,
  requestDrinksByName,
  requestDrinksByFirstLetter,
} from '../servises/fetchDrinks';

function requestDrinks(filterInfo, results, setResults) {
  if (filterInfo.radio === 'ingredients') {
    requestDrinksIngredients(filterInfo.text)
      .then((recipes) => setResults(recipes));
  }

  if (filterInfo.radio === 'name') {
    requestDrinksByName(filterInfo.text)
      .then((recipes) => setResults(recipes));
  }

  if (filterInfo.radio === 'first-letter' && filterInfo.text.length === 1) {
    requestDrinksByFirstLetter(filterInfo.text)
      .then((recipes) => setResults(recipes));
  }

  if (filterInfo.radio === 'first-letter' && filterInfo.text.length !== 0) {
    global.alert('Sua busca deve conter somente 1 (um) caracter');
  }

  if (!results) {
    global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }
}

export default requestDrinks;
