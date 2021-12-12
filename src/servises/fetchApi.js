export async function foodsForIngridients(food) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${food}`);
  const dataApi = await response.json();
  return dataApi.meals;
}

export async function foodsForName(food) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`);
  const dataApi = await response.json();
  return dataApi.meals;
}

export async function foodsForFirstLetter(food) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${food}`);
  const dataApi = await response.json();
  return dataApi.meals;
}

export async function drinksForIngridients(drinks) {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drinks}`);
  const dataApi = await response.json();
  return dataApi.ingredients;
}

export async function drinksForName(drinks) {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinks}`);
  const dataApi = await response.json();
  return dataApi.drinks;
}

export async function drinksForFirstName(drinks) {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${drinks}`);
  const dataApi = await response.json();
  return dataApi.drinks;
}
