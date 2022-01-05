import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';

const RenderHeader = () => {
  const location = useLocation();
  if (location.pathname !== '/') {
    return (
      <Header />
    );
  }
  return null;
};

export default RenderHeader;
