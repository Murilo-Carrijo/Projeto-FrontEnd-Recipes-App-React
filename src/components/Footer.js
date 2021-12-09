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
        <Link data-testid="food-bottom-btn" to="/comidas">
          <img src={ mealIcon } alt="mealIcon" />
          <span>Comidas</span>
        </Link>
        <Link data-testid="explore-bottom-btn" to="/bebidas">
          <img src={ exploreIcon } alt="exploreIcon" />
          <span>Explorar</span>
        </Link>
        <Link data-testid="drinks-bottom-btn" to="/bebidas">
          <img src={ drinkIcon } alt="drinkIcon" />
          <span>Bebidas</span>
        </Link>
      </nav>
    </footer>
  );
}
