import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import { requestDrinksRandomRecipe } from '../servises/fetchDrinks';

function ExploreDrink() {
  const history = useHistory();

  function pathRedirect(path) {
    history.push(path);
  }

  async function handleDrinkRandom() {
    const response = await requestDrinksRandomRecipe();
    const { idDrink } = response[0];

    pathRedirect(`/bebidas/${idDrink}`);
  }

  return (
    <>
      <h3>Explore Drink</h3>
      <section>
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => pathRedirect('bebidas/ingredientes') }
        >
          Por Ingredientes
        </button>
        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ () => handleDrinkRandom() }
        >
          Me Surpreenda!
        </button>
      </section>
      <Footer />
    </>
  );
}

export default ExploreDrink;
