import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import '../styles/Login.css';

function Login() {
  const {
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword } = useContext(MyContext);

  const history = useHistory();

  function validateUser() {
    const MIN_NUMBER = 6;
    const emailRe = /\S+@\S+\.\S+/;

    const validadeEmail = emailRe.test(userEmail);
    const validadePassword = userPassword.length > MIN_NUMBER;

    if (validadeEmail && validadePassword) {
      return false;
    }
    return true;
  }

  function saveLocalStorage(e) {
    e.preventDefault();
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    const user = {
      email: userEmail,
    };
    localStorage.setItem('user', JSON.stringify(user));
    history.push('/comidas');
  }

  return (
    <div className="content-login-img">
      <div className="content-form-opacity">
        <h1 className="title-project">Projeto de Receitas</h1>
        <form className="content-form" onSubmit={ saveLocalStorage }>
          <h2 className="title-login">Login</h2>
          <input
            className="input-login"
            data-testid="email-input"
            placeholder="Email"
            type="email"
            value={ userEmail }
            onChange={ (e) => setUserEmail(e.target.value) }
          />
          <input
            className="input-login"
            data-testid="password-input"
            placeholder="senha"
            type="password"
            value={ userPassword }
            onChange={ (e) => setUserPassword(e.target.value) }
          />
          <button
            className="button-login"
            data-testid="login-submit-btn"
            type="submit"
            disabled={ validateUser() }
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

// logica do useHistory retirada do codigo da aula:
// https://github.com/tryber/sd-015-b-live-lectures/pull/53/files
