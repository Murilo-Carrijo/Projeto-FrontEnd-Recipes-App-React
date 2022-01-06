import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Profile() {
  function clearLocalStorage() {
    localStorage.removeItem('user');
    localStorage.removeItem('mealsToken');
    localStorage.removeItem('cocktailsToken');
    localStorage.removeItem('doneRecipes');
    localStorage.removeItem('favoriteRecipes');
    localStorage.removeItem('inProgressRecipes');
  }

  const userEmail = localStorage.getItem('user');

  return (
    <section>
      <div>
        <h1>Perfil</h1>
        <span data-testid="profile-email">{userEmail}</span>
        <Link
          to="/receitas-feitas"
          data-testid="profile-done-btn"
        >
          Receitas Feitas
        </Link>
        <Link
          to="/receitas-favoritas"
          data-testid="profile-favorite-btn"
        >
          Receitas Favoritas
        </Link>
        <Link
          to="/"
          onClick={ () => clearLocalStorage() }
          data-testid="profile-logout-btn"
        >
          Sair
        </Link>
      </div>
      <Footer />
    </section>
  );
}

export default Profile;
