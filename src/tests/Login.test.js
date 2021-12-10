import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

// utilizei as constantes do projeto TrybeWallet
// https://github.com/tryber/sd-015-b-project-trybewallet/blob/master/src/tests/login.test.js

const EMAIL_INPUT_TEST_ID = 'email-input';
const PASSWORD_INPUT_TEST_ID = 'password-input';
const VALID_EMAIL = 'alguem@email.com';
const VALID_PASSWORD = '1234567';
const INVALID_EMAIL_0 = 'email';
const INVALID_EMAIL_1 = 'email@com@';
const INVALID_EMAIL_2 = 'emailcom@';
const INVALID_EMAIL_3 = 'alguem@email.';
const INVALID_PASSWORD = '23456';
const TOKEN = '1';

describe('Testando a tela de Login', () => {
  test('Teste se existe um campo para e-mail com o data-testids: /email-input/', () => {
    renderWithRouter(<App />);
    const emailId = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const emailPlaceholder = screen.getByPlaceholderText('Email');
    expect(emailId).toBeInTheDocument();
    expect(emailPlaceholder).toBeInTheDocument();
  });

  test('Teste se existe campo validado da Senha', () => {
    renderWithRouter(<App />);
    const passwordId = screen.getByTestId(PASSWORD_INPUT_TEST_ID);
    const passwordPlaceholder = screen.getByPlaceholderText('senha');
    expect(passwordId).toBeInTheDocument();
    expect(passwordPlaceholder).toBeInTheDocument();
  });

  test('Teste se existe botão só é ativado com e-mail e senha válidos', () => {
    renderWithRouter(<App />);

    const button = screen.getByText(/Entrar/i);
    expect(button).toBeDisabled();

    const email = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const senha = screen.getByTestId(PASSWORD_INPUT_TEST_ID);

    userEvent.type(email, INVALID_EMAIL_0);
    userEvent.type(senha, VALID_PASSWORD);
    expect(button).toBeDisabled();

    userEvent.type(email, INVALID_EMAIL_1);
    userEvent.type(senha, VALID_PASSWORD);
    expect(button).toBeDisabled();

    userEvent.type(email, INVALID_EMAIL_2);
    userEvent.type(senha, VALID_PASSWORD);
    expect(button).toBeDisabled();

    userEvent.type(email, VALID_EMAIL);
    userEvent.type(senha, INVALID_PASSWORD);
    expect(button).toBeDisabled();

    userEvent.type(email, INVALID_EMAIL_3);
    userEvent.type(senha, VALID_PASSWORD);
    expect(button).toBeDisabled();

    userEvent.type(email, VALID_EMAIL);
    userEvent.type(senha, VALID_PASSWORD);
    expect(button).toBeEnabled();
  });

  test('Teste a funcionalidade do botão em reencaminhar e salvar no localStorage', () => {
    renderWithRouter(<App />);

    const button = screen.getByText(/Entrar/i);
    const email = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const senha = screen.getByTestId(PASSWORD_INPUT_TEST_ID);

    userEvent.type(email, VALID_EMAIL);
    userEvent.type(senha, VALID_PASSWORD);
    userEvent.click(button);

    expect(window.localStorage.getItem('mealsToken')).toEqual(TOKEN);
    expect(window.localStorage.getItem('cocktailsToken')).toEqual(TOKEN);
    expect(window.localStorage.getItem('user')).toEqual(`{"email":"${VALID_EMAIL}"}`);
  });
});
