import {
  requestFoodsIngredients,
  requestFoodsByName,
  requestFoodsByFirstLetter,
} from '../servises/fetchFoods';

export default function conditionsForRequestsFoods(filterInfo, results, setResults) {
  if (filterInfo.radio === 'ingredients') {
    requestFoodsIngredients(filterInfo.text)
      .then((recipes) => setResults(recipes));
  }

  if (filterInfo.radio === 'name') {
    requestFoodsByName(filterInfo.text)
      .then((recipes) => setResults(recipes));
  }

  if (filterInfo.radio === 'first-letter' && filterInfo.text.length === 1) {
    requestFoodsByFirstLetter(filterInfo.text)
      .then((recipes) => setResults(recipes));
  }

  if (filterInfo.radio === 'first-letter' && filterInfo.text.length !== 0) {
    global.alert('Sua busca deve conter somente 1 (um) caracter');
  }

  if (!results) {
    global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }
}
