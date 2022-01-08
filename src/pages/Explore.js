import React from 'react';
import Footer from '../components/Footer';

function Explore() {
  return (
    <>
      <button
        type="button"
        data-testid="explore-food"
      >
        All
      </button>
      <button
        type="button"
        data-testid="explore-drinks"
      >
        All
      </button>
      <Footer />
    </>
  );
}

export default Explore;
