import React, { useContext, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import MyContext from '../context/MyContext';
import { fetchFoodsDetails } from '../servises/fetchApi';

function DetailsRecipe(id) {
  const { details, setDetails } = useContext(MyContext);

  useEffect(() => {
    fetchFoodsDetails(id).then((food) => setDetails(food));
  }, []);

  function setIngridients() {
    return Object.entries(details)
      .filter((type) => type[0].includes('Ingred'))
      .map((ingridient, index) => (
        <tr key={ index }>
          <tb
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { ingridient[1] }
          </tb>
        </tr>
      ));
  }

  function setMeasure() {
    return Object.entries(details)
      .filter((type) => type[0].includes('Measure'))
      .map((measure, index) => (
        <tr key={ index }>
          <tb
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            { measure[1] }
          </tb>
        </tr>
      ));
  }

  return (
    <div>
      <img
        src={ details.strMealThumb }
        alt={ details.strTags }
        data-testid="recipe-photo"
        width="425"
        height="350"
      />
      <h1 data-testid="recipe-title">
        { details.strMeal }
      </h1>
      <button type="button" data-testid="share-btn">
        Compartilhar
      </button>
      <button type="button" data-testid="favorite-btn">
        Favoritar
      </button>
      <p data-testid="recipe-category">
        { details.strCategory }
      </p>
      {setIngridients()}
      {setMeasure()}
      <p data-testid="instructions">
        { details.strInstructions }
      </p>
      <param name="video" value={ details.strVideo } />
      <ember
        data-testid="video"
        src={ details.strVideo }
        type="application/x-shockwave-flash"
      />
      <p data-testid={ `${0}-recomendation-card` }>
        receitas recomendadas
      </p>
      <button
        type="button"
        data-testid="start-recipe-btn"
        onClick={ () => {
          window.location.href += '/in-progress';
        } }
      >
        iniciar a receita
      </button>
    </div>
  );
}

export default DetailsRecipe;
