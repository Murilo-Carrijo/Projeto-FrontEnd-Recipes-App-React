import PropTypes from 'prop-types';
import React from 'react';
import MyContext from './MyContext';

function Provider({ children }) {
  return (
    <MyContext.Provider value="pages">
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
