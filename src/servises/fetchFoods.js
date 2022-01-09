const ENDPOINT_MEALS_INGREDIENT = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
const ENDPOINT_MEALS_NAME = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const ENDPOINT_MEALS_FIRST_LETTER = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
const ENDPOINT_FILTER_MEALS_CATEGORIES = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
const ENDPOINT_LIST_MEALS_CATEGORIES = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const ENDPOINT_MEALS_RANDOM_RECIPE = 'https://www.themealdb.com/api/json/v1/1/random.php';
const ENDPOINT_LIST_MEALS_INGREDIENT = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';

export async function requestFoodsIngredients(food) {
  const ENDPOINT = `${ENDPOINT_MEALS_INGREDIENT}${food}`;

  const response = await fetch(ENDPOINT);
  const { meals } = await response.json();
  return meals;
}

export async function requestFoodsByName(food) {
  const ENDPOINT = `${ENDPOINT_MEALS_NAME}${food}`;

  const response = await fetch(ENDPOINT);
  const { meals } = await response.json();
  return meals;
}

export async function requestFoodsByFirstLetter(food) {
  const ENDPOINT = `${ENDPOINT_MEALS_FIRST_LETTER}${food}`;

  const response = await fetch(ENDPOINT);
  const { meals } = await response.json();
  return meals;
}

export async function requestFoodsFilterCategories(food) {
  const ENDPOINT = `${ENDPOINT_FILTER_MEALS_CATEGORIES}${food}`;

  const response = await fetch(ENDPOINT);
  const { meals } = await response.json();
  return meals;
}

export async function requestFoodsListCategories() {
  const response = await fetch(ENDPOINT_LIST_MEALS_CATEGORIES);
  const { meals } = await response.json();
  return meals;
}

export async function requestFoodsRandomRecipe() {
  const response = await fetch(ENDPOINT_MEALS_RANDOM_RECIPE);
  const { meals } = await response.json();
  return meals;
}

export async function requestFoodsIngredientsList() {
  const response = await fetch(ENDPOINT_LIST_MEALS_INGREDIENT);
  const { meals } = await response.json();
  console.log(meals);
  return meals;
}
