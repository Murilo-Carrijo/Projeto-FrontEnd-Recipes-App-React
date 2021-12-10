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

export async function foodsForFirstName(food) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${food}`);
  const dataApi = await response.json();
  return dataApi.meals;
}
