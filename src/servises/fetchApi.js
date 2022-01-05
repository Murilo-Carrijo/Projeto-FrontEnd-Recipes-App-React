const msgAlert = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

export async function foodsForIngridients(food) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${food}`);
    const dataApi = await response.json();
    return dataApi.meals;
  } catch (err) {
    console.error(global.alert(msgAlert));
  }
}

export async function foodsForName(food) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`);
    const dataApi = await response.json();
    return dataApi.meals;
  } catch (err) {
    console.error(global.alert(msgAlert));
  }
}

export async function foodsForFirstLetter(food) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${food}`);
    const dataApi = await response.json();
    return dataApi.meals;
  } catch (err) {
    console.error(global.alert(msgAlert));
  }
}

export async function drinksForIngridients(drinks) {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drinks}`);
    const dataApi = await response.json();
    return dataApi.ingredients;
  } catch (err) {
    console.error(global.alert(msgAlert));
  }
}

export async function drinksForName(drinks) {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinks}`);
    const dataApi = await response.json();
    return dataApi.drinks;
  } catch (err) {
    console.error(global.alert(msgAlert));
  }
}

export async function drinksForFirstName(drinks) {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${drinks}`);
    const dataApi = await response.json();
    return dataApi.drinks;
  } catch (err) {
    console.error(global.alert(msgAlert));
  }
}
