import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Login() {
  const { email, setEmail, password, setPassword } = useContext(MyContext);

  function validateUser() {
    const MIN_NUMBER = 6;
    const emailRe = /\S+@\S+\.\S+/;

    const validadeEmail = emailRe.test(email);
    const validadePassword = password.length >= MIN_NUMBER;

    if (validadeEmail && validadePassword) {
      return false;
    }
    return true;
  }

  return (
    <form>
      <input
        data-testid="email-input"
        placeholder="Email"
        type="email"
        value={ email }
        onChange={ (e) => setEmail(e.target.value) }
      />
      <input
        data-testid="password-input"
        placeholder="senha"
        type="password"
        value={ password }
        onChange={ (e) => setPassword(e.target.value) }
      />
      <button
        data-testid="login-submit-btn"
        type="submit"
        disabled={ validateUser() }
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
