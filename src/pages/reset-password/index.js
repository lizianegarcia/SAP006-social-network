/* eslint-disable import/no-cycle */
import { changePage } from '../../routes/changePage.js';
import firebase from '../../services/firebase.js';

const createPage = () => {
  const rootElement = document.createElement('div');
  const contentnewElement = `
  <section class="container">
  <div class="forms-container">
    <div class="reset-container">
      <form action="#" class="reset-password">
        <img src="img/Amitié1.png" alt="" class="logo">
        <h2 class="title-reset">Para redefinir sua senha, informe o endereço de e-mail cadastrado:</h2>
        <div class="input-field">
          <i class="fas fa-user"></i>
          <input type="text" id='sign-in-email' placeholder="digite seu e-mail." />
        </div>        
        <input type="submit" value="redefinir senha" id="entrar" class="btn solid" />
      </form>
        </section>
  `;
  rootElement.innerHTML = contentnewElement;
  const btnResetPassword = rootElement.querySelector('.reset-password');
  btnResetPassword.addEventListener('submit', async (event) => {
    event.preventDefault();
    const emailInput = rootElement.querySelector('#sign-in-email');

    const email = emailInput.value;

    await firebase.forgotYourPassword(email);
    changePage('/login');
  });

  return rootElement;
};

export default createPage;
