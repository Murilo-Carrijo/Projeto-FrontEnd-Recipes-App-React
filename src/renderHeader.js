import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from './components/Header';

const RenderHeader = () => {
  const history = useHistory();
  if (history.location.pathname !== '/') {
    return (
      <Header />
    );
  }
  return null;
};

export default RenderHeader;
