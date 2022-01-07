import React from 'react';
import { useLocation } from 'react-router-dom';
import DetailsRecipe from '../components/DetailsFood';

// utilizar o useLocation
function FoodRecipeDetails() {
  const location = useLocation();
  const { pathname } = location;
  const id = pathname.split('/')[2];
  return (
    <div>{ DetailsRecipe(id) }</div>
  );
}

export default FoodRecipeDetails;
