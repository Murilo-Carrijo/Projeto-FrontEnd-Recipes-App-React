import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';
import { requestDrinksByName } from '../servises/fetchDrinks';
import { requestFoodsByName } from '../servises/fetchFoods';

function CategoriesButtons({ listCategories, recipeType }) {
  const {
    setDrinksRecipes,
    setFoodsRecipes,
    selectCategories,
    setSelectCategories,
  } = useContext(MyContext);

  async function getAll(isfetch, setstate) {
    const allRecipe = await isfetch('');
    setstate(allRecipe);
  }

  function handleButtonClick() {
    if (recipeType === 'drink') {
      getAll(requestDrinksByName, setDrinksRecipes);
    } else {
      getAll(requestFoodsByName, setFoodsRecipes);
    }
  }

  return (
    <>
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ handleButtonClick }
      >
        All
      </button>
      {listCategories.map((category, index) => (
        <button
          key={ index }
          type="button"
          data-testid={ `${category.strCategory}-category-filter` }
          onClick={ ({ target }) => {
            if (target.innerHTML === selectCategories) {
              setSelectCategories('');
            } else {
              setSelectCategories(target.innerHTML);
            }
          } }
        >
          {category.strCategory}
        </button>
      ))}
    </>
  );
}

CategoriesButtons.propTypes = {
  listCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
  recipeType: PropTypes.string.isRequired,
};

export default CategoriesButtons;
