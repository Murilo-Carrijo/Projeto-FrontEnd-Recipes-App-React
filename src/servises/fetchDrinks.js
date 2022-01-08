const ENDPOINT_DRINKS_INGREDIENT = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
const ENDPOINT_DRINKS_NAME = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const ENDPOINT_DRINKS_FIRST_LETTER = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';
const ENDPOINT_FILTER_DRINKS_CATEGORIES = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';
const ENDPOINT_LIST_DRINKS_CATEGORIES = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

export async function requestDrinksIngredients(drink) {
  const ENDPOINT = `${ENDPOINT_DRINKS_INGREDIENT}${drink}`;

  const response = await fetch(ENDPOINT);
  const { drinks } = await response.json();
  return drinks;
}

export async function requestDrinksByName(drink) {
  const ENDPOINT = `${ENDPOINT_DRINKS_NAME}${drink}`;

  const response = await fetch(ENDPOINT);
  const { drinks } = await response.json();
  return drinks;
}

export async function requestDrinksByFirstLetter(drink) {
  const ENDPOINT = `${ENDPOINT_DRINKS_FIRST_LETTER}${drink}`;

  const response = await fetch(ENDPOINT);
  const { drinks } = await response.json();
  return drinks;
}

export async function requestDrinksFilterCategories(drink) {
  const ENDPOINT = `${ENDPOINT_FILTER_DRINKS_CATEGORIES}${drink}`;

  const response = await fetch(ENDPOINT);
  const { drinks } = await response.json();
  return drinks;
}

export async function requestDrinksListCategories() {
  const response = await fetch(ENDPOINT_LIST_DRINKS_CATEGORIES);
  const { drinks } = await response.json();
  return drinks;
}
