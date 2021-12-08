import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MyContext from './MyContext';

function Provider({ children }) {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const context = {
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
  };

  return (
    <MyContext.Provider value={ context }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
