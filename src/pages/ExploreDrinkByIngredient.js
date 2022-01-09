import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import IngredientCard from '../components/IngredientCard';
import MyContext from '../context/MyContext';
import {
  requestDrinksIngredients,
  requestDrinksIngredientsList,
} from '../servises/fetchDrinks';

function ExploreDrinkByIngredient() {
  const { setRecipeIngredients } = useContext(MyContext);

  const [drinksIngredients, setDrinksIngredients] = useState([]);

  const history = useHistory();

  async function handleRecipeDrinks(ingredient) {
    const drinks = await requestDrinksIngredients(ingredient);
    setRecipeIngredients(drinks);
    history.push('/bebidas');
  }

  useEffect(() => {
    requestDrinksIngredientsList().then((response) => {
      setDrinksIngredients(response);
    });
  }, []);

  function renderIngredients() {
    const MAX_LENGTH = 12;
    return (
      <section>
        {drinksIngredients.map(({ strIngredient1 }, index) => (
          index < MAX_LENGTH && (
            <button
              key={ index }
              type="button"
              onClick={ () => handleRecipeDrinks(strIngredient1) }
            >
              <IngredientCard
                name={ strIngredient1 }
                index={ index }
                thumb={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png` }
              />
            </button>
          )
        ))}
      </section>
    );
  }

  return (
    <>
      <h3>Explore Drink By Ingredient</h3>
      {renderIngredients()}
      <Footer />
    </>
  );
}

export default ExploreDrinkByIngredient;
