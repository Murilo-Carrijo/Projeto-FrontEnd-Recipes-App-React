import React from 'react';
import { Route, Switch } from 'react-router';
import Provider from './context/MyProvider';
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
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider>
      <Switch>
        <Route
          exact
          path="/"
          component={ Login }
        />
        <Route
          path="/comidas"
          component={ Foods }
        />
        <Route
          path="/bebidas"
          component={ Drinks }
        />
        <Route
          path="/comidas/:id"
          component={ FoodRecipeDetails }
        />
        <Route
          path="/bebidas/:id"
          component={ DrinkRecipeDetails }
        />
        <Route
          path="/comidas/:id/in-progress"
          component={ FoodRecipeInProgress }
        />
        <Route
          path="/bebidas/:id/in-progress/"
          component={ DrinkRecipeInProgress }
        />
        <Route
          path="/explorar"
          component={ Explore }
        />
        <Route
          path="/explorar/comidas"
          component={ ExploreFood }
        />
        <Route
          path="/explorar/bebidas"
          component={ ExploreDrink }
        />
        <Route
          path="/explorar/comidas/ingredientes"
          component={ ExploreFoodByIngredient }
        />
        <Route
          path="/explorar/bebidas/ingredientes"
          component={ ExploreDrinkByIngredient }
        />
        <Route
          path="/explorar/comidas/area"
          component={ ExploreFoodByArea }
        />
        <Route
          path="/perfil"
          component={ Profile }
        />
        <Route
          path="/receitas-feitas"
          component={ RecipesMade }
        />
        <Route
          path="/receitas-favoritas"
          component={ RecipesFavorites }
        />
      </Switch>
    </Provider>
  );
}

export default App;
