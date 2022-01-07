import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';

function CategoriesButtons({ listCategories }) {
  const { selectCategories, setSelectCategories } = useContext(MyContext);

  return (
    <>
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
};

export default CategoriesButtons;
