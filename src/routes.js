import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Drinks from './pages/Drinks';
import FoodRecipeDetails from './pages/FoodRecipeDetails';
import DrinkRecipeDetails from './pages/DrinkRecipeDetails';
import FoodRecipeInProgress from './pages/FoodRecipeInProgress';
import DrinkRecipeInProgress from './pages/DrinkRecipeInProgress';
import Explore from './pages/Explore';
import ExploreFood from './pages/ExploreFood';
import ExploreDrink from './pages/ExploreDrink';
import ExploreFoodByIngredient from './pages/ExploreFoodByIngredient';
import ExploreDrinkByIngredient from './pages/ExploreDrinkByIngredient';
import ExploreFoodByArea from './pages/ExploreFoodByArea';
import RecipesMade from './pages/RecipesMade';
import RecipesFavorites from './pages/RecipesFavorites';
import Foods from './pages/Foods';
import Login from './pages/Login';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

const Routes = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={ Login }
    />
    <Route
      exact
      path="/comidas"
      component={ Foods }
    />
    <Route
      exact
      path="/bebidas"
      component={ Drinks }
    />
    <Route
      exact
      path="/comidas/:id"
      component={ FoodRecipeDetails }
    />
    <Route
      exact
      path="/bebidas/:id"
      component={ DrinkRecipeDetails }
    />
    <Route
      exact
      path="/comidas/:id/in-progress"
      component={ FoodRecipeInProgress }
    />
    <Route
      exact
      path="/bebidas/:id/in-progress/"
      component={ DrinkRecipeInProgress }
    />
    <Route
      exact
      path="/explorar"
      component={ Explore }
    />
    <Route
      exact
      path="/explorar/comidas"
      component={ ExploreFood }
    />
    <Route
      exact
      path="/explorar/bebidas"
      component={ ExploreDrink }
    />
    <Route
      exact
      path="/explorar/comidas/ingredientes"
      component={ ExploreFoodByIngredient }
    />
    <Route
      exact
      path="/explorar/bebidas/ingredientes"
      component={ ExploreDrinkByIngredient }
    />
    <Route
      exact
      path="/explorar/comidas/area"
      component={ ExploreFoodByArea }
    />
    <Route
      exact
      path="/perfil"
      component={ Profile }
    />
    <Route
      exact
      path="/receitas-feitas"
      component={ RecipesMade }
    />
    <Route
      exact
      path="/receitas-favoritas"
      component={ RecipesFavorites }
    />
    <Route
      exact
      path="/*"
      component={ NotFound }
    />
  </Switch>
);

export default Routes;
