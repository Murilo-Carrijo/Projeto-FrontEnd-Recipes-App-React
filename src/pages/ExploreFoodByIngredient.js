import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import IngredientCard from '../components/IngredientCard';
import MyContext from '../context/MyContext';
import {
  requestFoodsIngredients,
  requestFoodsIngredientsList,
} from '../servises/fetchFoods';

function ExploreFoodByIngredient() {
  const { setRecipeIngredients } = useContext(MyContext);

  const [foodsIngredients, setFoodsIngredients] = useState([]);

  const history = useHistory();

  async function handleRecipeFoods(ingredient) {
    const foods = await requestFoodsIngredients(ingredient);
    setRecipeIngredients(foods);
    history.push('/comidas');
  }

  useEffect(() => {
    requestFoodsIngredientsList().then((response) => {
      setFoodsIngredients(response);
    });
  }, []);

  function renderIngredients() {
    const MAX_LENGTH = 12;
    return (
      <section>
        {foodsIngredients.map(({ strIngredient }, index) => (
          index < MAX_LENGTH && (
            <button
              key={ index }
              type="button"
              onClick={ () => handleRecipeFoods(strIngredient) }
            >
              <IngredientCard
                name={ strIngredient }
                index={ index }
                thumb={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
              />
            </button>
          )
        ))}
      </section>
    );
  }
  return (
    <>
      <h3>Explore Food By Ingredient</h3>
      {renderIngredients()}
      <Footer />
    </>
  );
}

export default ExploreFoodByIngredient;
