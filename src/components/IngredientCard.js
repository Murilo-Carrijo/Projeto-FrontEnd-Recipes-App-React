import React from 'react';
import PropTypes from 'prop-types';

export default function IngredientCard({ index, name, thumb }) {
  return (
    <div data-testid={ `${index}-ingredient-card` }>
      <img
        src={ `${thumb}` }
        alt={ `${name}` }
        data-testid={ `${index}-card-img` }
        width="200"
      />
      <p data-testid={ `${index}-card-name` }>{name}</p>
    </div>
  );
}

IngredientCard.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
};
