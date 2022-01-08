import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import { requestFoodsRandomRecipe } from '../servises/fetchFoods';

function ExploreFood() {
  const history = useHistory();

  function pathRedirect(path) {
    history.push(path);
  }

  async function handleFoodsRandom() {
    const response = await requestFoodsRandomRecipe();
    const { idMeal } = response[0];

    pathRedirect(`/comidas/${idMeal}`);
  }

  return (
    <>
      <h3>Explore Food</h3>
      <section>
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => pathRedirect('comidas/ingredientes') }
        >
          Por Ingredientes
        </button>
        <button
          type="button"
          data-testid="explore-by-area"
          onClick={ () => pathRedirect('comidas/area') }
        >
          Por Local de Origem
        </button>
        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ () => handleFoodsRandom() }
        >
          Me Surpreenda!
        </button>
      </section>
      <Footer />
    </>
  );
}

export default ExploreFood;
