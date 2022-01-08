import React from 'react';
import { useLocation } from 'react-router-dom';
import DetailsRecipe from '../components/DetailsDrinks';

function DrinkRecipeDetails() {
  const location = useLocation();
  const { pathname } = location;
  const id = pathname.split('/')[2];
  return (
    <div>{ DetailsRecipe(id) }</div>
  );
}

export default DrinkRecipeDetails;
