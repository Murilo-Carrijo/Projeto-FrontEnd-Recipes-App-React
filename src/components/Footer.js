import '../styles/Footer.css';
import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

export default function Footer() {
  return (
    <footer className="footer-container" data-testid="footer">
      <nav className="footer-nav">
        <Link to="/comidas">
          <img
            data-testid="food-bottom-btn"
            src={ mealIcon }
            alt="mealIcon"
          />
          <span>Comidas</span>
        </Link>
        <Link to="/explorar">
          <img
            data-testid="explore-bottom-btn"
            src={ exploreIcon }
            alt="exploreIcon"
          />
          <span>Explorar</span>
        </Link>
        <Link to="/bebidas">
          <img
            data-testid="drinks-bottom-btn"
            src={ drinkIcon }
            alt="drinkIcon"
          />
          <span>Bebidas</span>
        </Link>
      </nav>
    </footer>
  );
}
