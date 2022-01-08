import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function RecipeCard({ type, id, index, name, thumb }) {
  return (
    <Link
      to={ `/${type}/${id}` }
      key={ id }
    >
      <div data-testid={ `${index}-recipe-card` }>
        <p data-testid={ `${index}-card-name` }>{name}</p>
        <img
          src={ `${thumb}` }
          alt={ `${name}` }
          data-testid={ `${index}-card-img` }
          width="200"
        />
      </div>
    </Link>
  );
}

RecipeCard.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
};
